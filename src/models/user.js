import mongoose from 'mongoose';


// Crea un nuevo esquema de moongose.
const userSchema = new mongoose.Schema({
    name: String,
    lastName: String,
    age: Number,
    role: String
});

// Crea un nuevo modelo de moongose y lo exporta.
export default mongoose.model('User', userSchema);