import React from 'react'
import form from './form'

const Item = ({items,handlecheck,handledelete}) => {
  return (
    <main>
      <div>
        <p>{items}</p>
        <button>{handlecheck}</button>
        <button>{handledelete}</button>
      </div>
      
    </main>
  )
}

export default Item
