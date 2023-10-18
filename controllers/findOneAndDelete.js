import Product from "../models/Product.js"

const findOneAndDelete = async(req,res) => {
    
    try {
       console.log(req.body)
        let productoModificado = await Product.findOneAndDelete({_id: req.params.id})
        console.log(req.params.id)
         
        res.json({
            success: true,
            message: "productos",
            response: productoModificado
        })

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success: false,
            message: "error"
        })
    }
}
export default findOneAndDelete