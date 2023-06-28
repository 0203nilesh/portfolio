import React from 'react'
import './style.css';

export default function Heading({text}) {
  return (
    <>
    <button className='description-heading' >
      <span className="transition"></span>
      <span className="gradient"></span>
      <span className="label">{text}</span>
    </button>
    </>
  )
}
