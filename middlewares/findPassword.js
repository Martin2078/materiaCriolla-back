import bcryptjs from 'bcryptjs'
import User from '../models/User.js';
async function findPassword(res, req, next) {

    // Compara la contraseña proporcionada con la almacenada en la base de datos
    const findUser = await User.findOne({ email: req.body.email })
    if (bcryptjs.compareSync(req.body.password, userFind.password)) {
        console.log("findPassword")
        return next()
    }
    return res.status(400).json({
        sucess: false,
        message: "wrong password",
        response: null
    })

}
export default findPassword