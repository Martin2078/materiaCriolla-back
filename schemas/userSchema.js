import Joi from "joi";

const userSchema = Joi.object({
    email: Joi.string().required().email().messages({
        "string.empty": `Email cannot be an empty field`,
        "string.email": `Email format should be: example@company.com`,
        "any.required": `Email is a required field`,
    }),
    password: Joi.string().min(8).max(16).required().messages({
        "string.empty": `Password cannot be an empty field`,
        "string.min": `Password should have a minimum length of { #limit}`,
        "string.max": `Password should have a maximum length of { #limit}`,
        "any.required": `Password is a required field`,
    }),
    photo: Joi.string().allow("").optional().messages({
        "string.empty": `Photo cannot be an empty field`,
    }),
    role: Joi.string().allow("").optional().messages({
        "string.empty": `Role cannot be an empty field`,
    }),
    birthdate: Joi.date().required().messages({
        "date.base": `Birthdate must be a valid date`,
        "any.required": `Birthdate is a required field`,
    }),
});

export default userSchema;
