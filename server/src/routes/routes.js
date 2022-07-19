const { Router } = require("express");
const recordRoutes = Router();
const routerController = require("../controllers/routes.controller");

recordRoutes.get('/', routerController.getPrueba);
recordRoutes.post('/', routerController.insertPrueba);

module.exports = recordRoutes


