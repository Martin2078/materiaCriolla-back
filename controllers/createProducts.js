import Product from "../models/Product.js";

 const crearProducto= async(req,res)=>{
try {
    const newProduct = new Product(req.body);
    await newProduct.save();
    return res.status(201).json({
        secces:true,
        response:newProduct,
        message:" New Product"
    })
} catch (err) {
    return res.status(500).json({
      success: false,
      response: null,
      message: err.message,
    });
  }
}
 export default crearProducto