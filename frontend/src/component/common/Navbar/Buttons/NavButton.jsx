import React from 'react'
import './style.css';
import { useNavigate } from 'react-router-dom';

export default function NavButton({text, path}) {
  const navigate= useNavigate();
  return (
    <button  onClick={()=>{
      navigate(path);
    }} className='button'>
        {text}
    </button>
  )
}
