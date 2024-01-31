import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:[true, "Please provide a username"],
        unique:true,
    },

    email:{
        type:String,
        required:[true, "Please provide a password"],
        unique:true,
    },

    password:{
        type:String,
        required:[true, "Please provide a password"],
    },

    isVerified:{
        type:Boolean,
        default:false,
    },

    isAdmin:{
        type:Booolean,
        defualt:false,
    },
    forgotPasswordToken:String,
    forgotPasswordTokenExpiry:Date,
    verifyToken:String,
    verifyTokenExpiry:Date,


})

const User=mongoose.models.users || mongoose.model("Users", userSchema);
export default User;