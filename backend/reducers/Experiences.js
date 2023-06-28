import experiecenModel from "../models/Experience.js";

export const getExperiences= async(req, res)=>{
    try {
        const experiences= await experiecenModel.find();
        if(experiences?.length!==0){
            res.status(200).json(experiences);
        }else{
            res.status(200).json({message: "No Experiences are present", type: "warning"});
        }
    } catch (error) {
        res.status(200).json({message: "Something Went Wrong!", type: "danger"});
    }
}