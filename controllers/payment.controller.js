import mercadopago from 'mercadopago'

export const createOrder = async (req,res) => {
    mercadopago.configure({
        access_token: process.env.MERCADOPAGO_TOKEN
    })

    const result = await mercadopago.preferences.create({
        items: [
            {
                title: 'Product Title',
                unit_price: 9999,
                currency_id: 'CLP',
                quantity: 1
            }
        ],
        back_urls: {
            success: 'http://localhost:5173',
            failure: 'http://localhost:5173',
            pending: 'http://localhost:5173'
        },
        notification_url: `${process.env.NGROK_LINK}/payment/webhook`
    })
    console.log(result)
    res.send('creando orden')
}

export const receiveWebhook = async (req,res) => {
    console.log(req.query)
    try {
        
    } catch (error) {
        console.log(error)
        return res.sendStatus(500).json({ error: error.message })
    }
}