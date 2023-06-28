import {   GETEXPERIENCE } from "../constant";


export default ((state= {experienceData: []}, action)=>{
    switch(action.type){
    case GETEXPERIENCE: 
        return { ...state, experienceData: action.data};
    default: 
        return {...state};
    }
})