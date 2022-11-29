import "./App.css";
import { useEffect, useState } from "react";
import bakeryData from "./assets/game-data.json";
import BakeryItem from "./components/BakeryItem.js";
import CartItem from "./components/CartItem.js";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // SHOPPING CART ITEMS
  const [shopCartItems, setShopCartItems] = useState([])
  
  // Sort 1: Price - sort from cheapest (first) to most expensive (last)
  const [priceSort, setPriceSort] = useState(false)
  // Filter 1: Flavor (Blueberry,Caramel, Chocolate, Various, Fruit, Strawberry)
  const [flavorFilterList, setFlavorFilterList] = useState([])
  const flavorList = ["Blueberry", "Caramel", "Chocolate", "Various", "Fruit","Strawberry"]
  // Filter 2: Type of Dessert (Cake, Ice Cream, Cookie, Pudding, Assortment, Donut, Tart,Macaron)
  const [typeFilterList, setTypeFilterList] = useState([])
  const typeList = ["Cake", "Ice Cream", "Cookie", "Pudding", "Assortment", "Donut", "Tart", "Macaron"]
  const [original, setOriginal] = useState(false)

  const [shoppingCartRender, setShoppingCartRender] = useState([])

  const [isSorted, setIsSorted] = useState(false)

  // Declare the filtered, processed list containing bakery data first.
  let newFilteredList = bakeryData.filter(item => {
    // check empty, 
    return flavorFilterList.includes(item.ingredient) || typeFilterList.includes(item.type) || flavorFilterList.length == 0;
  })
  // if sorted, we sort the list and set it to the original list
  if (isSorted) {
    newFilteredList = newFilteredList.sort(function(a,b) {return (a.price > b.price) ? 1 : (a.price < b.price) ? -1 : 0});
  }
  
  const allItems = bakeryData // all items list for reverting back to this state

  // Method to add to shopping cart
  function addToCart(item) {
    setShopCartItems([...shopCartItems, item])
  }

  // Aggregator function
  function getSum(array) {
    const priceArray = array.map(item => item.price)
    const sum = priceArray.reduce((price, a) => price + a, 0)
    return sum
  }
  
  // Method to remove from shopping cart
  function removeFromCart(indexToRemove) {
    //using filter
    // the first argument of filter function is value, second is index
    // (v,i)
    const newCart = shopCartItems.filter((_, origIndex)=>{
      //you want your condition for whether the item stays here
      return origIndex !== indexToRemove
    })
    setShopCartItems(newCart)  
  }

  // Sorting function
  function sort(array) {
    const sorted = newFilteredList.sort(function(a,b) {return (a.price > b.price) ? 1 : (a.price < b.price) ? -1 : 0});
    setIsSorted(!isSorted) 
  }

  function handleChangeFlavorToChocolate (event) {
    //  Check if Chocolate already exists inisde the list, and if not, we add it
    // if it already exists, we remove it from the list.
    if (!original) {
      const currFlavor = "Chocolate"
      let newList = flavorFilterList
      if (!flavorFilterList.includes(currFlavor)) { 
        newList = [...flavorFilterList, currFlavor] 
        // update filter list 
        setFlavorFilterList(newList)
      } else { 
        const index = flavorFilterList.indexOf(currFlavor);
        newList = flavorFilterList.splice(index) // remove the specific element
        // update filter list  
        setFlavorFilterList([...flavorFilterList])
      }
    }
    else { // we have "original" filter checked

    }
  };

  function handleChangeFlavorToBlueberry (event) {
    if (!original) {
      const currFlavor = "Blueberry"
      let newList = flavorFilterList 
      if (!flavorFilterList.includes(currFlavor)) { 
        newList = [...flavorFilterList, currFlavor] 
        // update filter list 
        setFlavorFilterList(newList) 
      } else {  
        const index = flavorFilterList.indexOf(currFlavor);
        newList = flavorFilterList.splice(index) // remove the specific element
        // update filter list  
        setFlavorFilterList([...flavorFilterList])

      }
    }
    else { // we have "original" filter checked

    }
  };

  function handleChangeFlavorToAll (event) {
    setOriginal(!original)
    setFlavorFilterList([])
    setTypeFilterList([])
    newFilteredList = bakeryData.filter(item => {
      return flavorList.includes(item.ingredient);
    })  
  }

  function filterCake() { 
    if (!original) {
      const currType = "Cake"
      let newList = []
      if (!typeFilterList.includes(currType)) { 
        newList = [...typeFilterList, currType] 
        // update filter list 
        setTypeFilterList(newList)
      } else { 
        const index = typeFilterList.indexOf(currType);
        newList = typeFilterList.splice(index) // remove the specific element
        // update filter list 
        setTypeFilterList([...typeFilterList])
      }
    }
    else { // we have "original" filter checked

    } 
  }

  // if filter list empty,
  return (
    <div className="App">
      <div className="left">
      <h1>Pandora Bakery</h1> 
      {/* menu */}
      <div className="BakeryMenu">
      {newFilteredList.map((item, index) => (
        <div className="BakeryItem">
          <BakeryItem details={item} key={index} addToCart={addToCart} /> 
        </div>
      ))}
      </div>

      </div>
      <div className="right">
        <div className="Side-bar">
            Side bar
            <fieldset className="MuiFormControl-root">
            &nbsp;
            &nbsp; 
            <legend className="MuiFormControl-root"></legend>
              <b>Sort by Price</b>
              <label class="container">From Cheapest
                <input type="checkbox" onChange={sort}></input>
                <span class="checkmark"></span>
              </label>
              &nbsp;
              &nbsp; 
              <legend className="MuiFormControl-root"></legend>
              <b>Filter by Ingredients</b>
              <label class="container">Chocolate
                <input type="checkbox" onChange={handleChangeFlavorToChocolate} checked={null}></input>
                <span class="checkmark"></span>
              </label>
              
              <label class="container">Blueberry
                <input type="checkbox" onChange={handleChangeFlavorToBlueberry} checked={null}></input>
                <span class="checkmark"></span>
              </label>

              <label class="container">All Ingredients
                <input type="checkbox" onChange={handleChangeFlavorToAll} checked={null}></input>
                <span class="checkmark"></span>
              </label>
              &nbsp;
              &nbsp; 
              <b>Filter by Type of Dessert</b>
              <label class="container">Cake
                <input type="checkbox" onChange={filterCake} checked={null}></input>
                <span class="checkmark"></span>
              </label>

            </fieldset>
        </div>
        <div className="left">
        <div className="Side-bar">
          <h2>Cart</h2>
            {shopCartItems.map((item, index) => (
              <div className="CartItem">
                {/* Bind creates a new function where whenever you call it always has the specified argument */}
                <CartItem details={item} key={index} index={index} removeFromCart={removeFromCart.bind(index)} /> 
              </div>
            ))} 
            <b>Grand total:{"$"+getSum(shopCartItems)}</b>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;