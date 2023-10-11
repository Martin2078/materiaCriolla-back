import Product from '../Product.js'
import 'dotenv/config.js'
import '../../config/database.js'

let products = [
    {
        name: 'Pumpkin mate',
        description: 'Pumpkin mate',
        price: 3500,
        quantity: 1,
        product_photo: 'https://lasvinas.com.ar/wp-content/uploads/2021/09/WhatsApp-Image-2021-09-15-at-12.13.31-2_clipped_rev_2.jpeg',
        colors: [ 'blue', 'yellow', 'black'],
        user_id: '65248187ea079acabe53da42',
        category_id: '652482d860c6b5e9e98183bc'
    },
    {
        name: 'Pumpkin termo',
        description: 'Pumpkin termo',
        price: 15000,
        quantity: 3,
        product_photo: 'https://w7.pngwing.com/pngs/822/691/png-transparent-thermoses-canteen-stainless-steel-tableware-green-others-blue-small-appliance-canteen-thumbnail.png',
        colors: [ 'red', 'green', 'black'],
        user_id: '65248187ea079acabe53da42',
        category_id: '652482d860c6b5e9e98183bd'
    },
    {
        name: 'Pumpkin bombilla',
        description: 'Pumpkin bombilla',
        price: 2000,
        quantity: 1,
        product_photo: 'https://w7.pngwing.com/pngs/917/246/png-transparent-mate-tea-argentine-cuisine-terere-bombilla-tea-angle-food-tea-thumbnail.png',
        colors: [ ],
        user_id: '65248187ea079acabe53da42',
        category_id: '652482d860c6b5e9e98183be'
    }
]

Product.insertMany(products)

