/* import Product from "../../models/Product";

async function getProdructos (red,res){
try {
    const {id} = req.params;
let produ ={};

let allProducts = await Product.find({user_id :id})
produ={
    succes: true,
    message:"productos de un usuario",
    response:{
        productos : allProducts

    }
    
}
return res.status(200).json({
    produ
})
} catch (error) {
    console.log(error)
}




}
 export default getProdructos */