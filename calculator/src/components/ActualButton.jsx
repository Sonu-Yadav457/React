import React from 'react'

function ActualButton({btnText,handleOnClick}) {
  return (
    <div style={{'display':'flex','justifyContent':'center','alignItems':'center'}}>
        <button style={{'padding':'10px','backgroundColor':'white','border':'1px solid grey'}} onClick={handleOnClick}>{btnText}</button>
    </div>
  )
}

export default ActualButton