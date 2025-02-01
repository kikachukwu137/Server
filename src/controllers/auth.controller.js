import * as userService from '../services/auth.service.js'

export const login = async(req,res) => {
    try {
        const {email, password} = req.body;

        const user = await userService.login(email,password)
        res.status(200).json({data: user})

    } catch (error) {
        res.status(500).json({message: error.message})
        
    }
}


export const register = async(req,res) => {
    try {
        const {name,email, password,role} = req.body;

        const newUser = await userService.register(name,email,password,role)
        res.status(201).json({data: newUser}) //statuscode for register is 201

    } catch (error) {
        res.status(500).json({message: error.message})
        
    }
}