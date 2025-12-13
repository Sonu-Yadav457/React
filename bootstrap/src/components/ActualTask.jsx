import React from 'react'
import DeleteTask from './DeleteTask'
function ActualTask() {
  return (
    <div style={{'display':'flex','justifyContent':'center','gap':'100px','marginTop':'20px'}}>
        <p>Buy Milk</p>
        <p style={{'marginLeft':'50px'}}>4/10/23</p>
        <DeleteTask/>
    </div>
  )
}

export default ActualTask