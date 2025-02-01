import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    role:{
        type: String,
        enum: ["USER", "ADMIN"],
        default: "USER"

    }


},{timestamps: true})


const User = mongoose.model("User",userSchema)

export default User