const rl = require('../config/rl');
const {
  crearProyecto,
  listarProyectos,
  actualizarProyecto,
  eliminarProyecto
} = require('../controllers/proyectoController');

function menuProyectos(callbackVolver) {
  console.clear();
  console.log("=============================");
  console.log("   📂 CRUD DE PROYECTOS");
  console.log("=============================");
  console.log("1) Crear proyecto");
  console.log("2) Listar proyectos");
  console.log("3) Actualizar proyecto");
  console.log("4) Eliminar proyecto");
  console.log("5) Volver al menú anterior");

  rl.question("\nSeleccione una opción [1-5]: ", (opcion) => {
    if (opcion === "1") {
      rl.question("Estado: ", (estado) => {
        rl.question("ID Usuario: ", (idUsuario) => {
          rl.question("ID Cliente: ", (idCliente) => {
            rl.question("ID Propuesta: ", async (idPropuesta) => {
              await crearProyecto(estado, idUsuario, idCliente, idPropuesta);
              setTimeout(() => menuProyectos(callbackVolver), 2000);
            });
          });
        });
      });
    } else if (opcion === "2") {
      listarProyectos();
      setTimeout(() => menuProyectos(callbackVolver), 2000);
    } else if (opcion === "3") {
      rl.question("ID del proyecto a actualizar: ", (id) => {
        rl.question("Nuevo estado: ", async (estado) => {
          await actualizarProyecto(id, estado);
          setTimeout(() => menuProyectos(callbackVolver), 2000);
        });
      });
    } else if (opcion === "4") {
      rl.question("ID del proyecto a eliminar: ", async (id) => {
        await eliminarProyecto(id);
        setTimeout(() => menuProyectos(callbackVolver), 2000);
      });
    } else if (opcion === "5") {
      callbackVolver();
    } else {
      console.log("\n❌ Opción inválida");
      setTimeout(() => menuProyectos(callbackVolver), 1500);
    }
  });
}

module.exports = { menuProyectos };
