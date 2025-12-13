import { useState } from "react";
import Item from "./Item";

const FoodItems = ({propItems}) => {
    let [activeItems,setActiveItems] = useState([])
    let onBuyButton = (item,event) => {
        setActiveItems([...activeItems, item])
    }
    return <>
        <ul className="list-group">
        {propItems.map((item)=> 
            <Item key={item} propFoodItem = {item} bought={activeItems.includes(item)} handleOnClick={(event) =>onBuyButton(item,event)}/>  
        )}
      </ul>
    </>
}
export default FoodItems;