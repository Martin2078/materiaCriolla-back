import User from '../models/User.js'

export default async function (req,res,next) {
    try {
        const found = await User.findById(req.params.id)
        
        if (!found) {
            return res.status(401).json({ error: 'usuario no existe'});
        }
        return next()

    } catch (error) {
        res.status(500).json({ message: "Error interno del servidor" });
    }
}