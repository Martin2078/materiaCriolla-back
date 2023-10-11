import { Router } from 'express';
import findEmail from '../middlewares/findEmail.js';
import register from '../controllers/auth/register.js';
import userSchema from '../schemas/userSchema.js';
import validator from '../middlewares/validator.js';
import hasheador from '../middlewares/hasheador.js'
import userValidator from '../validators/userValidator.js';
import findUser from '../middlewares/findUser.js';
import findPassword from '../middlewares/findPassword.js';
import findToken from '../middlewares/createToken.js';
import signinController from '../controllers/users/signIn.js';


const router = Router();

router.post('/register', findEmail, validator(userSchema), hasheador, register);

router.post("/signIn", validator(userValidator), findUser, findPassword, findToken, signinController)

export default router;

