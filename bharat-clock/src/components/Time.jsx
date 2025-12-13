import React from 'react'

function Time() {
    let today = new Date();
    let todayDate = today.toLocaleDateString();
    let toadayTime = today.toLocaleTimeString();
  return (
    <div>
        <p>This is the current time: {todayDate} - {toadayTime}</p>
    </div>
  )
}

export default Time