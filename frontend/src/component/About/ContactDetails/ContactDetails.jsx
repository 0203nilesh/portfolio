import React from 'react'
import './style.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function ContactDetails() {
  const {contactData}= useSelector((state)=> state.contact);
  // console.log(contactData);
  return (
    <>
     <div className="flip-card">
    <div className="flip-card-inner">
        <div className="flip-card-front">
            <p className="title">Contact</p>
            <img src="./image/contact.png" alt="contact" />
        </div>
        <div className="flip-card-back ">
          <img src="./image/contacts1.png" alt="contact1" />
            <p className="title">Contact</p>
              <div className="contact-inner-box">
                <Link to={`tel: ${contactData?.mobile}`}>
               <i  className="fa-solid fa-mobile-screen-button"></i> 
                </Link>
                <Link to={`mailto:${contactData?.email}`} >
               <i className="fa-regular fa-envelope"></i>
                </Link>
                <Link to={contactData?.github}>
              <i className="fa-brands fa-github"></i> 
                </Link>
                <Link to={contactData?.website} >
              <img src="./image/website.png" alt="" /> 
                </Link>
              </div>
        </div>
    </div>
</div>
    </>
  )
}
