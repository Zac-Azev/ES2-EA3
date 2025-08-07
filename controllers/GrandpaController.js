const IGrandpaController = require('./IGrandpaController.js');
const config = require('../config.js');

const GrandpaDAO = require('../persistencelayer/dao/' + config.IGrandpaDAO);
let grandpadao = new GrandpaDAO();

class GrandpaController extends IGrandpaController {
    constructor() {
        super();
    }

    async show(req, res) {
        let grandpas = await grandpadao.recovery();
        return res.json(grandpas);
    }

    async store(req, res) {
        const grandpa = await grandpadao.create(req);
        return res.json(grandpa);
    }

    async destroy(req, res) {
        let grandpa = await grandpadao.delete(req);
        return res.json(grandpa);
    }

    async update(req, res) {
        let grandpa = await grandpadao.update(req);
        return res.json(grandpa);
    }

    async index(req, res) {
        let grandpas = await grandpadao.search(req);
        return res.json(grandpas);
    }
}
module.exports = GrandpaController;
