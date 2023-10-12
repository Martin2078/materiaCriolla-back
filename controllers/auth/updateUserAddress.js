import User from "../../models/User.js";

export default async function updateUserAddress(req,res) {
    try {
        const {city,postalCode,province,country,street,streetNumber}=req.body
        const user= await User.findById(req.params.id)
        user.address.city=city
        user.address.postalCode=postalCode
        user.address.province=province
        user.address.country=country
        user.address.street=street
        user.address.streetNumber=streetNumber
        
        await user.save()

        return res.status(200).json({
            response:{user},
            message:"Address updated!"
        })
    } catch (error) {
        return res.status(401).json({
            message:"Error during address update!"
        })
    }
  
}
