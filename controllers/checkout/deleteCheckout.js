import User from "../../models/User.js";

const deleteCheckout = async (req, res) => {
    try {
        const user = await User.findOne({email:req.user.email})
        const finded=(element)=> element==req.params.id
        const position = user.checkout.map(product => product.product_id._id).findIndex(finded)
        user.checkout.splice(position,1)
        user.populate('checkout.product_id')
        await user.save()
        return res.status(200).json({
            success: true,
            response:{user},
            message: 'Product Eliminated!'
        })
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            success: false,
            message: 'error deleting product!'
        })
    }
}

export default deleteCheckout