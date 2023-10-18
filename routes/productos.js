import { Router } from "express"
import read from '../controllers/products/readProducts.js'
import findUserById from "../middlewares/findUserById.js"
import findUserProducts from "../controllers/findUserProducts.js"
import findOneAndUpdate from "../controllers/findOneAndUpdate.js"
import findOneAndDelete from "../controllers/findOneAndDelete.js"


const router = Router()

router.get('/', read )
router.get("/userproducts/:id", findUserProducts)
router.put("/userproducts", findOneAndUpdate)
router.delete("/userProducts/delete/:id", findOneAndDelete)
/* router.get("/me/:id",getProdructos);
router.delete("/:id", passport.authenticate('jwt', { session: false }),destroyProduct )
router.put("/:id",) */

export default router