
import Product from "../models/Product.js"

const findUserProducts = async(req,res) => {
    
    try {
       
        let allProducts = await Product.find({user_id: req.params.id})
        console.log("aca: ", req.params.id)
         
        res.json({
            success: true,
            message: "productos",
            response: allProducts
        })

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success: false,
            message: "error"
        })
    }
}
export default findUserProducts