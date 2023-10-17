import mercadopago from 'mercadopago'

export const createOrder = async (req,res) => {
    mercadopago.configure({
        access_token: process.env.MERCADOPAGO_TOKEN
    })

    const { title, price, quantity } = req.body

    const result = await mercadopago.preferences.create({
        items: [
            {
                title: title,
                unit_price: price,
                currency_id: 'CLP',
                quantity: quantity
            }
        ],
        back_urls: {
            success: 'http://localhost:5173/Products',
            failure: 'http://localhost:5173/Products',
            pending: 'http://localhost:5173/Products'
        },
        notification_url: `${process.env.NGROK_LINK}/payment/webhook`
    })
    /* console.log(result) */
    res.send(result.body)
}

export const receiveWebhook = async (req,res) => {
    console.log(req.query)
    try {
        if (req.query.type == "payment") {
            const data = await mercadopago.payment.findById(req.query['data.id'])
            console.log(data)
        }
        res.sendStatus(204)
    } catch (error) {
        console.log(error)
        return res.sendStatus(500).json({ error: error.message })
    }
}