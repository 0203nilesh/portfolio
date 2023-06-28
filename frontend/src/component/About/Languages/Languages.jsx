import React from 'react'
import './style.css';
import { useSelector } from 'react-redux';

export default function Languages() {
  const {languageData}= useSelector((state)=> state.languages);
  return (
    <>
     <div className="flip-card">
    <div className="flip-card-inner">
        <div className="flip-card-front">
            <p className="title">Languages</p>
            <img src="./image/languages.png" alt="" />
        </div>
        <div className="flip-card-back">
          <img src="./image/languages1.png" alt="" />
            <p className="title">Languages</p>
            <ul>
              {languageData.map((lang)=>{
                return(<>
                <li>{lang.language}</li>
                </>)
              })}
            </ul>
        </div>
    </div>
</div>
    </>
  )
}
