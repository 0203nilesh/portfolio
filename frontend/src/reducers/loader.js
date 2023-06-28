import { ENDLOADING, STARTLOADING } from "../constant";

export default ((state= {isLoading: false}, action)=>{
    switch(action.type){
        case STARTLOADING:
            return {...state, isLoading: true};
        case ENDLOADING:
            return {...state, isLoading: false};
        default: 
            return {...state};
    }
})