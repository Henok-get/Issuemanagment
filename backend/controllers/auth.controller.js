import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { errorHandler } from '../utils/error.js';
export const Signup=async (req,res,next)=>{

  const {name,CBEID,email,password}=req.body;
  const hashedPassword=bcryptjs.hashSync(password,10)
const newUser =new User({name,CBEID,email,password:hashedPassword})


try{
await newUser.save()
res.status(201).json({message:"user created successfuly"})
}catch(error){
 next(error)
}
}
export const Signin = async (req, res,next) => {
  const { email, password } = req.body;
  try {
    const validUser = await User.findOne({ email });
    if (!validUser) return next(errorHandler(404, 'User not found'));
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) return next(errorHandler(401, 'wrong credentials'));
    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
    const { password: hashedPassword, ...rest } = validUser._doc;
    const expiryDate = new Date(Date.now() + 3600000); // 1 hour

    res
      .cookie('access_token', token,{ httpOnly: true, expires: expiryDate})
      .status(200)
      .json(rest);
  } catch (error) {
    next(error);
  } 
};