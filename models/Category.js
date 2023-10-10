import { Schema, model, Types } from "mongoose";
let collection = 'categories'
let schema = new Schema({
    name:{type:String, required:true},
    color:{type:String, required:true},
    description:{type:String, required:true},
    cover_photo:{type:String, required:true},
    tip:{type:String, required:true}
},{timestamps:true})
const Category = model(collection, schema)
export default Category