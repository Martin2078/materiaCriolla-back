// aca va el controlador de sing in!
import User from "../../models/User.js";

export default async function (req, res) {
    try {
        const findUser = await User.findOneAndUpdate({
            email: req.body.email
        }, {
            online: true
        }, {
            new: true
        }).select('-password').populate("checkout.product_id")


        return res.status(200).json({
            response: {
                token: req.token,
                user: findUser
            }
        })

    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: 'Error en el servidor' });
        
    }
};

