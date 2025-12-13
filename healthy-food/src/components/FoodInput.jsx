import React from 'react'

function FoodInput({handleOnkeyDown}) {
  return (
    <input type="text" id='Input' style={{'width':'100%','padding':'5px','marginBottom':'10px'}} onKeyDown={handleOnkeyDown}/>
  )
}

export default FoodInput;