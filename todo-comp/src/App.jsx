import Heading from "./components/Heading";
import InputTask from "./components/InputTask";
import TaskTodo from "./components/TaskTodo";

function App() {
  let todoItems = [{
    name:"Go to College",
    dueDate:"2024-06-10",
  }
  ,{
    name:"Do Homework",
    dueDate:"2024-06-11",
  }
  ,{
    name:"Wash Dishes",
    dueDate:"2024-06-12",
  }
  ];
  return (
    <center>
      <Heading/>
      <InputTask/>
      <TaskTodo todoItems = {todoItems}/>
    </center>
  )
}

export default App;