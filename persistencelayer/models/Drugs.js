const mongoose = require('mongoose');

const DrugSchema = new mongoose.Schema({
    name: String,
    drugCode: {
        type: String,
        unique: true, // O código do medicamento deve ser único
        required: true
    }
});

module.exports = mongoose.model('Drug', DrugSchema);

