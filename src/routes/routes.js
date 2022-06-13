const routes = require("express").Router();
const CatalogoControllers = require("../controllers/CatalogoControllers")


routes.get("/", CatalogoControllers.getAll);
routes.get("/cadastro", CatalogoControllers.cadastro);
routes.get("/detalhes", CatalogoControllers.detalhes);
routes.get("/getById/:id/:method", CatalogoControllers.getById);

routes.post("/new", CatalogoControllers.create);
routes.post("/update/:id", CatalogoControllers.update);
routes.get("/delete/:id", CatalogoControllers.remove)


module.exports = routes;