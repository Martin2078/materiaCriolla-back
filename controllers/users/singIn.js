// aca va el controlador de sing in!

import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'; // Importa jsonwebtoken

const signinController = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Busca al usuario en la base de datos por email
        const user = await User.findOne({ email: email });

        if (!user) {
            return res.status(401).json({ error: 'Credenciales incorrectas' });
        }

        // Compara la contraseña proporcionada con la almacenada en la base de datos
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (passwordMatch) {
            user.online = true
            user.save()
        }

        if (!passwordMatch) {
            return res.status(401).json({ error: 'Credenciales incorrectas' });
        }

        const token = jwt.sign(
            {
                userId: user._id, /* Para passport */
                email: req.body.email || req.user.email,
            },
            process.env.SECRET,
            { expiresIn: 60 * 60 * 24 }
        );

        // Responde con el token y los datos del usuario
        res.status(200).json({ token, user });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error en el servidor' });
    }
};

export default signinController;
