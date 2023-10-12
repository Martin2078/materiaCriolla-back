import Joi from "joi";

const userSchema = Joi.object({
    name: Joi.string()
        .optional()
        .messages({
            "string.empty": "Name cannot be empty",
            "any.required": "Name is a required field",
        }),
    surname: Joi.string()
        .optional()
        .messages({
            "string.empty": "Surname cannot be empty",
            "any.required": "Surname is a required field",
        }),
    email: Joi.string()
        .required()
        .email()
        .messages({
            "string.empty": "Email cannot be empty",
            "string.email": "Email format should be: example@company.com",
            "any.required": "Email is a required field",
        }),
    password: Joi.string()
        .min(8)
        .max(16)
        .required()
        .messages({
            "string.empty": "Password cannot be empty",
            "string.min": "Password should have a minimum length of {#limit}",
            "string.max": "Password should have a maximum length of {#limit}",
            "any.required": "Password is a required field",
        }),
    birthdate: Joi.date()
        .required()
        .messages({
            "date.base": "Birthdate must be a valid date",
            "any.required": "Birthdate is a required field",
        }),
    address: Joi.object({
        postalCode: Joi.number()
            .optional()
            .allow('')
            .messages({
                "number.base": "Postal Code must be a number",
            }),
        city: Joi.string()
            .optional()
            .allow('')
            .messages({
                "string.empty": "City cannot be empty",
            }),
        province: Joi.string()
            .optional()
            .allow('')
            .messages({
                "string.empty": "Province cannot be empty",
            }),
        country: Joi.string()
            .optional()
            .allow('')
            .messages({
                "string.empty": "Country cannot be empty",
            }),
        street: Joi.string()
            .optional()
            .allow('')
            .messages({
                "string.empty": "Street cannot be empty",
            }),
        streetNumber: Joi.number()
            .optional()
            .allow('')
            .messages({
                "number.base": "Street Number must be a number",
            }),
    }),
});

export default userSchema;
