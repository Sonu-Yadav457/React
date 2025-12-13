import React, { useState } from 'react'
import styles from '../styles/ButtonGrid.module.css'
import ActualButton from './ActualButton'
function ButtonGrid({btnArray,handleOnClick}) {
  return (
    <div className={styles.buttonGrid}>
        {btnArray.map(((btnVal)=> 
        <ActualButton btnText={btnVal} key={btnVal} handleOnClick={handleOnClick}/>
        ))}
    </div>
  )
}

export default ButtonGrid