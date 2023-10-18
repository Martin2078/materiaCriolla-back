import User from "../../models/User.js";

const addCheckout = async(req,res)=>{
try {
    const user = await User.findById(req.params.id)
    let mapped=user.checkout.map(product=>product.product_id)
    let finded=mapped.find(id=>id==req.body._id)
    if (!finded) { 
        user.checkout.push({
            quantity:req.body.quantity,
            product_id:req.body._id
        })
        user.populate("checkout.product_id")
        await user.save()
        return res.status(200).json({ 
            success:true,
            response:{user},
            message: 'Product added!'
         })
    }else{
        return res.status(200).json({ 
            success:true,
            message: 'Product already added!'
         })
    }

} catch (error) {
    console.log(error);
    return res.status(400).json({ 
        success:false,
        message:'error Adding product!'
     })
}
}

export default addCheckout