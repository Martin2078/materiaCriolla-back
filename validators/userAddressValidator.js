import joi from "joi";

let userValidator = joi.object({
    city: joi.string().min(3).required().messages({
        'any.required': 'Please insert your city name!',
        'string.empty': 'Please insert your city name!',
        'string.min': 'City name must contain almost 3 character'
    }),
    province: joi.string().min(3).required().messages({
        'any.required': 'Please insert your province name!',
        'string.empty': 'Please insert your province name!',
        'string.min': 'Province name must contain almost 3 character'
    }),
    country: joi.string().min(3).required().messages({
        'any.required': 'Please insert your country name!',
        'string.empty': 'Please insert your country name!',
        'string.min': 'Country name must contain almost 3 character'
    }),
    street: joi.string().min(3).required().messages({
        'any.required': 'Please insert your street name!',
        'string.empty': 'Please insert your street name!',
        'string.min': 'Street name must contain almost 3 character'
    }),
    streetNumber: joi.number().required().messages({
        'any.required': 'Please insert your streetNumber name!',
        'number.empty': 'Please insert your streetNumber name!',
        'number.min': 'StreetNumber must contain almost 1 character',
        'any.number':"Please use numbers!"
    }),
    postalCode: joi.number().min(2).required().messages({
        'any.required': 'Please insert your streetNumber name!',
        'number.empty': 'Please insert your streetNumber name!',
        'number.min': 'Postal code must contain almost 2 character',
        'any.number':"Please use numbers!"
    }),

})

export default userValidator