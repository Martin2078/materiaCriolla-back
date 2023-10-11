import { Router } from "express";

import readCategory from "../controllers/category/readcategory.js";


const router = Router()

router.get('/', readCategory)

 export default router