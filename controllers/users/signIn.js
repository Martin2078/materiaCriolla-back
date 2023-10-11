// aca va el controlador de sing in!
import User from '../../models/User.js';

const signinController = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = user.findOneAndUpdate({
            email: req.body.email

        }, {
            online: true
        }, {
            new: true
        }).select('-password')
        // Responde con el token y los datos del usuario
        res.status(200).json({ response: { token, user } });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error en el servidor' });
    }
};

export default signinController;
