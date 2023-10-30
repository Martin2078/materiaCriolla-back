import Category from "../../models/Category.js"
const readCategory = async(req,res) => {
    
    try {
       
        let allCategory = await Category.find()
        res.json({
            success: true,
            message: "products",
            response: allCategory
        })
        console.log("read")
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success: false,
            message: "error"
        })
    }
}
export default readCategory