import React from 'react'
import { useState } from 'react';
import './style.css';

export default function Alert({alertMessage}) {
    const [display, setDisplay]= useState(alertMessage?.isAlert ? "flex": "none");
    let bgColor ,textColor;
    if(alertMessage?.type==='success'){
        bgColor="green";
        textColor='white';
    }else if (alertMessage?.type==='warning'){
        bgColor="yellow";
        textColor='black';
    }else {
        bgColor="red";
        textColor='white';
    }
    const applyStyle= {
        display: display,
        backgroundColor: bgColor,
        color: textColor,
    }
    setTimeout(()=>{
        setDisplay('none');
    }, 3000)
  return (
    <>
    <div className="alert-box" style={applyStyle}>
        <p>
            {alertMessage?.message}
        </p>
        <i onClick={()=>{setDisplay('none')}} style={{position: "absolute", color: textColor}} class="fa-solid fa-xmark"></i>
    </div>
    </>
  )
}
