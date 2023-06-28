import { ENDLOADING, GETABOUT, GETCONTACT, GETEDUCATIONS, GETEXPERIENCE, GETHOBBIES, GETLANGUAGES, GETPROJECTS, GETSKILLS, SHOWALERT, STARTLOADING } from "../constant";
import * as api from '../api/index';

export const fetch_lenguages= ()=> async(dispatch)=>{
    try {
        dispatch({type: STARTLOADING});
        const {data}= await api.getLanguages();
        dispatch({type: GETLANGUAGES, data: data});
        dispatch({type: ENDLOADING});
    } catch (error) {
        console.log(error);
    }
}
export const fetch_hobbies= ()=> async(dispatch)=>{
    try {
        dispatch({type: STARTLOADING});
        const {data}= await api.getHobbies();
        dispatch({type: GETHOBBIES, data: data});
        dispatch({type: ENDLOADING});
    } catch (error) {
        console.log(error);
    }
}
export const fetch_contact= ()=> async(dispatch)=>{
    try {
        dispatch({type: STARTLOADING});
        const {data}= await api.getConact();
        dispatch({type: GETCONTACT, data: data[0]});
        dispatch({type: ENDLOADING});
    } catch (error) {
        console.log(error);
    }
}
export const fetch_skills= ()=> async(dispatch)=>{
    try {
        dispatch({type: STARTLOADING});
        const {data}= await api.getSkills();
        dispatch({type: GETSKILLS, data: data});
        dispatch({type: ENDLOADING});
    } catch (error) {
        console.log(error);
    }
}
export const fetch_about= ()=> async(dispatch)=>{
    try {
        await dispatch({type: STARTLOADING});
        const {data}= await api.getAbout();
        const action= {type: GETABOUT, data: data[0]};
        dispatch(action);
        dispatch({type: ENDLOADING});
    } catch (error) {
        console.log(error);
    }
}
export const fetch_education= ()=> async(dispatch)=>{
    try {
        dispatch({type: STARTLOADING});
        const {data}= await api.getEducations();
        dispatch({type: GETEDUCATIONS, data: data});
        dispatch({type: ENDLOADING});
    } catch (error) {
        console.log(error);
    }
}
export const fetch_experience= ()=> async(dispatch)=>{
    try {
        dispatch({type: STARTLOADING});
        const {data}= await api.getExperiences();
        dispatch({type: GETEXPERIENCE, data: data});
        dispatch({type: ENDLOADING});
    } catch (error) {
        console.log(error);
    }
}
export const fetch_projects= ()=> async(dispatch)=>{
    try {
        await dispatch({type: STARTLOADING});
        const {data}= await api.getProjects();
        const action= {type: GETPROJECTS, data: data};
        dispatch(action);
        dispatch({type: ENDLOADING});
        // }
    } catch (error) {
        console.log(error);
    }
}