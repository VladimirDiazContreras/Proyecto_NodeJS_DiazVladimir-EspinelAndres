// index.js
const prompt = require('prompt-sync')();
const { connect } = require('./Config/db');
const Propuesta = require('./models/propuestasModel');
const Proyecto = require('./models/proyectosModel'); // ¡Importa la clase Proyecto!

async function main() {
    let db;
    try {
        db = await connect();
    } catch (err) {
        console.error("No se pudo conectar a la base de datos. Saliendo...");
        return;
    }
    
    let option = '';
    console.log("Holaaa, Bienvenido a la función principal");
    console.log("1. Ver propuestas");
    console.log("2. Crear propuesta");
    console.log("3. Ver proyectos");
    console.log("4. Crear proyecto");
    console.log("5. Salir");

    option = prompt("Seleccione una opción: ");

    switch (option) {
        case '1':
            console.log("=== Ver propuestas ===");
            try {
                const propuestas = await Propuesta.listar(db);
                if (propuestas.length === 0) {
                    console.log("No hay propuestas para mostrar.");
                } else {
                    console.log("Lista de propuestas:");
                    propuestas.forEach(propuesta => {
                        console.log(`- Descripción: ${propuesta.descripcion}, Estado: ${propuesta.estado}`);
                    });
                }
            } catch (err) {
                console.error("Error al listar propuestas:", err.message);
            }
            break;

        case '2':
            console.log("=== Crear propuesta ===");
            const descripcion = prompt("Descripción: ");
            const fechaCreacion = new Date().toISOString();
            const estado = prompt("Estado (pendiente/aceptada/rechazada): ");

            const nuevaPropuesta = {
                descripcion,
                fechaCreacion,
                estado
            };

            try {
                await Propuesta.guardar(db, nuevaPropuesta);
            } catch (err) {
                console.error("Error al guardar propuesta:", err.message);
            }
            break;

            case '3':
                console.log("=== Ver proyectos ===");
                try {
                    const proyectos = await Proyecto.listar(db);
                    if (proyectos.length === 0) {
                        console.log("No hay proyectos para mostrar.");
                    } else {
                        console.log("Lista de proyectos:");
                        proyectos.forEach(proyecto => {
                            console.log(`- Nombre: ${proyecto.nombre}, Estado: ${proyecto.estado}`);
                        });
                    }
                } catch (err) {
                    console.error("Error al listar proyectos:", err.message);
                }
                break;

        case '4':
            console.log("=== Crear proyecto ===");
            const nombre = prompt("Nombre del proyecto: ");
            const fechaInicio = new Date().toISOString();
            const estadoProyecto = prompt("Estado del proyecto (en curso/finalizado): ");

            // Se corrigió el nombre de la variable para que coincida con el modelo
            const nuevoProyecto = {
                nombre,
                fechaInicio,
                estado: estadoProyecto // Asegúrate de que la clave sea 'estado'
            };

            try {
                await Proyecto.guardar(db, nuevoProyecto);
            } catch (err) {
                console.error("Error al guardar proyecto:", err.message);
            }
            break;

        case '5':
            console.log("Salir");
            process.exit(0);

        default:
            console.log("Opción no válida");
    }
}

main();