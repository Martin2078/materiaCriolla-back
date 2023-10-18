import Product from '../Product.js'
import 'dotenv/config.js'
import '../../config/database.js'

let products = [
    {
        name: 'Pumpkin mate',
        description: "Embrace autumn with our Pumpkin Mate Cup. Handcrafted and adorned with pumpkin motifs, it's the perfect vessel to enjoy your yerba mate with a touch of seasonal charm.",
        price: 3500,
        quantity: 1,
        product_photo: 'https://i.postimg.cc/qB222Lr6/camionero.png',
        colors: [ 'blue', 'yellow', 'black'],
        user_id: '65248187ea079acabe53da42',
        category_id: '652482d860c6b5e9e98183bc',
		Bestsellers: 1
    },
    {
        name: 'Pumpkin termo',
        description: "Elevate your mate experience with our Pumpkin-themed Termo. Designed for long-lasting warmth and adorned with charming pumpkins, it's the perfect companion for your yerba mate sessions.",
        price: 15000,
        quantity: 3,
        product_photo: 'https://w7.pngwing.com/pngs/822/691/png-transparent-thermoses-canteen-stainless-steel-tableware-green-others-blue-small-appliance-canteen-thumbnail.png',
        colors: [ 'red', 'green', 'black'],
        user_id: '65248187ea079acabe53da42',
        category_id: '652482d860c6b5e9e98183bd',
		Bestsellers: 2
    },
    {
        name: 'Pumpkin bombilla',
        description: "Sip yerba mate in style with our Pumpkin-Embellished Mate Straw. Adorned with whimsical pumpkin details, it adds a touch of autumn flair to your traditional mate ritual.",
        price: 2000,
        quantity: 1,
        product_photo: 'https://w7.pngwing.com/pngs/917/246/png-transparent-mate-tea-argentine-cuisine-terere-bombilla-tea-angle-food-tea-thumbnail.png',
        colors: [ ],
        user_id: '65248187ea079acabe53da42',
        category_id: '652482d860c6b5e9e98183be',
		Bestsellers: 3
    },
    {
		name: "MateHarmony Cup",
		description: "Experience mate perfection in our MateHarmony Cup. Crafted for the ultimate mate ritual, it's a symphony of form and function, designed for your purest mate enjoyment.",
		price: 6069,
		quantity: 2,
		product_photo: "https://i.postimg.cc/d19Yvr8N/acero.png",
		colors: ["yellow", "blue", "red"],
		user_id: "65248187ea079acabe53da42",
		category_id: "652482d860c6b5e9e98183bc",
		Bestsellers: 4
	},
	{
		name: "MateMateo Termo",
		description: "Meet the ultimate mate companion, MateMateo Termo. This thermos keeps your mate piping hot, ensuring each sip is as enjoyable as the first. Mate perfection, always.",
		price: 20202,
		quantity: 10,
		product_photo: "https://i.postimg.cc/0QvsLcJJ/termo1.png",
		colors: ["violet", "yellow"],
		user_id: "65248187ea079acabe53da42",
		category_id: "652482d860c6b5e9e98183bd",
		Bestsellers: 2
	},
	{
		name: "AutumnHarvest Mate Straw",
		description: "Elevate your mate experience with the AutumnHarvest Mate Straw. Its pumpkin-themed design adds a touch of fall charm to your traditional mate sipping.",
		price: 15481,
		quantity: 1,
		product_photo: "https://i.postimg.cc/tC42BW7R/bombilla1.png",
		colors: ["violet"],
		user_id: "65248187ea079acabe53da42",
		category_id: "652482d860c6b5e9e98183be",
		Bestsellers: 2
	},
	{
		name: "GourdCraft Mate Straw",
		description: "Enhance your mate ritual with the GourdCraft Mate Straw. This uniquely designed straw combines style and function for an authentic yerba mate experience.",
		price: 23482,
		quantity: 8,
		product_photo: "https://i.postimg.cc/qBL1cjJZ/bombilla2.png",
		colors: ["blue"],
		user_id: "65248187ea079acabe53da42",
		category_id: "652482d860c6b5e9e98183be",
		Bestsellers: 15
	},
	{
		name: "HarvestHaven Mate Cup",
		description: "Discover mate's true comfort with the HarvestHaven Mate Cup. Designed for cozy mate moments, it combines style and function for a fulfilling experience.",
		price: 5381,
		quantity: 12,
		product_photo: "https://i.postimg.cc/9fZ28vzh/imperial.png",
		colors: ["green"],
		user_id: "65248187ea079acabe53da42",
		category_id: "652482d860c6b5e9e98183bc",
		Bestsellers: 1
	},
    {
		name: "MateMaster Termo",
		description: "Unleash the power of perfect temperature with our MateMaster Termo. Enjoy mate at your pace, as this thermos keeps every sip as hot as your first.",
		price: 4841,
		quantity: 9,
		product_photo: "https://i.postimg.cc/fTqMJc16/termo2.png",
		colors: ["green"],
		user_id: "65248187ea079acabe53da42",
		category_id: "652482d860c6b5e9e98183bd",
		Bestsellers: 11
	},
	{
		name: "AutumnAura Mate Cup",
		description: "Experience mate's warmth with the AutumnAura Mate Cup. Designed for pure mate enjoyment, it combines artistry and tradition in every sip.",
		price: 22620,
		quantity: 0,
		product_photo: "https://i.postimg.cc/gjkP0jsz/torpedo.png",
		colors: ["orange", "red", "blue"],
		user_id: "65248187ea079acabe53da42",
		category_id: "652482d860c6b5e9e98183bc",
		Bestsellers: 3
	},
	{
		name: "HarvestVine Mate Straw",
		description: "Sip in style with the HarvestVine Mate Straw. Its vine-inspired design adds an artistic touch to your mate moments, making each sip a masterpiece.",
		price: 15849,
		quantity: 10,
		product_photo: "https://i.postimg.cc/rsQg8FZL/bombilla3.png",
		colors: ["red", "yellow"],
		user_id: "65248187ea079acabe53da42",
		category_id: "652482d860c6b5e9e98183be",
		Bestsellers: 12
	},
	{
		name: "AutumnElixir Mate Blend",
		description: "Our AutumnElixir Mate Blend is a seasonal masterpiece. Embrace the rich flavors of fall in every sip, a warm and comforting hug in a cup.",
		price: 15329,
		quantity: 9,
		product_photo: "https://i.postimg.cc/BZBSGLs1/yerba1.png",
		colors: ["indigo", "blue", "violet"],
		user_id: "65248187ea079acabe53da42",
		category_id: "652482d860c6b5e9e98183bf",
		Bestsellers: 12
	},
	{
		name: "PumpkinSpice Yerba Mate",
		description: "Indulge in the cozy embrace of autumn with our PumpkinSpice Yerba Mate. A delightful fusion of traditional mate and warm pumpkin spice flavors.",
		price: 21345,
		quantity: 2,
		product_photo: "https://i.postimg.cc/gkcYczkt/yerba2.png",
		colors: ["green", "indigo", "blue"],
		user_id: "65248187ea079acabe53da42",
		category_id: "652482d860c6b5e9e98183bf",
		Bestsellers: 0
	},
	{
		name: "HarvestHarmony Mate Mix",
		description: "Discover the symphony of flavors in our HarvestHarmony Mate Mix. This blend harmoniously combines the richness of autumn with the energy of traditional yerba mate.",
		price: 16601,
		quantity: 1,
		product_photo: "https://i.postimg.cc/kGsqNZwy/yerba3.png",
		colors: ["green", "indigo"],
		user_id: "65248187ea079acabe53da42",
		category_id: "652482d860c6b5e9e98183bf",
		Bestsellers: 3
	},
    {
		name: "GoldenAutumn Mate Infusion",
		description: "Our GoldenAutumn Mate Infusion is a treasure trove of fall flavors. Savor the warmth and richness of the season in every sip, a true autumn delight.",
		price: 4629,
		quantity: 4,
		product_photo: "https://i.postimg.cc/2yrCZmd6/yerba4.png",
		colors: ["yellow", "red"],
		user_id: "65248187ea079acabe53da42",
		category_id: "652482d860c6b5e9e98183bf",
		Bestsellers: 14
	},
	{
		name: "AutumnHarvest Mate Set",
		description: "Embrace the season with our AutumnHarvest Mate Set. A carefully curated collection featuring mate cups, straws, termos, and the finest mate herbs, ensuring a complete and cozy mate experience.",
		price: 19415,
		quantity: 12,
		product_photo: "https://i.postimg.cc/nV6pf492/combo1.png",
		colors: ["blue", "indigo", "green"],
		user_id: "65248187ea079acabe53da42",
		category_id: "652482d860c6b5e9e98183c0",
		Bestsellers: 1
	},
	{
		name: "PumpkinSpice Mate Delight Bundle",
		description: "Indulge in autumn's embrace with our PumpkinSpice Mate Delight Bundle. This set includes mate cups, straws, termos, and the aromatic PumpkinSpice Mate Blend for an exquisite seasonal experience.",
		price: 10861,
		quantity: 9,
		product_photo: "https://i.postimg.cc/8kFNYKcs/combo2.png",
		colors: ["orange", "yellow"],
		user_id: "65248187ea079acabe53da42",
		category_id: "652482d860c6b5e9e98183c0",
		Bestsellers: 12
	},
	{
		name: "GoldenAutumn Mate Discovery Kit",
		description: "Explore the essence of fall with our GoldenAutumn Mate Discovery Kit. This set includes mate cups, straws, termos, and the GoldenAutumn Mate Infusion for an authentic taste of the season.",
		price: 11116,
		quantity: 3,
		product_photo: "https://i.postimg.cc/0rgtX2QG/combo3.png",
		colors: ["green", "orange"],
		user_id: "65248187ea079acabe53da42",
		category_id: "652482d860c6b5e9e98183c0",
		Bestsellers: 3
	},
	{
		name: "MateMaster's Fall Collection",
		description: "Elevate your mate mastery with our MateMaster's Fall Collection. Featuring mate cups, straws, termos, and a carefully curated selection of autumn-inspired mate blends, it's the ultimate mate experience.",
		price: 9613,
		quantity: 6,
		product_photo: "https://i.postimg.cc/T157cWRY/combo4.png",
		colors: ["red", "yellow"],
		user_id: "65248187ea079acabe53da42",
		category_id: "652482d860c6b5e9e98183c0",
		Bestsellers: 13
	}
]

Product.insertMany(products)

