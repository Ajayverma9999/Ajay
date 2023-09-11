import mongoose, { Mongoose } from "mongoose";

//defining schema
const userSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    Password: { type: String, required: true, trim: true },
    RepeatPassword: { type: Boolean, required: true, },
})

//model
const UserModel = mongoose.model("user", userSchema)

export default UserModel