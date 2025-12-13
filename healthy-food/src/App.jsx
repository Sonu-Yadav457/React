import React, { useState } from "react";
import ErrorMessage from "./components/ErrorMessage";
import FoodItems from "./components/FoodItems";
import FoodInput from "./components/FoodInput";
import Conatiner from "./components/Conatiner";

function App() {
  let items = [];
  let [itemState,setItemState] = useState(items);
  // let textState = useState("");
  // let [textShow,settextShow] = textState;
  const handleOnkeyDown = (event) => {
    if(event.key === 'Enter'){
      let newItems = [...itemState,event.target.value];
      // settextShow(event.target.value);
      setItemState(newItems)
      event.target.value = "";
    }
  }

  // const handleonChange = (event) => {
  //   console.log(event.target.value);
  //   settextShow(event.target.value);

  // }
  return (
    <Conatiner>
      <h1>Healthy Food</h1>
      <FoodInput handleOnkeyDown={handleOnkeyDown}/>
      {/* <p>{textShow}</p> */}
      <ErrorMessage propItems ={itemState}/>
      <FoodItems propItems ={itemState}/>
    </Conatiner>
  );
}

export default App;
