// views/propuestasView.js
const prompt = require('prompt-sync')();

exports.getNewPropuestaData = () => {
    console.log("=== Crear propuesta ===");
    const descripcion = prompt("Descripción: ");
    const estado = prompt("Estado (pendiente/aceptada/rechazada): ");
    return {
        descripcion,
        fechaCreacion: new Date().toISOString(),
        estado
    };
};

exports.displayPropuestas = (propuestas) => {
    console.log("=== Ver propuestas ===");
    if (propuestas.length === 0) {
        console.log("No hay propuestas para mostrar.");
    } else {
        console.log("Lista de propuestas:");
        propuestas.forEach(propuesta => {
            console.log(`- Descripción: ${propuesta.descripcion}, Estado: ${propuesta.estado}`);
        });
    }
};