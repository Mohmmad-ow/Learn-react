import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Carousel from "./carousel";
import FAQs from "./FAQs";
import Quote from "./quote";





function ShopItem({textItem}) {
  const [item, setItem] = useState(textItem)
  return(
    <>{item}</>
  )
}
function ShoppingList() {
  const [items, setItems] = useState([])

  function addItem(event) {
    event.preventDefault();
    const text = event.target.item.value
    
    if (text !== '') {
     
      let item = { html: <ShopItem textItem={text} />, addLine: false}
      for (let i = 0; i < items.length; i++) {
        let x = items[i]
        
        
        if (x.html.props.textItem == text) {
          item = { html: <ShopItem textItem={text} />, addLine: true}
          let newItems = [...items]
          newItems[i] = item
          setItems(newItems)
          return
        }
      }
     
      
      let newItems = [...items, item]
      setItems(newItems)
      event.target.reset()
    }
  }
  function removeItem(removeItem) {

    const newItem = items.filter((item) => {
      return item !== removeItem
    })

    setItems(newItem)
  }
  


  return (
    <div className="shoppingList-div">
      <ol>
        {items.map((item) => {
          const key = self.crypto.randomUUID()
         
          return(
            <li className="item-li" key={key}>
              <p className={item.addLine ? "under" : ""}>
              {item.html}
              </p>
              <button className="item-btn" onClick={() => removeItem(item)}>X</button>
            </li>
          )
        })}
      </ol>
      <form className="add-form" onSubmit={addItem}>
        <input placeholder="Enter the item" className="add-text" type="text" name="item" id="text" />
        <button className="add-btn">Add Item</button>
      </form>
    </div>
  )
}

function App() {
  return (
    <div className="App">
        <div>
          <h1>Day 1: Carousel</h1>
          <Carousel />
        </div>
        <hr />
        <div  style={{padding: "20px 0"}}>
          <h1>Day 2: FAQs</h1>
          <FAQs />
        </div>
        <hr />
        <div style={{padding: "20px 0"}}>
          <h1>Day 3: Random Quotes Generator</h1>
          <Quote />
        </div>
        <hr />
        <div  style={{padding: "20px 0"}} className="shoppingList-con">
            <h1>Day 4: Shopping list</h1>
            <ShoppingList />
        </div>
    </div>
  );
}

export default App;
