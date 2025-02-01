import User from '../models/user.model.js';
import ErrorWithStatus from '../exception/error_with_status.js';

export const getAllUser = async(page=1, limit=10, query= null)=>{
    try {
        const skip = (page - 1) * 10;
        // const filter = query ? {name:{$regex: query, $options: "i" }}:{}
        const filter = query ? {name:{$reges: query,$options: 'i'}}: {}
        const users = await User.find(filter,{password: 0})
                            .skip(skip)
                            .limit(limit)
        const total = await User.countDocuments(filter)

        return {data: users,meta:{page,limit,total}} 
    

    } catch (error) {
        console.log(error.message)
        throw new ErrorWithStatus(error.message, 500)
        
    }
}

export const deleteUser = async(userId) => {
    try {
        const user = await User.findByIdAndDelete(userId);
        if(!user){
            throw new ErrorWithStatus("user doesn't exist",404)


        }
        return {message: "user profile have been deleted successfully"}
        
    } catch (error) {
        throw new ErrorWithStatus(error.message, 500)
        
    }
   
}


export const getOneUser = async(userId) => {
    try {
        const user = await User.findById(userId)
        if(!user){
            throw new ErrorWithStatus("user doesn't exist on database")
        }
        return {data: user}
        
    } catch (error) {
        throw new ErrorWithStatus(error.message, 500)

        
    }
}
