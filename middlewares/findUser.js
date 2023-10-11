// middlewares de usuario, comprueba que el usario exista//
import User from '../models/User.js'

export default async function (req,res,next) {
    try {
        const finded = await User.findOne({ email:req.body.email })
        if (!finded) {
            return res.status(401).json({ error: 'Email incorrecto'});
        }
        return next()

    } catch (error) {
        res.status(500).json({ message: "Error interno del servidor" });
    }
}

