import { Schema, model } from 'mongoose';

const userSchema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  photo: { type: String, required: false },
  online: { type: Boolean, default: false },
  address: {
    type: Types.Object,
    postalCode: { type: Number },
    city: { type: String },
    province: { type: String },
    country: { type: String },
    street: { type: String },
    streetNumber: { type: Number },
  },
  birthdate: { type: Date, required: true },
  lastBuys: {
    name: { type: String },
    price: { type: Number },
    quantity: { type: Number },
    description: { type: String },
    photo: { type: String },
    state: { type: String}
  },
  verified: { type: Boolean, default: false }, 
  verify_code: { type: String }, 
}, {
  timestamps: true,
});

const User = model('User', userSchema);

export default User;