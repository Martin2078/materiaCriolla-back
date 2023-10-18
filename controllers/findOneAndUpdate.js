import Product from "../models/Product.js"

const findOneAndUpdate = async(req,res) => {
    
    try {
       console.log(req.body)
        let productoModificado = await Product.findOneAndUpdate({_id: req.body._id},
            
            {description: req.body.description, price: req.body.price, quantity: req.body.quantity, product_photo: req.body.product_photo} )
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
export default findOneAndUpdate