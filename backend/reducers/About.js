import aboutModels from '../models/About.js';

export const getAbouts= async(req, res)=>{
    try {
        const abouts= await aboutModels.find();
        if(abouts?.length!==0){
            res.status(200).json(abouts);
        }else{
            res.status(200).json({message: "No About data are present", type: "warning"});
        }
    } catch (error) {
        res.status(200).json({message: "Something Went Wrong!", type: "danger"});
    }
}