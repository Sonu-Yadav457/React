import React, { useState } from 'react'
import Container from './components/Container'
import InputTask from './components/InputTask'
import ActualTaskList from './components/ActualTaskList';

function App() {
  const [newtaskList,setNewTaskList] = useState([]);

  const handleAddTaskClicked = (itemName,itemDueDate) =>{
      let newTask = [...newtaskList,{name:itemName,dueDate:itemDueDate}];
      setNewTaskList(newTask);
  }
  const handleOnClickDelete = (itemValue)=> {
    let filteredList = newtaskList.filter((item) =>item.name !== itemValue);
    setNewTaskList(filteredList);
  }
  return (
    <Container>
      <InputTask handleAddTaskClicked={handleAddTaskClicked}/>
      {newtaskList.length ===0 && <h3 style={{'marginLeft':'400px','marginTop':'30px'}}>No Task Enjoy</h3>}
      <ActualTaskList ToShow={newtaskList} handleOnClickDelete={handleOnClickDelete}/>

    </Container>
  )
}

export default App