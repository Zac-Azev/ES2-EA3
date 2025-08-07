const mongoose = require('mongoose');
const IGrandpaDAO = require('./IGrandpaDAO.js');
const Grandpa = require('../models/Grandpa'); // Modelo da classe
const objGrandpaSchema = require('../persistence/Grandpa.js'); // Schema do Mongoose

class GrandpaDAO_Encap_Mongoose extends IGrandpaDAO {

    constructor() {
        super();
        // A conexão deve ser gerenciada de forma centralizada, mas mantendo o template:
        mongoose.connect('mongodb+srv://isaac61292:isaacramos22!@azev-pc3.aaipb.mongodb.net/?retryWrites=true&w=majority&appName=azev-pc3', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
    }

    async create(objgrandpa) {
        const grandpa = await objGrandpaSchema.create(objgrandpa.toJSON());
        return grandpa;
    }

    async recovery() {
        let grandpas = await objGrandpaSchema.find();
        return grandpas;
    }

    async update(objgrandpa) {
        let grandpa = await objGrandpaSchema.findByIdAndUpdate(objgrandpa.id, objgrandpa.toJSON(), {
            new: true
        });
        return grandpa;
    }

    async delete(objgrandpa) {
        let grandpa = await objGrandpaSchema.findByIdAndRemove(objgrandpa.id);
        return grandpa;
    }

    async search(objgrandpa) {
        // Buscando por CPF, que deve ser um identificador único
        let grandpas = await objGrandpaSchema.find({
            cpf: objgrandpa.cpf
        });
        return grandpas;
    }
}
module.exports = GrandpaDAO_Encap_Mongoose;

