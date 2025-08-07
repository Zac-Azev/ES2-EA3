const mongoose = require('mongoose');
const ILogLineDAO = require('./ILogLineDAO.js');
const LogLine = require('../models/LogLine'); // Modelo da classe
const objLogLineSchema = require('../persistence/LogLine.js'); // Schema do Mongoose

class LogLineDAO_Encap_Mongoose extends ILogLineDAO {

    constructor() {
        super();
        // A conexão deve ser gerenciada de forma centralizada, mas mantendo o template:
        mongoose.connect('mongodb+srv://isaac61292:isaacramos22!@azev-pc3.aaipb.mongodb.net/?retryWrites=true&w=majority&appName=azev-pc3', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
    }

    async create(objlogline) {
        const logline = await objLogLineSchema.create(objlogline.toJSON());
        return logline;
    }

    async recovery() {
        // Ordena os logs pelos mais recentes primeiro
        let loglines = await objLogLineSchema.find().sort({ date: -1 });
        return loglines;
    }

    async update(objlogline) {
        let logline = await objLogLineSchema.findByIdAndUpdate(objlogline.id, objlogline.toJSON(), {
            new: true
        });
        return logline;
    }

    async delete(objlogline) {
        let logline = await objLogLineSchema.findByIdAndRemove(objlogline.id);
        return logline;
    }

    async search(objlogline) {

        let loglines = await objLogLineSchema.find({
            logLine: objlogline.logLine
        });
        return loglines;
    }
}
module.exports = LogLineDAO_Encap_Mongoose;

