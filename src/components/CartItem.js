// TODO: create a component that displays a single bakery item
import "./CartItem.css"; 

function CartItem(props) {
  const itemName = props.details.name
  const index = props.index

  return (
    <div className="CartItem">
      <h1>{itemName}</h1> 
      &nbsp;
      &nbsp; 
      &nbsp; 
      <button onClick={() => {
        props.removeFromCart(index)
      }}>Remove From Cart</button>

      &nbsp; 
      &nbsp; 
      &nbsp; 
      &nbsp; 

    </div>
  );
}

export default CartItem;