import { ENDLOADING, STARTLOADING } from "../constant"

export const start_loading= ()=>async(dispatch)=>{
    dispatch({type: STARTLOADING});
}
export const end_loading= ()=>async(dispatch)=>{
    dispatch({type: ENDLOADING});
}