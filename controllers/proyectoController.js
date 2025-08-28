// controllers/proyectosController.js

const Proyecto = require('../models/proyectosModel');
const proyectosView = require('../views/proyectosView');
const cli = require('../views/cli');

exports.createProyecto = async (db) => {
    const data = proyectosView.getNewProyectoData();
    try {
        await Proyecto.guardar(db, data);
    } catch (err) {
        cli.displayMessage(`Error al guardar proyecto: ${err.message}`);
    }
};

exports.listProyectos = async (db) => {
    try {
        const proyectos = await Proyecto.listar(db);
        proyectosView.displayProyectos(proyectos);
    } catch (err) {
        cli.displayMessage(`Error al listar proyectos: ${err.message}`);
    }
};