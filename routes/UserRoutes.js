const bodyParser = require('body-parser');
const cors = require('cors');

const IRoutes = require('./IRoutes.js');
const config = require('../config.js');

// Importa todos os controladores necessários
let WorkerController = require('../controllerlayer/' + config.IWorkerController);
let GrandpaController = require('../controllerlayer/' + config.IGrandpaController);
let ActivityController = require('../controllerlayer/' + config.IActivityController); // Assumindo que este exista

// Instancia os controladores
let workerController = new WorkerController();
let grandpaController = new GrandpaController();
let activityController = new ActivityController();

class CombinedRoutes extends IRoutes {
    #app; // Armazena a instância do Express

    constructor(app) { // Recebe a instância do app do index.js
        super();
        this.#app = app; // Armazena o app

        // Configura middlewares globais para o app
        this.#app.use(cors());
        this.#app.use(bodyParser.json());
        this.#app.use(bodyParser.urlencoded({ extended: true }));
        this.#app.use(express.static('public'));
    }

    // Método para registrar todas as rotas GET
    get() {
        // Rota T2 - Listar todos os idosos
        this.#app.get('/grandpas', grandpaController.show);

        // Rota T3 - Detalhar um idoso específico
        this.#app.get('/grandpas/:id', grandpaController.index);
    }

    // Método para registrar todas as rotas POST
    post() {
        // Rota T1 - Login do funcionário
        this.#app.post('/login', workerController.login);

        // Rota T5 - Criar um novo idoso
        this.#app.post('/grandpas', grandpaController.store);
    }

    // Método para registrar todas as rotas PUT
    put() {
        // Rota T4 - Atualizar uma atividade
        this.#app.put('/activities/:id', activityController.update);
    }

    // Método para registrar todas as rotas DELETE
    delete() {
        // Você pode adicionar rotas de exclusão aqui no futuro
    }

    // O método listen agora apenas inicia o servidor que foi passado
    listen() {
        this.#app.listen(3000, () => console.log('Servidor unificado iniciado na porta 3000'));
    }
}

module.exports = CombinedRoutes;

