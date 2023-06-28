import {  combineReducers } from "redux";
import hobbies from "./hobbies";
import skills from "./skills";
import experience from "./experience";
import educations from "./educations";
import contact from "./contact";
import languages from "./languages";
import about from "./about";
import projects from "./projects";
import loader from './loader';
import alert from './alert';

export default combineReducers({
    hobbies,
    skills,
    about,
    projects,
    contact,
    languages,
    educations,
    experience,
    loader,
    alert,
})