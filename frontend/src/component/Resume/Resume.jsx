import React, { useEffect } from 'react'
import Education from './Education/Education'
import Experience from './Experience/Experience'
import {useDispatch, useSelector} from 'react-redux';
import {fetch_education, fetch_experience} from '../../action/index';
import Navbar from '../common/Navbar/Navbar';
import Loader from '../common/Loader/Loader';

export default function Resume() {
  const {isLoading}= useSelector((state)=>state.loader);
  const dispatch= useDispatch();
  useEffect(()=>{
    dispatch(fetch_education());
    dispatch(fetch_experience());
  },[])
  return (
    <>
    {isLoading? (<> <Loader/> </>): (<>
    <Navbar/>
    <div className="resume-container">
        <Education/>
        <Experience/>
    </div>
    </>)}
    </>
  )
}
