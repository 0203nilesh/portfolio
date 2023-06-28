import { GETLANGUAGES } from "../constant";


export default ((state= {languageData: []}, action)=>{
    switch(action.type){
    case GETLANGUAGES: 
        return { ...state, languageData: action?.data};
    default: 
        return {...state};
    }
})