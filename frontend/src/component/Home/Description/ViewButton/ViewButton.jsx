import React from 'react'
import './style.css'
import { useNavigate } from 'react-router-dom'

export default function ViewButton({text}) {
  const navigate= useNavigate();
  return (
    <>
    <button onClick={()=>{navigate('/resume')}} className="description-btn">
        {text}
    </button>
    </>
  )
}
