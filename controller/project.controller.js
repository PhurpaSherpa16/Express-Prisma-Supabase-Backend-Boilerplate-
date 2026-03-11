import { projectService } from "../service/project.js"
import CatchAsync from "../utils/catchAsync.js"

export const getAllProjects = CatchAsync(async(req, res, next) =>{
    const result = await projectService.getAllProjects(req)
    res.json({
        success: true,
        message: "Projects API",
        data: result
    })
})