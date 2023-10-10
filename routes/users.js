import {Router} from 'express';
import findEmail from '../middlewares/findEmail.js';
import register from '../controllers/auth/register.js';
import userSchema from '../schemas/userSchema.js';
import validator from '../middlewares/validator.js';
import hasheador from '../middlewares/hasheador.js'


const router = Router();

router.post('/register', findEmail, validator(userSchema), hasheador, register);

export default router;
