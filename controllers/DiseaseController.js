const IDiseaseController = require('./IDiseaseController.js');
const config = require('../config.js');
// Assumindo que você definirá 'IDiseaseDAO' no seu arquivo de configuração
const DiseaseDAO = require('../persistencelayer/dao/' + config.IDiseaseDAO);
let diseasedao = new DiseaseDAO();

class DiseaseController extends IDiseaseController {
    constructor() {
        super();
    }

    async show(req, res) {
        let diseases = await diseasedao.recovery();
        return res.json(diseases);
    }

    async store(req, res) {
        const disease = await diseasedao.create(req);
        return res.json(disease);
    }

    async destroy(req, res) {
        let disease = await diseasedao.delete(req);
        return res.json(disease);
    }

    async update(req, res) {
        let disease = await diseasedao.update(req);
        return res.json(disease);
    }

    async index(req, res) {
        let diseases = await diseasedao.search(req);
        return res.json(diseases);
    }
}
module.exports = DiseaseController;

