import React from 'react'
import { Form } from 'react-router-dom'

const form = () => {
  return (
    <form className='addform' >
        <label htmlFor="">Add Item</label>
        <input type="text" name="" id="additem" autoFocus placeholder='add itee' required/>
        <button type='submit' aria-label='add item'></button>
      
    </form>
  )
}

export default form
