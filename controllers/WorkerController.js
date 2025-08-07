const IWorkerController = require('./IWorkerController.js');
const config = require('../config.js');
const WorkerDAO = require('../persistencelayer/dao/' + config.IWorkerDAO);
let workerdao = new WorkerDAO();

class WorkerController extends IWorkerController {
    constructor() {
        super();
    }

    async show(req, res) {
        let workers = await workerdao.recovery();
        return res.json(workers);
    }

    async store(req, res) {
        const worker = await workerdao.create(req);
        return res.json(worker);
    }

    async destroy(req, res) {
        let worker = await workerdao.delete(req);
        return res.json(worker);
    }

    async update(req, res) {
        let worker = await workerdao.update(req);
        return res.json(worker);
    }

    async index(req, res) {
        let workers = await workerdao.search(req);
        return res.json(workers);
    }
}
module.exports = WorkerController;

