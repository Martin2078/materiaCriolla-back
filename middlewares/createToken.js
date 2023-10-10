import User from "../models/User.js";
import jwt from "jsonwebtoken";

async function findToken(res, req, next) {


    const { email, _id } = req.body || req.user

    const token = jwt.sign(
        {

            email, _id
        },
        process.env.SECRET,
        { expiresIn: 60 * 60 * 24 }
    );
    req.token = token
    console.log("createToken")
    return next()
}





export default findToken