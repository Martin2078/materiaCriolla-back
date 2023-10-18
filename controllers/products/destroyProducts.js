/* import Product from "../../models/Product";


const destroyProduct= async ( req, res)=>{
    try {
        const user_id = req.params.id;
        const producto = await Product.findByIdAndDelete(user_id)
res.status(200).json({
    success:true,
    response:user_id,
    message:"producto eliminado exitosamente"
})
    } 

    catch (error) {
        console.log (error)
        
    }
}
export default destroyProduct */