const ILogLineController = require('./ILogLineController.js');
const config = require('../config.js');
// Assumindo que você definirá 'ILogLineDAO' no seu arquivo de configuração
const LogLineDAO = require('../persistencelayer/dao/' + config.ILogLineDAO);
let loglinedao = new LogLineDAO();

class LogLineController extends ILogLineController {
    constructor() {
        super();
    }

    async show(req, res) {
        let loglines = await loglinedao.recovery();
        return res.json(loglines);
    }

    async store(req, res) {
        const logline = await loglinedao.create(req);
        return res.json(logline);
    }

    async destroy(req, res) {
        let logline = await loglinedao.delete(req);
        return res.json(logline);
    }

    async update(req, res) {
        let logline = await loglinedao.update(req);
        return res.json(logline);
    }

    async index(req, res) {
        let loglines = await loglinedao.search(req);
        return res.json(loglines);
    }
}
module.exports = LogLineController;

