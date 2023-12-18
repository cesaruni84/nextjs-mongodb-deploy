
import mongoose from 'mongoose';

//const connectionString = 'mongodb+srv://<username>:<password>@<cluster-url>/<database-name>?retryWrites=true&w=majority';
// const connectionString = process.env.MONGODB_URL;

/**
 * Connects to MongoDB Atlas.
 * Moongose is a MongoDB object modeling tool designed to work in an asynchronous environment.
 * Moongose is equivalent to an ORM for relational databases.
 * @async
 * @function connectToMongoDB
 * @returns {Promise<void>} A promise that resolves when the connection is successful or rejects with an error.
 */
export async function connectToMongoDB()  {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log('Conexión exitosa con MongoDB Atlas');
    } catch (error) {
        console.error('Error al conectar con MongoDB Atlas:', error);
    }
};
