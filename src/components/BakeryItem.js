import "./BakeryItem.css"; 

function BakeryItem(props) {
  const itemName = props.details.name
  const description = props.details.description
  const price = props.details.price
  const ingredient = props.details.ingredient
  const type = props.details.type
  const imageURL = props.details.image

  return (
    <div className="BakeryItem">
      <h1>{itemName}</h1> 
      <b>{description}</b>
      <br></br>
      <b>{"$ " + price}</b>
      <br></br>
      <b>{"Main Ingredient: " + ingredient}</b>
      <br></br>
      <b>{"Dessert Type: " + type}</b>
      &nbsp; 
      <img src={imageURL}/>
      &nbsp; 
      &nbsp; 
      <button onClick={() => {
        props.addToCart(props.details)
      }}>Add to Cart!</button>

      &nbsp; 
      &nbsp; 
      &nbsp; 
      &nbsp; 

    </div>
  );
}

export default BakeryItem;