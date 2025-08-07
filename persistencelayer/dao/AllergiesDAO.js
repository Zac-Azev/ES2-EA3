const mongoose = require('mongoose');
const IAllergiesDAO = require('./IAllergiesDAO.js');
const Allergies = require('../models/Allergies'); // Modelo da classe
const objAllergiesSchema = require('../persistence/Allergies.js'); // Schema do Mongoose

class AllergiesDAO_Encap_Mongoose extends IAllergiesDAO {

    constructor() {
        super();
        // A conexão deve ser gerenciada de forma centralizada, mas mantendo o template:
        mongoose.connect('mongodb+srv://isaac61292:isaacramos22!@azev-pc3.aaipb.mongodb.net/?retryWrites=true&w=majority&appName=azev-pc3', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
    }

    async create(objallergies) {
        const allergy = await objAllergiesSchema.create(objallergies.toJSON());
        return allergy;
    }

    async recovery() {
        let allergies = await objAllergiesSchema.find();
        return allergies;
    }

    async update(objallergies) {
        let allergy = await objAllergiesSchema.findByIdAndUpdate(objallergies.id, objallergies.toJSON(), {
            new: true
        });
        return allergy;
    }

    async delete(objallergies) {
        let allergy = await objAllergiesSchema.findByIdAndRemove(objallergies.id);
        return allergy;
    }

    async search(objallergies) {
        // Buscando pelo nome da alergia
        let allergies = await objAllergiesSchema.find({
            name: objallergies.name
        });
        return allergies;
    }
}
module.exports = AllergiesDAO_Encap_Mongoose;

