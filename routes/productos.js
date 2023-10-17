import { Router } from "express"
import read from '../controllers/products/readProducts.js'

const router = Router()

router.get('/', read )

export default router