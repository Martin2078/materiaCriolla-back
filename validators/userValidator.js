import joi from "joi";

let userValidator = joi.object({
    email: joi.string().required().email().messages({
        'any.required': 'MAIL_REQUIRED',
        'string.empty': 'MAIL_REQUIRED',
        'string.email': 'INVALID_MAIL'
    }),
    password: joi.string().min(8).required().messages({
        'string.empty': 'PASSWORD_REQUIRED',
        'string.min': 'PASSWORD_TOO_SHORT',
        'any.required': 'PASSWORD_REQUIRED'
    }),

})

export default userValidator