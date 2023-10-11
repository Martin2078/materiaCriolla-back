// middlewares de usuario, comprueba que el usario exista//

import User from "../models/User.js";

async function findUser(req, res, next) {

    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            return res.status(401).json({ error: 'Credenciales incorrectas' });

        }
        console.log("findUser")

        return
        next()

    } catch (error) {
        res.status(500).json({ message: "Error interno del servidor" });
    }
}
export default findUser
