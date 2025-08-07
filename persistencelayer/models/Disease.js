const mongoose = require('mongoose');

const DiseaseSchema = new mongoose.Schema({
    name: String,
    description: String
});

module.exports = mongoose.model('Disease', DiseaseSchema);

