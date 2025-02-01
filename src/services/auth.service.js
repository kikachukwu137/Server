import User from '../models/user.model.js';
import {ErrorWithStatus} from '../exception/error_with_status.js';
import bcrypt from 'bcrypt';


export const login = async(email,password) => {
    try {
        const user = await User.findOne({email})
        if(!user){
            throw new ErrorWithStatus("user does not exist")
        }

        const ismatch  = await bcrypt.compare(password, user.password)
        if(!ismatch){
            throw new ErrorWithStatus("password is not matching",401)
        }
        return {message: "Login successful", user}

    } catch (error) {
        throw new ErrorWithStatus(error.message,500)
    }

    //unhash the password 


    // return a response

}

export const register = async(name,email,password,role= "USER") => {
    try {
        //check if user exist on the database
        const user = await User.findOne({email})

        if(user){
            throw new ErrorWithStatus("User already exist",400)

        }
        // create new user
        //hash the password
        const hashedPassword = await  bcrypt.hash(password,10);
        const newUser = new User({
            name,email, password : hashedPassword,role
        })
        //save to DB
        await newUser.save()
        return {message : "User registered successfully",user: newUser}
        
        
    } catch (error) {  
        throw new ErrorWithStatus(error.message, 500)

        
    }

}