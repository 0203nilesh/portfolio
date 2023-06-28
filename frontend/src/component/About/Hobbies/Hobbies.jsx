import React from 'react'
import './style.css';
import { useSelector } from 'react-redux';

export default function Hobbies() {
  const {hobbiesData}= useSelector((state)=> state.hobbies);
  // console.log(hobbiesData);
  return (
    <>
     <div className="flip-card">
    <div className="flip-card-inner">
        <div className="flip-card-front">
            <p className="title">Hobbies</p>
            <img src="./image/skill.png" alt="" />
        </div>
        <div className="flip-card-back">
          <img src="./image/hobbies.png" alt="" />
            <p className="title">Hobbies</p>
            <ul>
              {hobbiesData.map((hobbie)=>{
                return (
                  <>
                  <li>{hobbie.hobbie} </li>
                  </>
                )
              })}
              {/* <li>Playing Cricket</li>
              <li>Playing Table Tennis</li>
              <li>Morning Walk</li> */}
            </ul>
        </div>
    </div>
</div>
    </>
  )
}
