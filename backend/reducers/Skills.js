import skillModels from '../models/Skills.js';

export const getSkills= async(req, res)=>{
    try {
        const skills= await skillModels.find();
        if(skills?.length!==0){
            res.status(200).json(skills);
        }else{
            res.status(200).json({message: "No Skills are present", type: "warning"});
        }
    } catch (error) {
        res.status(200).json({message: "Something Went Wrong!", type: "danger"});
    }
}