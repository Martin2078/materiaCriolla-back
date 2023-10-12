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
    name: joi.string().min(3).required().messages({
        'any.required': 'Please insert your name!',
        'string.empty': 'Please insert your name!',
        'string.min': 'Name must contain almost 3 character'
    }),
    surname: joi.string().min(2).required().messages({
        'any.required': 'Please insert your surname!',
        'string.empty': 'Please insert your surname!',
        'string.min': 'Surname must contain almost 2 character'
    }),
    email: joi.string().email().required().messages({
        'any.required': 'Email Required!',
        'string.empty': 'Please insert your email direction!',
        'string.email': 'Email must contain @xxxx.com'
    }),
    birthdate: joi.date().required().messages({
        'any.date':'Please insert a valid date!',
    })
    

})

export default userValidator