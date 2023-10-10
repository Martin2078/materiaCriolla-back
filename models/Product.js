import { Schema, model, Types } from 'mongoose';

let collection = 'products'
let schema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
    product_photo: { type: String, required: true },
    colors: [{ type: String, required: true }],
    user_id: { type: Types.ObjectId, ref: 'users', required: true },
    category_id: { type: Types.ObjectId, required: true }
}, {
    timestamps: true
})

const Product = model(collection, schema)

export default Product