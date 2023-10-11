import Category from '../category.js'
import 'dotenv/config.js'
import '../../config/database.js'

let categories = [
    {
        name: "Mates",
        color: "#EF8481",
        description: "Mates",
        cover_photo: "https://noticiasdelmate.com/wp-content/uploads/2022/07/mates-de-madera-cuenco-con-yerba-mate.jpg.webp",
        tip: 'Lava y seca tu mate después de cada uso para evitar que se acumulen sabores no deseados. No lo rasques con objetos duros, ya que esto puede dañar el mate. Deja el mate en reposo durante al menos 24 horas, preferiblemente 48 horas. Durante este tiempo, la yerba absorberá el agua y se pegará a las paredes del mate, ayudando a evitar que el agua se filtre por los poros de la calabaza.'
    },{
        name: "Termos",
        color: "#8883F0",
        description: "Termos",
        cover_photo: "https://cdnx.jumpseller.com/la-materia-chile/image/31136256/termo_mate_system_classic_800_lado_dorado.jpg?1674523622",
        tip: 'No utilices agua hirviendo: El agua debe estar caliente pero no hirviendo, idealmente entre 70°C y 80°C. El agua hirviendo puede quemar la yerba y darle un sabor amargo al mate. Evita usar agua mineral con gas: El agua con gas puede afectar negativamente el sabor del mate, así que es preferible utilizar agua sin gas.'
    },{
        name: "Bombillas",
        color: "#8883F0",
        description: "Bombillas",
        cover_photo: "https://i.postimg.cc/DZG0H9SK/comics-cover.webp",
        tip: 'Lava la bombilla después de cada uso para evitar que se obstruya. Puedes usar un cepillo pequeño o un alambre para limpiarla. Evita mover la bombilla en la yerba una vez que esté en su lugar. Puede obstruirse si la mueves con frecuencia'
    },{
        name: "Yerbas",
        color: "#8883F0",
        description: "Yerbas",
        cover_photo: "https://i.postimg.cc/DZG0H9SK/comics-cover.webp",
        tip: 'Almacena la yerba en un lugar fresco y seco, en un recipiente hermético para mantener su frescura y sabor. Cuando prepares el mate, evita mover o agitar la yerba con la bombilla. Esto puede crear un sabor amargo. Evita empapar la yerba en agua. Agrega el agua caliente lentamente para que la yerba se hidrate gradualmente.'
    },{
        name: "Combos",
        color: "#8883F0",
        description: "Combos",
        cover_photo: "https://i.postimg.cc/DZG0H9SK/comics-cover.webp",
        tip: 'Almacena la yerba en un lugar fresco y seco, en un recipiente hermético para mantener su frescura y sabor. Cuando prepares el mate, evita mover o agitar la yerba con la bombilla. Esto puede crear un sabor amargo. Evita empapar la yerba en agua. Agrega el agua caliente lentamente para que la yerba se hidrate gradualmente.'
    }
]
