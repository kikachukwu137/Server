import mongoose from 'mongoose';

export const connect = async(MONGO_URL)=>{
    if(MONGO_URL){
        return await mongoose.connect(MONGO_URL)
    }
    return null
}
