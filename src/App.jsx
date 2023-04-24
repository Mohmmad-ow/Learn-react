import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Carousel from "./carousel";
import FAQs from "./FAQs";
import Quote from "./quote";
import ShoppingList from "./ShoppingList";
import SearchUsers from "./SearchUsers";
import Viewer from "./viewer";





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
        <hr />
        <div  style={{padding: "20px 0"}} className="shoppingList-con">
            <h1>Day 5 (not really): Shopping list</h1>
            <SearchUsers />
        </div>  
        <hr />
        <div  style={{padding: "20px 0"}} className="shoppingList-con">
            <h1>Day 6: Video Selector</h1>
            <Viewer />
        </div>  
       
    </div>
  );
}

export default App;
