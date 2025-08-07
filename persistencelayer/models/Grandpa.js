const mongoose = require('mongoose');

const GrandpaSchema = new mongoose.Schema({
    nome: String,
    cpf: String,
    tel: String,
    birth: Date // Timestamp é mapeado para Date
});

module.exports = mongoose.model('Grandpa', GrandpaSchema);

