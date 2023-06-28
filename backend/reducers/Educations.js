import educationModel from '../models/Education.js';

export const getEducations= async(req, res)=>{
    try {
        const educations= await educationModel.find();
        if(educations?.length!==0){
            res.status(200).json(educations);
        }else{
            res.status(200).json({message: "No Education data are present", type: "warning"});
        }
    } catch (error) {
        res.status(200).json({message: "Something Went Wrong!", type: "danger"});
    }
}