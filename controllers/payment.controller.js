import mercadopago from 'mercadopago'
import axios from 'axios'

export const createOrder = async (req,res) => {
    mercadopago.configure({
        access_token: process.env.MERCADOPAGO_TOKEN
    })

    const products = req.body
    const items = products.map((product) => ({
        title: product.product_id.name,
        unit_price: product.product_id.price,
        currency_id: 'ARS',
        quantity: product.quantity
    }))

    const result = await mercadopago.preferences.create({
        items: items,
        back_urls: {
            success: 'http://localhost:5173/Me',
            failure: 'http://localhost:5173/',
            pending: 'http://localhost:5173/'
        },
        notification_url: `${process.env.NGROK_LINK}/payment/webhook`
    })
    /* console.log(result) */
    res.send(result.body)
}

export const receiveWebhook = async (req,res) => {
    try {
        if (req.query.type == "payment") {
            const data = await mercadopago.payment.findById(req.query['data.id'])
        }
        res.sendStatus(204)
    } catch (error) {
        console.log(error)
        return res.sendStatus(500).json({ error: error.message })
    }
}