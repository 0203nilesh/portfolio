import {  GETEDUCATIONS } from "../constant";


export default ((state= {educationData: []}, action)=>{
    switch(action.type){
    case GETEDUCATIONS: 
        return { ...state, educationData: action.data};
    default: 
        return {...state};
    }
})