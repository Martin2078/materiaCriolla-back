import Product from "../../models/Product.js"
const readProducts = async(req,res) => {
    
    try {
       
        let allProducts = await Product.find()
        let productosordenados = allProducts.sort((a,b)=> {
            console.log(a)
            return b.Bestsellers - a.Bestsellers
        })
         
        res.json({
            success: true,
            message: "products",
            response: productosordenados
        })

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success: false,
            message: "error"
        })
    }
}
export default readProducts
