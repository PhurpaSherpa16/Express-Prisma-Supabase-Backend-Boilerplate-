import prisma from "../../lib/prisma.js"
import AppError from "../../utils/appError.js"

export const getAllProjects = async(req) =>{
    try {
        const total_items = await prisma.project.count()
        if(total_items === 0) throw new AppError('No projects found', 404)
        
        return {
            total_items: total_items
        }
    } catch (error) {
        console.log('Error', error)
        if (error instanceof AppError) throw error
        throw new AppError('Failed to get projects', 500)
    }
}