import { Router } from "express"
import passport from '../middlewares/passport.js'
import deleteCheckout from '../controllers/checkout/deleteCheckout.js'
import addCheckout from '../controllers/checkout/addCheckout.js'
import updateCheckout from '../controllers/checkout/updateCheckout.js'


const router=Router()

router.post('/:id',passport.authenticate('jwt', { session: false }),addCheckout);
router.delete('/:id',passport.authenticate('jwt', { session: false }),deleteCheckout);
router.put('/:id',passport.authenticate('jwt', { session: false }),updateCheckout);

export default router;
