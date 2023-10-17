import {Router} from 'express'
import productosRouter from './productos.js'
import categoriesRouter from './categories.js'
import productsRouter from './products.js'
import categoryRouter from './category.js'
import userRouter from "./users.js"
import paymentRouter from './payment.routes.js'

const router = Router();

router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});
router.use("/auth", userRouter)
router.use("/productos", productosRouter)
router.use("/categories", categoriesRouter)
router.use("/products", productsRouter)
router.use("/categorys",categoryRouter)
router.use("/payment", paymentRouter)

export default router;