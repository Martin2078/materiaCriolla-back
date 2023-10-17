import Category from '../../models/Category.js'

export default async(req,res) => {
    try {
        const categories = await Category.find()
        res.json({
            success: true,
            response: categories
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success: false,
            response: null
        })
    }
}