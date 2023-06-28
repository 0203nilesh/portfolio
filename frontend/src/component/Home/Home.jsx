import React, { useEffect } from 'react'
import Description from './Description/Description';
import Projects from './Projects/Projects';
import {useDispatch, useSelector} from 'react-redux';
import { fetch_about, fetch_projects } from '../../action';
import Navbar from '../common/Navbar/Navbar';
import Loader from '../common/Loader/Loader';

export default function Home() {
  const {isLoading}= useSelector((state)=> state.loader);
  const dispatch= useDispatch();
  useEffect(()=>{
    dispatch(fetch_about());
    dispatch(fetch_projects());
  },[])
  return (
        <>
        {isLoading? (<>
        <Loader/>
        </>) : (<>
        <Navbar/>
        <Description/>
        <Projects/>
          </>)}
        </>
  )
}
