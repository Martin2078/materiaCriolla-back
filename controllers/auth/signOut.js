// aca va el controlador de sing in!
import User from "../../models/User.js";

export default async function (req, res) {
    try {
        await User.findOneAndUpdate({
            email: req.body.email
        },{
            online: false
        }, {
            new: true
        })
        // Responde con el token y los datos del usuario
        return res.status(200).json({ 
            message:"User signOut!" 
        })

    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Error en el servidor' });
    }
};
