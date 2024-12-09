import React from 'react'
import './Card.css'
import Cdata from './Cdata'

const Card = () => {
  return (
    <>
      <div className="card grid top">
        {Cdata.map((value)=>{
          return(
            <div className="box" key={value.id}>
          <div className="img">
            <img src={value.cover} alt="" />
          </div>
          <span>{value.category}</span>
          <h2>{value.title}</h2>
        </div>
          )
        })}
      </div>
    </>
  )
}

export default Card
