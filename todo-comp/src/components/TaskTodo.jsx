function TaskTodo({todoItems}) {
  return (
    <>
    {todoItems.map((item)=>
        <div style={{'display':'flex','justifyContent':'center','gap':'100px','marginTop':'20px'}} key={item.name}>
        <p>{item.name}</p>
        <p style={{'marginLeft':'50px'}}>{item.dueDate}</p>
        <button className="btn btn-danger">Delete</button>
    </div>
    )}
    </> 
  )
}

export default TaskTodo;