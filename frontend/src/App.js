import Home from "./component/Home/Home";
import Navbar from "./component/common/Navbar/Navbar";
import './style.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from './component/Contact/Contact'
import About from "./component/About/About";
import Resume from "./component/Resume/Resume";
// import {useDispatch} from 'react-redux'
// import { useEffect } from "react";
// import { fetch_about, fetch_contact, fetch_education, fetch_experience, fetch_hobbies, fetch_lenguages, fetch_projects, fetch_skills } from "./action";

function App() {
  // const dispatch= useDispatch();
  // useEffect(()=>{
  //   // dispatch(fetch_lenguages());
  //   // dispatch(fetch_hobbies());
  //   // dispatch(fetch_contact());
  //   // dispatch(fetch_about());
  //   // dispatch(fetch_education());
  //   // dispatch(fetch_experience());
  //   // dispatch(fetch_skills());
  //   dispatch(fetch_projects());
  // }, [])
  return (
      <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/resume" element={<Resume/>}  />
        </Routes>
      </BrowserRouter>
      </>
  );
}

export default App;
