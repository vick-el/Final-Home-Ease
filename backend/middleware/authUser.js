import jwt from 'jsonwebtoken';
import User from "../models/userModel.js";

const authUser = async (req, res, next ) => {
    const {token} = req.headers;

    if(!token){
        return res.json({success:false, message:"Login to access this page"})
    }
    try{
        const token_decode = jwt.verify(token, process.env.JWT_SECRET);
        req.body.userId = token_decode.id;
        next();

    }catch(error){
        return res.json({
            success:false, message:error.message
        });
    }
}

export default authUser;