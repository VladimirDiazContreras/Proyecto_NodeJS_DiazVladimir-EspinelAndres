// controllers/propuestasController.js

const Propuesta = require('../models/propuestasModel');
const propuestasView = require('../views/propuestasView');
const cli = require('../views/cli');

exports.createPropuesta = async (db) => {
    const data = propuestasView.getNewPropuestaData();
    try {
        await Propuesta.guardar(db, data);
    } catch (err) {
        cli.displayMessage(`Error al guardar propuesta: ${err.message}`);
    }
};

exports.listPropuestas = async (db) => {
    try {
        const propuestas = await Propuesta.listar(db);
        propuestasView.displayPropuestas(propuestas);
    } catch (err) {
        cli.displayMessage(`Error al listar propuestas: ${err.message}`);
    }
};