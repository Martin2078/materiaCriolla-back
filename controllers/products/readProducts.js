import Product from '../../models/Product.js'

export default async (req,res) => {
    try {
        let products = await Product.find()
            .sort({ Bestsellers: 1 })
            .populate({path:'category_id'})
        res.json({
            success: true,
            message: 'products',
            response: products
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success: false,
            message: `Error: ${error}`
        })
    }
}