import {createUser, findUserByEmail, findUserById} from "../models/User.js";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import pool from "../config/db.js";

const registerUser = async (req, res) => {
    try {
        const {name, email, password} = req.body;

        const existingUser = await findUserByEmail(email)



        if(existingUser){
            return res.status(400).json({message : "User Already Exists"})
        }
        const hashedpassword = await bcrypt.hash(password, 10);
        await createUser(name, email, hashedpassword);
    res.json({message: "User registered successfully"})
    } catch (error) {
        res.status(500).json({error: error.message})
    }    
}

const loginUser = async (req, res) => {
    try {
        const {email, password} = req.body;
        const user = await findUserByEmail(email);
        if(!user){
            return res.status(400).json({
            message: "Invalid credentials"
      });
        }
        const match = await bcrypt.compare(password, user.password)
        if(!match){
            return res.status(400).json({message:"Invalid Credentials"})
        }
        const token = jwt.sign(
            {id : user.id, email:user.email},
            process.env.JWT_SECRET,
            {expiresIn:'1d'}
        );
        res.json({
            message: "Login Successful",
            token
        })
        
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}

export {registerUser, loginUser}