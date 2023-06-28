import { SHOWALERT } from "../constant";

export const display_alert= (data)=>(dispatch)=>{
    try {
        dispatch({type: SHOWALERT,  data: data});
    } catch (error) {
        console.log(error);
    }
}
