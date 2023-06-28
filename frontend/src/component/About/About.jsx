import React, { useEffect } from 'react'
import './style.css';
import Hobbies from './Hobbies/Hobbies';
import Languages from './Languages/Languages';
import ContactDetails from './ContactDetails/ContactDetails';
import Skill from './Skills/Skill';
import  {useDispatch, useSelector} from 'react-redux';
import {fetch_contact, fetch_hobbies, fetch_lenguages, fetch_skills} from '../../action/index.js';
import Navbar from '../common/Navbar/Navbar';
import Loader from '../common/Loader/Loader';

export default function About() {
  const {isLoading} = useSelector((state)=>state.loader);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetch_hobbies());
    dispatch(fetch_contact())
    dispatch(fetch_skills())
    dispatch(fetch_lenguages());
  },[])
  return (
    <>
    {isLoading? (<> <Loader/> </>): (
      <>
    <Navbar/>
    <div className="about-container">
      <div>
        <Hobbies/>
        <Languages/>
        <ContactDetails/>
      </div>
        <Skill/>
    </div>
      </>
    )}
    </>
  )
}
