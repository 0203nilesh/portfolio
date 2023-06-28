import React from 'react'
import './style.css';
import { useDispatch } from 'react-redux';
import { end_loading } from '../../../action/loader';

export default function Loader() {
    // const dispatch= useDispatch();
    // setTimeout(()=>{
    //     dispatch(end_loading());
    // }, 3000)
  return (
    <>
    <div className="loader-div">

    <div className="pyramid-loader">
  <div className="wrapper">
    <span className="side side1"></span>
    <span className="side side2"></span>
    <span className="side side3"></span>
    <span className="side side4"></span>
    <span className="shadow"></span>
  </div>  
</div>
    </div>
    </>
  )
}
