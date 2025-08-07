const mongoose = require('mongoose');
const IActivityDAO = require('./IActivityDAO.js');
const Activity = require('../models/Activity'); // Modelo da classe
const objActivitySchema = require('../persistence/Activity.js'); // Schema do Mongoose

class ActivityDAO_Encap_Mongoose extends IActivityDAO {

    constructor() {
        super();
        // A conexão deve ser gerenciada de forma centralizada, mas mantendo o template:
        mongoose.connect('mongodb+srv://isaac61292:isaacramos22!@azev-pc3.aaipb.mongodb.net/?retryWrites=true&w=majority&appName=azev-pc3', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
    }

    async create(objactivity) {
        const activity = await objActivitySchema.create(objactivity.toJSON());
        return activity;
    }

    async recovery() {
        let activities = await objActivitySchema.find();
        return activities;
    }

    async update(objactivity) {
        // O diagrama T4 menciona a atualização do status 'isDone'
        // Esta implementação permite atualizar qualquer campo da atividade
        let activity = await objActivitySchema.findByIdAndUpdate(objactivity.id, objactivity.toJSON(), {
            new: true
        });
        return activity;
    }

    async delete(objactivity) {
        let activity = await objActivitySchema.findByIdAndRemove(objactivity.id);
        return activity;
    }

    async search(objactivity) {
        // Buscando pelo nome da atividade
        let activities = await objActivitySchema.find({
            name: objactivity.name
        });
        return activities;
    }
}
module.exports = ActivityDAO_Encap_Mongoose;

