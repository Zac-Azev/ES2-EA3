const mongoose = require('mongoose');

const WorkerSchema = new mongoose.Schema({
    nome: String,
    cpf: String,
    tel: String,
    birth: Date, // Timestamp é geralmente mapeado para Date no Mongoose
    password: String,
    endereco: String,
    salary: Number // Float é mapeado para Number
});

module.exports = mongoose.model('Worker', WorkerSchema);
