import React from 'react';
import './style.css';
import ExperiecenCard from './ExperienceCard/ExperienceCard';
import { useSelector } from 'react-redux';

export default function Experience() {
  const {experienceData} = useSelector((state)=>state.experience);
  // console.log(experienceData);
  // const experienceData= [
  //   {job: "Web Developer", year: "Dec 2022 - Jan 2023", company: "Planet cast Media Services pvt limited", description: "This is description for company1" },
  //   {job: "Google cloud Platform", year: "May 2023 - June 2023", company: "Trusted Wear Tech", description: "This is description for company 2." },
  // ]
  return (
    <div className="experience-container">
        <div className="heading">
            <img src="./image/experience.gif" alt="experience" />
            <p>Experience</p>   
        </div>
        <div className="experiences">
          {experienceData.map((experience)=>{
            return(
              <ExperiecenCard data={experience} />
            )
          })}
        </div>
    </div>
  )
}
