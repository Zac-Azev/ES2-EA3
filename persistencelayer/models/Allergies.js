const mongoose = require('mongoose');

const AllergiesSchema = new mongoose.Schema({
    name: String,
    effects: String
});

module.exports = mongoose.model('Allergies', AllergiesSchema);

