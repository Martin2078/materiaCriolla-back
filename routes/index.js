import express from 'express';
import userRouter from "./users.js"

const router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});
router.use("/auth", userRouter)

export default router;