import {  GETCONTACT } from "../constant";


export default ((state= {contactData: null}, action)=>{
    switch(action.type){
    case GETCONTACT: 
        return { ...state, contactData: action.data};
    default: 
        return {...state};
    }
})