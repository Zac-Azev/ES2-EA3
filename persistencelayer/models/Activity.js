const mongoose = require('mongoose');

const ActivitySchema = new mongoose.Schema({
    name: String,
    description: String,
    isDone: {
        type: Boolean,
        default: false // Atividades começam como não concluídas
    },
    // Campo opcional para associar a atividade a um idoso
    grandpaId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Grandpa',
        required: false
    }
});

module.exports = mongoose.model('Activity', ActivitySchema);

