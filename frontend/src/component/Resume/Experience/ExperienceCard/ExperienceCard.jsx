import React from 'react'
import './style.css';

export default function ExperiecenCard({data}) {
  return (
    <>
    <div className="resume-card-container experience-card-container">
        <div className="resume-card">
            <div className="resume-front-content">
                <p>{data?.job}</p>
                {/* <p>Web Developer</p> */}
                <img src="./image/company.gif" alt="company" />
            </div>
            <div className="resume-content">
                <p className="resume-heading">{data?.job}</p>
                {/* <p className="resume-heading">12th standard</p> */}
                {/* <p className='school' ><span>JNV Mandsaur </span> <span>2019-2020</span></p> */}
                <p className='school' ><span>{data?.company} </span> <span>{data?.timePeriod}</span></p>
                <img src="./image/company1.png" alt="school" />
                <p>
                 {data?.description}
                </p>
            </div>
        </div>
    </div>
    </>
  )
}
