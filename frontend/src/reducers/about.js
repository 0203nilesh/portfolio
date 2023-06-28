import {  GETABOUT } from "../constant";


export default ((state= {aboutData: null}, action)=>{
    switch(action.type){
    case GETABOUT: 
        return { ...state, aboutData: action.data};
    default: 
        return {...state};
    }
})