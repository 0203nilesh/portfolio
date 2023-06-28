import React from 'react'
import EducationCard from './EducationCard/EducationCard'
import './style.css';
import { useSelector } from 'react-redux';

export default function Education() {
    const {educationData} = useSelector((state)=>state.educations);
    // console.log(educationData);
    // const educationData= [
    //     {class: "10th", school: "JNV Mandsaur", year: "2017-2018", description: "This is description for 10th class."},
    //     {class: "12th", school: "JNV Mandsaur", year: "2019-2020", description: "This is description for 12th class."},
    //     {class: "B.Tech", school: "NIT Mizoram", year: "2020-2024", description: "This is description for Bachelor of technology."}
    // ]
  return (
    <div className="education-container">
        <div className="heading">
            <img src="./image/blackboard.gif" alt="education" />
            <p>Education</p>
        </div>
        <div className='education-inner-container' >
        {educationData.map((education)=>{
            return (
                <EducationCard data={education} />
            )
        })}
        </div>
    </div>
  )
}
