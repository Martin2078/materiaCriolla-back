import bcrypt from "bcrypt";
import User from '../../models/User.js';

const register = async (req, res) => {
  const { email, password, birthdate } = req.body; 

  try {
    const usuario = await User.findOne({ email }); 
    
    if (usuario) {
      return res.json({ mensaje: "Ya existe un usuario con ese correo" });
    } else if (!email || !password || !birthdate)  { 
      return res.json({ mensaje: "Falta el email o la contraseña" });
    } else {
      const contraseñaHasheada = await bcrypt.hash(password, 10); 

      const nuevoUsuario = new User({
        name : req.body.name,
        surname: req.body.surname,
        email, 
        password: contraseñaHasheada,
        birthdate,
        address: {
          postalCode: req.body.address.postalCode,
          city: req.body.address.city,
          province: req.body.address.province,
          country: req.body.address.country,
          street: req.body.address.street,
          streetNumber: req.body.address.streetNumber
        }
      });
      

      const usuarioGuardado = await nuevoUsuario.save();
      console.log (usuarioGuardado)
      res.json({ mensaje: "Usuario creado correctamente", usuario: usuarioGuardado });
    }
  } catch (error) {
    console.error(error);
    res.json({ error: "Ocurrió un error al procesar la solicitud" });
  }
};

export default register;
