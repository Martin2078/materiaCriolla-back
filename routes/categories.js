import { Router } from "express"
import readCategories from "../controllers/categories/readCategories.js"

const router = Router()

router.get('/', readCategories)

export default router