import React from 'react'

function ActualTaskList({ToShow,handleOnClickDelete}) {
  return (
    <><ul className='list-group'>
        {ToShow.map((item)=> <li style={{'display':'flex','gap':'215px', 'marginLeft':'170px','marginTop':'20px'}} key={item.name}>
            <p>{item.name}</p>
            <p>{item.dueDate}</p>
            <button className='btn btn-danger'onClick={()=> handleOnClickDelete(item.name)}>Delete</button>
        </li>)}

    </ul>
    </>
  )
}

export default ActualTaskList