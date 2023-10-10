import { Schema, model, Types } from 'mongoose';

let collection = 'users'
const userSchema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  photo: { type: String, required: false },
  online: { type: Boolean, default: false },
  address: {
    postalCode: { type: Number },
    city: { type: String },
    province: { type: String },
    country: { type: String },
    street: { type: String },
    streetNumber: { type: Number },
  },
  birthdate: { type: Date, required: true },
  lastBuys: [{
    state: { type: String},
    product_id: { type: Types.ObjectId, ref: 'products' }
  }],
  verified: { type: Boolean, default: false }, 
  verify_code: { type: String },
  checkout: [{ type: Types.ObjectId, ref: 'products' }]
}, {
  timestamps: true,
});

const User = model(collection, userSchema);

export default User;