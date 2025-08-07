const mongoose = require('mongoose');
const IWorkerDAO = require('./IWorkerDAO.js');
const Worker = require('../models/Worker'); // Modelo da classe
const objWorkerSchema = require('../persistence/Worker.js'); // Schema do Mongoose

class WorkerDAO_Encap_Mongoose extends IWorkerDAO {

    constructor() {
        super();
        // A conexão deve ser gerenciada de forma centralizada, mas mantendo o template:
        mongoose.connect('mongodb+srv://vaguetti:dwm20221@cluster0.004qy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
    }

    async create(objworker) {
        
        const worker = await objWorkerSchema.create(objworker.toJSON());
        return worker;
    }

    async recovery() {
        let workers = await objWorkerSchema.find();
        return workers;
    }

    async update(objworker) {
        let worker = await objWorkerSchema.findByIdAndUpdate(objworker.id, objworker.toJSON(), {
            new: true
        });
        return worker;
    }

    async delete(objworker) {
        let worker = await objWorkerSchema.findByIdAndRemove(objworker.id);
        return worker;
    }

    async search(objworker) {
        
        let workers = await objWorkerSchema.find({
            cpf: objworker.cpf
        });
        return workers;
    }
}
module.exports = WorkerDAO_Encap_Mongoose;

