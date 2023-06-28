import React from 'react'
import Card from './Card/Card'
import './style.css';
import Heading from './Heading/Heading';
import { useSelector } from 'react-redux';

export default function Projects() {
  const {projectData} = useSelector((state)=> state.projects);
  // console.log(projectData);
  return (
    <>
    {projectData?.length!==0 && (<>
      <div className="project-container">
        {/* <div className="project-heading"> */}
            <Heading text={"Projects"} />
        {/* </div> */}
        <div className="project">
          {projectData.map((project)=>{
            return (
              <Card key={project._id}  data={project} />
            )
          })}
        </div>
    </div>
    </>)}
    </>
  )
}
