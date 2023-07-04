import axios from "axios";

const API= axios.create({baseURL: "https://societybackend.onrender.com"});

export const getHobbies= ()=> API.get('/routes/hobbies');
export const getLanguages= ()=> API.get('/routes/languages');
export const getConact= ()=> API.get('/routes/contact');
export const getSkills= ()=> API.get('/routes/skills');
export const getAbout= ()=> API.get('/routes/about');
export const getProjects= ()=> API.get('/routes/projects');
export const getEducations= ()=> API.get('/routes/educations');
export const getExperiences= ()=> API.get('/routes/experience');
