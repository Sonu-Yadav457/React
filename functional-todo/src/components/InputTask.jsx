import React, { useState } from "react";
import styles from './InputTask.module.css'
function InputTask({handleAddTaskClicked}) {
    let [itemName,setItemName] = useState("")
    let [itemDueDate,setItemDueDate] = useState("")
    const handleOnChangeInput = (event) =>{
        setItemName(event.target.value);
    }
    const handleOnChangeDate = (event) =>{
        setItemDueDate(event.target.value);
    }
    const AddButton = () =>{
        handleAddTaskClicked(itemName,itemDueDate)
        setItemName("");
        setItemDueDate("");

    }
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-4">
          <input type="text" placeholder="Enter Task Here" className={styles.InputTask} onChange={handleOnChangeInput} value={itemName}/>
        </div>
        <div className="col-2">
          <input type="date" className={styles.inputDate} onChange={handleOnChangeDate} value={itemDueDate}/>
        </div>
        <div className="col-2">
          <button className="btn btn-success" onClick={AddButton}>Add Task</button>
        </div>
      </div>
    </div>
  );
}

export default InputTask;
