import React from 'react'
import './style.css';
import OneSkill from './OneSkill';
import { useSelector } from 'react-redux';

export default function Skill() {
  const {skillData}= useSelector((state)=>state.skills);
  return (
    <>
    <div className="skill-card-box">
  <div className="header">My Skills</div>
  <div className="body">
    {skillData.map((skills)=>{
      return (<>
      <OneSkill key={skills._id} data={skills} />
      </>)
    })}
    {/* <OneSkill data={{skill: "HTML", percent: "90"}} />
    <OneSkill data={{skill: "CSS", percent: "80"}} />
    <OneSkill data={{skill: "JavaScript", percent: "70"}} />
    <OneSkill data={{skill: "CPP", percent: "50"}} />
    <OneSkill data={{skill: "MongoDB", percent: "70"}} />
    <OneSkill data={{skill: "Express.js", percent: "60"}} />
    <OneSkill data={{skill: "React.js", percent: "70"}} />
    <OneSkill data={{skill: "Node.js", percent: "50"}} />
    <OneSkill data={{skill: "Bootstrap", percent: "70"}} />
    <OneSkill data={{skill: "Data Structure and Algorithm", percent: "50"}} />
    <OneSkill data={{skill: "Operating System", percent: "70"}} /> */}
  </div>
</div>
    </>
  )
}
