import bcrypt from 'bcrypt'

export default (req, res, next) => {
    let hash_password = bcrypt.hashSync(req.body.password, 10)
    req.body.password = hash_password
    return next()
}

