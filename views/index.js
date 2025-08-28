// index.js

const { connect } = require('./config/db');
const cli = require('./views/cli');
const propuestasController = require('./controllers/propuestasController');
const proyectosController = require('./controllers/proyectosController');

async function main() {
    let db;
    try {
        db = await connect();
    } catch (err) {
        console.error("No se pudo conectar a la base de datos. Saliendo...");
        return;
    }
    
    const option = cli.displayMainMenu();

    switch (option) {
        case '1':
            await propuestasController.listPropuestas(db);
            break;
        case '2':
            await propuestasController.createPropuesta(db);
            break;
        case '3':
            await proyectosController.listProyectos(db);
            break;
        case '4':
            await proyectosController.createProyecto(db);
            break;
        case '5':
            cli.displayMessage("Saliendo...");
            process.exit(0);
        default:
            cli.displayMessage("Opción no válida");
    }
}

main();