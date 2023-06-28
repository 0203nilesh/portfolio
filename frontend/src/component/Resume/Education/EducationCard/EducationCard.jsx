import React from 'react'
import './style.css';

export default function EducationCard({data}) {
  return (
    <>
    <div className="resume-card-container">
        <div className="resume-card">
            <div className="resume-front-content">
                <p>{data?.course}</p>
                <img src="./image/graduation.png" alt="classroom" />
                {/* <p>12th standard</p> */}
            </div>
            <div className="resume-content">
              <span className='show-marks' > {data?.marks} </span>
                <p className="resume-heading">{data?.course}</p>
                {/* <p className="resume-heading">12th standard</p> */}
                {/* <p className='school' ><span>JNV Mandsaur </span> <span>2019-2020</span></p> */}
                <p className='school' ><span>{data?.institute} </span> <span>{data?.year}</span></p>
                <img src="./image/school.png" alt="school" />
                <p>
                 {data?.description}
                </p>
            </div>
        </div>
    </div>
    </>
  )
}
