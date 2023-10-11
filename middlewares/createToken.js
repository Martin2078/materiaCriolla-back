import jwt from "jsonwebtoken";

async function findToken(req,res,next) {


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