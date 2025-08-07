const mongoose = require('mongoose');
const IDrugDAO = require('./IDrugDAO.js');
const Drug = require('../models/Drug'); // Modelo da classe
const objDrugSchema = require('../persistence/Drug.js'); // Schema do Mongoose

class DrugDAO_Encap_Mongoose extends IDrugDAO {

    constructor() {
        super();
        // A conexão deve ser gerenciada de forma centralizada, mas mantendo o template:
        mongoose.connect('mongodb+srv://isaac61292:isaacramos22!@azev-pc3.aaipb.mongodb.net/?retryWrites=true&w=majority&appName=azev-pc3', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
    }

    async create(objdrug) {
        const drug = await objDrugSchema.create(objdrug.toJSON());
        return drug;
    }

    async recovery() {
        let drugs = await objDrugSchema.find();
        return drugs;
    }

    async update(objdrug) {
        let drug = await objDrugSchema.findByIdAndUpdate(objdrug.id, objdrug.toJSON(), {
            new: true
        });
        return drug;
    }

    async delete(objdrug) {
        let drug = await objDrugSchema.findByIdAndRemove(objdrug.id);
        return drug;
    }

    async search(objdrug) {
        // Buscando pelo código do medicamento (drugCode)
        let drugs = await objDrugSchema.find({
            drugCode: objdrug.drugCode
        });
        return drugs;
    }
}
module.exports = DrugDAO_Encap_Mongoose;

