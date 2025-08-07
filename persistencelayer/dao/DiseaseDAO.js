const mongoose = require('mongoose');
const IDiseaseDAO = require('./IDiseaseDAO.js');
const Disease = require('../models/Disease'); // Modelo da classe
const objDiseaseSchema = require('../persistence/Disease.js'); // Schema do Mongoose

class DiseaseDAO_Encap_Mongoose extends IDiseaseDAO {

    constructor() {
        super();
        // A conexão deve ser gerenciada de forma centralizada, mas mantendo o template:
        mongoose.connect('mongodb+srv://vaguetti:dwm20221@cluster0.004qy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
    }

    async create(objdisease) {
        const disease = await objDiseaseSchema.create(objdisease.toJSON());
        return disease;
    }

    async recovery() {
        let diseases = await objDiseaseSchema.find();
        return diseases;
    }

    async update(objdisease) {
        let disease = await objDiseaseSchema.findByIdAndUpdate(objdisease.id, objdisease.toJSON(), {
            new: true
        });
        return disease;
    }

    async delete(objdisease) {
        let disease = await objDiseaseSchema.findByIdAndRemove(objdisease.id);
        return disease;
    }

    async search(objdisease) {
        // Buscando pelo nome da doença
        let diseases = await objDiseaseSchema.find({
            name: objdisease.name
        });
        return diseases;
    }
}
module.exports = DiseaseDAO_Encap_Mongoose;

