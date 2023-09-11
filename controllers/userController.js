import UserModel from "../models/user.js";
import bcrypt from 'bcrypt'
import Jwt from "jsonwebtoken"


export const userRegistration = async(req, res) => {
    const { name, email, password, password_confirmation, tc } = req.body
    const user = await UserModel.findone({ email: email })
    if (user) {
        res.send({ "status": "failed", "message": "Email already exists" })
    } else {
        if (name && email && password && password_confirmation && RepeatPassword) {
            if (password === password_confirmation) {
                try {
                    const salt = await bcrypt.genSalt(10)
                    const hashPassword = await bcrypt.hash(password, salt)
                    const doc = new UserModel({
                        name: name,
                        email: email,
                        password: hashPassword,
                        RepeatPassword: RepeatPassword
                    })
                    await doc.save()
                } catch (error) {
                    console.log(error);
                    res.send({ "status": "failed", "message": "unable too register" })
                }

            } else {
                res.send({ "status": "failed", "message": "password and confirm password doesn't match" })
            }
        } else {
            res.send({ "status": "failed", "message": "all fileds are required" })
        }
    }
}

export const loginform = async(req, res) => {
    const { username, password } = req.body;
    console.log(username);
    if (username && password) {
        const user = await User({
            username: username,
            password: password
        })
        await user.save()
        res.status(200).json({ message: "User created scuccessfully ", status: true })
    } else {
        res.status(200).json({ message: "All parameters are required", status: false })
    }
}