import express from 'express';
import {getHobbies} from '../reducers/Hobbies.js';
import {getLanguages} from '../reducers/Languages.js';
import {getAbouts} from '../reducers/About.js';
import {getContacts} from '../reducers/Contact.js';
import {getExperiences} from '../reducers/Experiences.js';
import {getEducations} from '../reducers/Educations.js';
import {getSkills} from '../reducers/Skills.js';
import {getProjects} from '../reducers/Project.js';

const Router= express.Router();

Router.get('/hobbies', getHobbies);
Router.get('/languages', getLanguages);
Router.get('/about', getAbouts);
Router.get('/contact', getContacts);
Router.get('/experience', getExperiences);
Router.get('/educations' , getEducations);
Router.get('/skills', getSkills);
Router.get('/projects', getProjects);

export default Router;