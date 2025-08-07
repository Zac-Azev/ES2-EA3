const mongoose = require('mongoose');

const LogLineSchema = new mongoose.Schema({
    date: {
        type: Date,
        default: Date.now // Define a data atual como padrão
    },
    logLine: String
});

module.exports = mongoose.model('LogLine', LogLineSchema);

