import {  GETPROJECTS } from "../constant";


export default ((state= {projectData: []}, action)=>{
    switch(action.type){
    case GETPROJECTS: 
        return { ...state, projectData: action.data};
    default: 
        return {...state};
    }
})