import { GETHOBBIES } from "../constant";


export default ((state= {hobbiesData: []}, action)=>{
    switch(action.type){
    case GETHOBBIES: 
        return { ...state, hobbiesData: action.data};
    default: 
        return {...state};
    }
})