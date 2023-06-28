import {  GETSKILLS } from "../constant";


export default ((state= {skillData: []}, action)=>{
    switch(action.type){
    case GETSKILLS: 
        return { ...state, skillData: action.data};
    default: 
        return {...state};
    }
})