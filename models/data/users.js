import User from '../User.js'
import 'dotenv/config.js'
import '../../config/database.js'

let users = [{
    email: 'materiaCriolla@gmail.com',
    password: "$2a$10$XZBDuOYHcHSzZNzf2ws7Quvu3YmKgSagWRUG1eGlBLSdxJunpN1LC",
    photo: "https://i.postimg.cc/fyJsspq8/image.png",
    online: false,
    address: {
        postalCode: 1838,
        city: 'Luis Guillon',
        province: 'Buenos Aires',
        country: 'Argentina',
        street: 'Boulevar buenos aires',
        streetNumber: 1809
    },
    birthdate: 2003-12-12,
}]

User.insertMany(users)