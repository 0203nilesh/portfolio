import hobbiesModel from "../models/Hobbies.js";

export const getHobbies= async(req, res)=>{
    try {
        const hobbies= await hobbiesModel.find();
        if(hobbies?.length!==0){
            res.status(200).json(hobbies);
        }else{
            res.status(200).json({message: "No Hobbies are present", type: "warning"});
        }
    } catch (error) {
        res.status(200).json({message: "Something Went Wrong!", type: "danger"});
    }
}