import { ENDLOADING, GETABOUT, GETCONTACT, GETEDUCATIONS, GETEXPERIENCE, GETHOBBIES, GETLANGUAGES, GETPROJECTS, GETSKILLS, SHOWALERT, STARTLOADING } from "../constant";
import * as api from '../api/index';

export const fetch_lenguages= ()=> async(dispatch)=>{
    try {
        dispatch({type: STARTLOADING});
        let languages= await api.getLanguages();
        languages= languages.data;
        console.log(languages);              
        if(languages?.message){
            dispatch({type: SHOWALERT, data: languages})
        }else{
            dispatch({type: GETLANGUAGES, data: languages});
        }
        dispatch({type: ENDLOADING});
    } catch (error) {
        console.log(error);
    }
}
export const fetch_hobbies= ()=> async(dispatch)=>{
    try {
        dispatch({type: STARTLOADING});
        let hobbies= await api.getHobbies();
        hobbies= hobbies.data;
        console.log(hobbies);              
        if(hobbies?.message){
            dispatch({type: SHOWALERT, data: hobbies})
        }else{
            dispatch({type: GETHOBBIES, data: hobbies});
        }
        dispatch({type: ENDLOADING});
    } catch (error) {
        console.log(error);
    }
}
export const fetch_contact= ()=> async(dispatch)=>{
    try {
        dispatch({type: STARTLOADING});
        let contact= await api.getConact();
        contact= contact.data;
        console.log(contact);              
        if(contact?.message){
            dispatch({type: SHOWALERT, data: contact})
        }else{
            dispatch({type: GETCONTACT, data: contact[0]});
        }
        dispatch({type: ENDLOADING});
    } catch (error) {
        console.log(error);
    }
}
export const fetch_skills= ()=> async(dispatch)=>{
    try {
        dispatch({type: STARTLOADING});
        let skills= await api.getSkills();
        skills= skills.data;
        console.log(skills);              
        if(skills?.message){
            dispatch({type: SHOWALERT, data: skills})
        }else{
            dispatch({type: GETSKILLS, data: skills});
        }
        dispatch({type: ENDLOADING});
    } catch (error) {
        console.log(error);
    }
}
export const fetch_about= ()=> async(dispatch)=>{
    try {
        // dispatch({type: STARTLOADING});
        let about= await api.getAbout();
        about= about.data;
        console.log(about);              
        if(about?.message){
            dispatch({type: SHOWALERT, data: about})
        }else{
            dispatch({type: GETABOUT, data: about[0]});
            // dispatch({type: ENDLOADING});
        }
    } catch (error) {
        console.log(error);
    }
}
export const fetch_education= ()=> async(dispatch)=>{
    try {
        dispatch({type: STARTLOADING});
        let educations= await api.getEducations();
        educations= educations.data;
        console.log(educations);              
        if(educations?.message){
            dispatch({type: SHOWALERT, data: educations})
        }else{
            dispatch({type: GETEDUCATIONS, data: educations});
        }
        dispatch({type: ENDLOADING});
    } catch (error) {
        console.log(error);
    }
}
export const fetch_experience= ()=> async(dispatch)=>{
    try {
        dispatch({type: STARTLOADING});
        let experience= await api.getExperiences();
        experience= experience.data;
        console.log(experience);              
        if(experience?.message){
            dispatch({type: SHOWALERT, data: experience})
        }else{
            dispatch({type: GETEXPERIENCE, data: experience});
        }
        dispatch({type: ENDLOADING});
    } catch (error) {
        console.log(error);
    }
}
export const fetch_projects= ()=> async(dispatch)=>{
    try {
        // dispatch({type: STARTLOADING});
        let projects= await api.getProjects();
        projects= projects.data;
        console.log(projects);              
        if(projects?.message){
            dispatch({type: SHOWALERT, data: projects})
        }else{
            dispatch({type: GETPROJECTS, data: projects});
            // dispatch({type: ENDLOADING});
        }
    } catch (error) {
        console.log(error);
    }
}