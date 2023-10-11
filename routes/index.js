import {Router} from 'express';
import productsRouter from './products.js'
import categoryRouter from './category.js';
import userRouter from "./users.js"

const router = Router();

router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});
router.use("/auth", userRouter)
router.use("/products", productsRouter)
router.use("/categorys",categoryRouter)

export default router;