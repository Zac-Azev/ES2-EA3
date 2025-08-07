const IAllergiesController = require('./IAllergiesController.js');
const config = require('../config.js');
// Assumindo que você definirá 'IAllergiesDAO' no seu arquivo de configuração
const AllergiesDAO = require('../persistencelayer/dao/' + config.IAllergiesDAO);
let allergiesdao = new AllergiesDAO();

class AllergiesController extends IAllergiesController {
    constructor() {
        super();
    }

    async show(req, res) {
        let allergies = await allergiesdao.recovery();
        return res.json(allergies);
    }

    async store(req, res) {
        const allergy = await allergiesdao.create(req);
        return res.json(allergy);
    }

    async destroy(req, res) {
        let allergy = await allergiesdao.delete(req);
        return res.json(allergy);
    }

    async update(req, res) {
        let allergy = await allergiesdao.update(req);
        return res.json(allergy);
    }

    async index(req, res) {
        let allergies = await allergiesdao.search(req);
        return res.json(allergies);
    }
}
module.exports = AllergiesController;

