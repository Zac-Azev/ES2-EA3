const IActivityController = require('./IActivityController.js');
const config = require('../config.js');
// Assumindo que você definirá 'IActivityDAO' no seu arquivo de configuração
const ActivityDAO = require('../persistencelayer/dao/' + config.IActivityDAO);
let activitydao = new ActivityDAO();

class ActivityController extends IActivityController {
    constructor() {
        super();
    }

    async show(req, res) {
        let activities = await activitydao.recovery();
        return res.json(activities);
    }

    async store(req, res) {
        const activity = await activitydao.create(req);
        return res.json(activity);
    }

    async destroy(req, res) {
        let activity = await activitydao.delete(req);
        return res.json(activity);
    }

    async update(req, res) {
        let activity = await activitydao.update(req);
        return res.json(activity);
    }

    async index(req, res) {
        let activities = await activitydao.search(req);
        return res.json(activities);
    }
}
module.exports = ActivityController;

