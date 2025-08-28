const rl = require('../config/rl');
const {
  crearPropuesta,
  listarPropuestas,
  actualizarPropuesta,
  eliminarPropuesta
} = require('../controllers/propuestaController');

function menuPropuestas(callbackVolver) {
  console.clear();
  console.log("=============================");
  console.log("   📄 CRUD DE PROPUESTAS");
  console.log("=============================");
  console.log("1) Crear propuesta");
  console.log("2) Listar propuestas");
  console.log("3) Actualizar propuesta");
  console.log("4) Eliminar propuesta");
  console.log("5) Volver al menú anterior");

  rl.question("\nSeleccione una opción [1-5]: ", (opcion) => {
    if (opcion === "1") {
      rl.question("Título: ", (titulo) => {
        rl.question("Descripción: ", (descripcion) => {
          rl.question("Estado: ", async (estado) => {
            await crearPropuesta(titulo, descripcion, estado);
            setTimeout(() => menuPropuestas(callbackVolver), 2000);
          });
        });
      });
    } else if (opcion === "2") {
      listarPropuestas();
      setTimeout(() => menuPropuestas(callbackVolver), 2000);
    } else if (opcion === "3") {
      rl.question("Título de la propuesta a actualizar: ", (titulo) => {
        rl.question("Nueva descripción: ", (desc) => {
          rl.question("Nuevo estado: ", async (estado) => {
            await actualizarPropuesta(titulo, desc, estado);
            setTimeout(() => menuPropuestas(callbackVolver), 2000);
          });
        });
      });
    } else if (opcion === "4") {
      rl.question("Título de la propuesta a eliminar: ", async (titulo) => {
        await eliminarPropuesta(titulo);
        setTimeout(() => menuPropuestas(callbackVolver), 2000);
      });
    } else if (opcion === "5") {
      callbackVolver();
    } else {
      console.log("\n❌ Opción inválida");
      setTimeout(() => menuPropuestas(callbackVolver), 1500);
    }
  });
}

module.exports = { menuPropuestas };
