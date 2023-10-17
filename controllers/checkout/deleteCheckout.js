import User from "../../models/User.js";

const deleteCheckout = async (req, res) => {
    try {
        console.log(req.body._id);
        const user = await User.findById(req.params.id)
        const finded=(element)=> element==req.body._id
        const position = user.checkout.map(product => product.product_id._id).findIndex(finded)
        user.checkout.splice(position, position+1)
        user.populate('checkout.product_id')
        await user.save()
        return res.status(200).json({
            success: true,
            response:{user},
            message: 'Product Eliminated!'
        })
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: 'error deleting product!'
        })
    }
}

export default deleteCheckout