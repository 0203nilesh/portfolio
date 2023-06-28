import React from 'react'
import './style.css';
import SubmitButton from './SubmitButton/SubmitButton';
import Navbar from '../common/Navbar/Navbar';

export default function Contact() {
  return (
    <>
    <Navbar/>
    <div class="contact-form-container">
      <form class="form">
        <div class="form-group">
          <label for="email">Your Email</label>
          <input type="text" id="email" name="email" required=""/>
        </div>
        <div class="form-group">
          <label for="textarea">What you want to say?</label>
          <textarea name="textarea" id="textarea" rows="10" cols="50" required="">          </textarea>
        </div>
        <SubmitButton text={"Submit"} />
      </form>
    </div>
    </>
  )
}
