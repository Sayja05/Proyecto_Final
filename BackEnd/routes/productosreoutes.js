// Importación de módulos necesarios
const express = require("express"); // Framework para manejar rutas y construir la API
const routes = express.Router(); // Crea un enrutador para definir las rutas de esta sección

// Importa el controlador para manejar las operaciones relacionadas con "productos"
const productoscontroller = require("../controllers/ProductosControllers.js");

// Define la ruta GET "/" y asocia la lógica al método "consultar" del controlador
routes.get("/", productoscontroller.consultar);

// Exporta el enrutador para que pueda ser utilizado en otros módulos
module.exports = routes;