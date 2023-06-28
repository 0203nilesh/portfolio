import { HIDEALERT, SHOWALERT } from "../constant";


export default ((state={isAlert: false, alertMessage: null}, action)=>{
    switch(action.type){
        case SHOWALERT:
            return {...state, isAlert: true, alertMessage: action.data};
        case HIDEALERT:
            return {...state, isAlert: false, alertMessage: null};
        default: 
            return {...state};
    }
})