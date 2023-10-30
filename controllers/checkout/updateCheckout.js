import User from "../../models/User.js";

const updateCheckout = async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        const finded=(element)=> element==req.body._id
        const position = user.checkout.map(product => product.product_id._id).findIndex(finded)
        user.checkout[position].quantity=req.body.quantity
        user.populate('checkout.product_id')
        await user.save()
        return res.status(200).json({
            success: true,
            response:{user},
            message: 'Product updated!'
        })
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: 'error updating product!'
        })
    }
}

export default updateCheckout