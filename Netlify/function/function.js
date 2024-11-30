// Importación de módulos necesarios
var express = require('express');// Framework para construir aplicaciones web y APIs
var cors = require("cors");// Middleware para habilitar CORS (permite solicitudes desde otros dominios)
var serverless = require('serverless-http');// Middleware para integrar aplicaciones Express con funciones serverless

//var port = process.env.POTR || 5000;
//let eje;

// Inicialización de la aplicación Express
var app = express();
// Importación de las rutas de productos desde un archivo externo
var productoroutes = require ("../../BackEnd/routes/productosroutes.js");
// Configuración de middlewares
app.use(express.json());// Habilita la lectura de datos en formato JSON en las solicitudes
app.use(cors()); // Habilita CORS para todas las rutas
// Creación de un enrutador
var router = express.Router();
// Asocia el enrutador a la ruta "/productos" y conecta las rutas de producto
router.use ("/productos",productoroutes);
// Asocia el enrutador a la aplicación en el contexto de Netlify Functions
var handler = app.use ('/.netlify/functions',router);
// Exporta la aplicación como una función manejadora para que pueda ser utilizada por Serverless
exports.handler = serverless (app);