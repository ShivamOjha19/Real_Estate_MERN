import { Timestamp } from "mongodb";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
 {
  username:{
   type: String,
   required: true,
   unique: true
  },
  email:{
   type: String,
   unique: true,
   sparse:true
   //required: true,
   
  },
  password:{
   type: String,
   required: true,
   },
   avatar:{
    type: String,
    default: "https://static.vecteezy.com/system/resources/previews/020/765/399/non_2x/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg"
   },
 }, 
 { timestamps: true});

 const User = mongoose.model("User",userSchema);

 export default User;