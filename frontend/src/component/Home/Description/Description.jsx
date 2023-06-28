import React from 'react'
import './style.css';
import ViewButton from './ViewButton/ViewButton';
import Heading from './Heading/Heading';
import { useSelector } from 'react-redux';

export default function About() {
  const {aboutData}= useSelector((state)=> state.about);
  // console.log(aboutData);
  return (
    <>
    {aboutData && (<>
      <div className="about-card">
        <div className="about-image">
          <Heading text={aboutData?.job} />
            <p className="about-paragraph">
              {aboutData?.description}
            </p>
            {/* <img src="https://res.cloudinary.com/dpfh3tdny/image/upload/v1687851884/portfolio/3_vhgmre.png" alt="image" /> */}
            {/* <ViewButton text={"Resume"} /> */}
        </div>
        <img src={aboutData?.image} alt="image" />
  </div>
    </>)}
    </>
  )
}
