import { Router } from 'express';
import findEmail from '../middlewares/findEmail.js';
import register from '../controllers/auth/register.js';
import userSchema from '../schemas/userSchema.js';
import validator from '../middlewares/validator.js';
import hasheador from '../middlewares/hasheador.js'
import userValidator from '../validators/userValidator.js';
import findUser from '../middlewares/findUser.js';
import findPassword from '../middlewares/findPassword.js';
import createToken from '../middlewares/createToken.js';
import signIn from '../controllers/auth/signIn.js'
import passport from '../middlewares/passport.js'
import signOut from '../controllers/auth/signOut.js'

const router = Router();

router.post('/register', findEmail, validator(userSchema), hasheador, register);
router.post("/signIn", validator(userValidator), findUser, findPassword, createToken, signIn)
router.post("/signOut",passport.authenticate('jwt',{session: false}),signOut)
export default router;

