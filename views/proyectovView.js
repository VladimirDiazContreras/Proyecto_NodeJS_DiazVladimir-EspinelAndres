// views/proyectosView.js
const prompt = require('prompt-sync')();

exports.getNewProyectoData = () => {
    console.log("=== Crear proyecto ===");
    const nombre = prompt("Nombre del proyecto: ");
    const estadoProyecto = prompt("Estado del proyecto (en curso/finalizado): ");
    return {
        nombre,
        fechaInicio: new Date().toISOString(),
        estado: estadoProyecto
    };
};

exports.displayProyectos = (proyectos) => {
    console.log("=== Ver proyectos ===");
    if (proyectos.length === 0) {
        console.log("No hay proyectos para mostrar.");
    } else {
        console.log("Lista de proyectos:");
        proyectos.forEach(proyecto => {
            console.log(`- Nombre: ${proyecto.nombre}, Estado: ${proyecto.estado}`);
        });
    }
};