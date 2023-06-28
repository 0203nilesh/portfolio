import React, { useState } from 'react'
import "./style.css";
import Carousel from './Carousel/Carousel';

export default function Card({data}) {
  const [mouse, setMouse]= useState(false);
  return (
    <>
     <div className="book">
      <p onMouseEnter={()=>{setMouse(true)}}  onMouseLeave={()=>{setMouse(false)}} >
        <Carousel mouse={mouse} images={data.images} />
      </p>
    <div className="cover" onMouseEnter={()=>{setMouse(true)}}  onMouseLeave={()=>{setMouse(false)}}>
        <p className='project-heading' >{data?.name}</p>
        <p className='project-description'> {data?.description} </p>
    </div>
   </div>
    </>
  )
}
