import * as userService  from '../services/user.service.js';

export const getAllUser = async(req,res) => {
    try {
        let page = Number(req.query.page)
        page = page < 1 ? 1: page

        let limit = Number(req.query.limit)
        limit = limit < 1 ? 10 : limit;
        const query = req.query.q;
        const {data,meta} = await userService.getAllUser(page,limit,query)

        res.status(200).json({message : "get all users", data, meta})
        

    } catch (error) {
        res.status(500).json({message: error.message})
        
    }
}


export const deleteUser = async(req,res) => {
    try {
        const {userId} = req.params;
        const deleteUser = await userService.deleteUser(userId)
        res.status(200)
            .json({message: "file have been deleted"})
        
    } catch (error) {
        res.status(500).json({message: error.message})

        
        
    }
}

export const getOneUser = async(req,res) => {
    try {
        const {userId} = req.params;
        const user = await userService.getOneUser(userId)
        res.status(200)
            .json({message: user})
        
    } catch (error) {
        res.status(500).json({message: error.message})

        
        
    }
}