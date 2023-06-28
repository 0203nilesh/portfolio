import React from 'react'
import './style.css';

export default function SubmitButton({text}) {
  return (
    <>
    <button className='submit-button'> {text}
    </button>
    </>
  )
}
