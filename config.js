const config = {
  // --- ROTA PRINCIPAL ---
  "IRoutes": "UserRoutes.js",

  // --- WORKER (FUNCIONÁRIO) ---
  // Usado para o login.
  "IWorkerController": "WorkerController.js",
  "IWorkerDAO": "WorkerDAO_Encap_Mongoose.js",

  // --- GRANDPA (IDOSO) ---
  "IGrandpaController": "GrandpaController.js",
  "IGrandpaDAO": "GrandpaDAO_Encap_Mongoose.js",

  // --- ACTIVITY (ATIVIDADE) ---
  "IActivityController": "ActivityController.js",
  "IActivityDAO": "ActivityDAO_Encap_Mongoose.js",

  // --- DISEASE (DOENÇA) ---
  "IDiseaseController": "DiseaseController.js",
  "IDiseaseDAO": "DiseaseDAO_Encap_Mongoose.js",

  // --- ALLERGIES (ALERGIA) ---
  "IAllergiesController": "AllergiesController.js",
  "IAllergiesDAO": "AllergiesDAO_Encap_Mongoose.js",

  // --- DRUG (MEDICAMENTO) ---
  "IDrugController": "DrugController.js",
  "IDrugDAO": "DrugDAO_Encap_Mongoose.js",

  // --- LOGLINE (REGISTRO DE LOG) ---
  "ILogLineController": "LogLineController.js",
  "ILogLineDAO": "LogLineDAO_Encap_Mongoose.js"
};

module.exports = config;
