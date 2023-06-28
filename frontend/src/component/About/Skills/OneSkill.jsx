import React from 'react'
import './style.css';

export default function OneSkill({data}) {
  return (
    <>
     <div className="skill">
      <div className="skill-name"> {data.skill?.length >= 13 ? data.skill.substring(0, 13)+"...": data.skill} </div>
      <div className="skill-level">
        <div className="skill-percent" style={{width: `${data.marks}%`}}></div>
      </div>
      <div className="skill-percent-number">{data.marks}%</div>
    </div>
    </>
  )
}
