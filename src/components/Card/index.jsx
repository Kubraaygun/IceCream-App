import React from 'react'

const Card = ({item}) => {
  return (
    <div style={{width:"190px"}} className='d-flex flex-column align-items-center gap-1 border rounded p-3'>
        <img height={100} src={item.imagePath} alt='çeşit-resim' />
        <span className='fs-5'>{item.name}</span>
    </div>

    
  )
}

export default Card