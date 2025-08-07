const IDrugController = require('./IDrugController.js');
const config = require('../config.js');
// Assumindo que você definirá 'IDrugDAO' no seu arquivo de configuração
const DrugDAO = require('../persistencelayer/dao/' + config.IDrugDAO);
let drugdao = new DrugDAO();

class DrugController extends IDrugController {
    constructor() {
        super();
    }

    async show(req, res) {
        let drugs = await drugdao.recovery();
        return res.json(drugs);
    }

    async store(req, res) {
        const drug = await drugdao.create(req);
        return res.json(drug);
    }

    async destroy(req, res) {
        let drug = await drugdao.delete(req);
        return res.json(drug);
    }

    async update(req, res) {
        let drug = await drugdao.update(req);
        return res.json(drug);
    }

    async index(req, res) {
        let drugs = await drugdao.search(req);
        return res.json(drugs);
    }
}
module.exports = DrugController;

