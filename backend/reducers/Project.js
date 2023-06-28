import projectModel from '../models/Projects.js';

export const getProjects= async(req, res)=>{
    try {
        const projects= await projectModel.find();
        if(projects?.length!==0){
            res.status(200).json(projects);
        }else{
            res.status(200).json({message: "No Projects are present", type: "warning"});
        }
    } catch (error) {
        res.status(200).json({message: "Something Went Wrong!", type: "danger"});
    }
}