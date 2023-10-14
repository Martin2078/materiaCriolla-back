import { Router } from "express";
import { createOrder, receiveWebhook } from '../controllers/payment.controller.js'
import { createOrder2 } from '../controllers/payment.controller2.js'

const router = Router()

router.post('/create-order', createOrder)
router.get('/success', (req,res) => res.send('success'))
router.get('/failure', (req,res) => res.send('failure'))
router.get('/pending', (req,res) => res.send('pending'))
router.post('/webhook', receiveWebhook )

export default router