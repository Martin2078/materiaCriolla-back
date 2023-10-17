import { Schema, model, Types } from 'mongoose';

let collection = 'users'
const userSchema = new Schema({
  name:{type:String, required: false},
  surname : {type:String, required:false},
  email: { type: String, required: true },
  password: { type: String, required: true },
  photo: { type: String, required: false },
  online: { type: Boolean, default: false },
  role:{type: Number,default:0},
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
  checkout: [{
    quantity:{type: Number},
    product_id:{type: Types.ObjectId,required: true, ref: 'products'}
  }]
}, {
  timestamps: true,
});

const User = model(collection, userSchema);

export default User;