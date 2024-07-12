require('dotenv').config();
const { MongoClient } = require('mongodb');

async function main() {
    const uri = process.env.MONGODB_URI;
    if (!uri) {
        throw new Error("La variable de entorno MONGODB_URI no está definida");
    }

    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

    try {
        await client.connect();
        console.log("Conectado a MongoDB");

        const database = client.db('rd_provinces');
        const collection = database.collection('provinces');

        const provinces = [
            { name: "Azua" },
            { name: "Bahoruco" },
            { name: "Barahona" },
            { name: "Dajabón" },
            { name: "Distrito Nacional" },
            { name: "Duarte" },
            { name: "El Seibo" },
            { name: "Elías Piña" },
            { name: "Espaillat" },
            { name: "Hato Mayor" },
            { name: "Hermanas Mirabal" },
            { name: "Independencia" },
            { name: "La Altagracia" },
            { name: "La Romana" },
            { name: "La Vega" },
            { name: "María Trinidad Sánchez" },
            { name: "Monseñor Nouel" },
            { name: "Monte Cristi" },
            { name: "Monte Plata" },
            { name: "Pedernales" },
            { name: "Peravia" },
            { name: "Puerto Plata" },
            { name: "Samaná" },
            { name: "San Cristóbal" },
            { name: "San José de Ocoa" },
            { name: "San Juan" },
            { name: "San Pedro de Macorís" },
            { name: "Sánchez Ramírez" },
            { name: "Santiago" },
            { name: "Santiago Rodríguez" },
            { name: "Santo Domingo" },
            { name: "Valverde" }
        ];

        // Insertar provincias en la colección
        await collection.insertMany(provinces);
        console.log("Provincias insertadas correctamente");

        // Hacer una consulta e imprimir en pantalla los datos
        const result = await collection.find({}).toArray();
        console.log("Provincias de República Dominicana:");
        console.log(result);
    } finally {
        await client.close();
    }
}

main().catch(console.error);
