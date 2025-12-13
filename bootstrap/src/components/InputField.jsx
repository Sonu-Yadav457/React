import React from 'react'

function InputField() {
  return (
    <div style={{'display':'flex','gap':'10px','justifyContent':'center','marginTop':'20px'}}>
        <input type="text" id='task' placeholder='Enter to do here' style={{
            'padding':'0.5rem','borderRadius':'10px','border':'1px solid grey'
        }}/>
        <input type="date" name="date" id="date" style={{
            'padding':'0.5rem','borderRadius':'10px','border':'1px solid grey'
        }} />
        <button className='btn btn-success'>Add Task</button>
      
    </div>
  )
}

export default InputField