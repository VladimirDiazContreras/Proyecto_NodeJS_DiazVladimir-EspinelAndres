const rl = require('../config/rl');
const {
  crearContrato,
  listarContratos,
  actualizarContrato,
  eliminarContrato
} = require('../controllers/contratoController');

function menuContratos(callbackVolver) {
  console.clear();
  console.log("=============================");
  console.log("   📑 CRUD DE CONTRATOS");
  console.log("=============================");
  console.log("1) Crear contrato");
  console.log("2) Listar contratos");
  console.log("3) Actualizar contrato");
  console.log("4) Eliminar contrato");
  console.log("5) Volver al menú anterior");

  rl.question("\nSeleccione una opción [1-5]: ", (opcion) => {
    if (opcion === "1") {
      rl.question("ID Proyecto: ", (idProyecto) => {
        rl.question("Fecha inicio (YYYY-MM-DD): ", (fechaInicio) => {
          rl.question("Fecha fin (YYYY-MM-DD): ", (fechaFin) => {
            rl.question("Descripción: ", (descripcion) => {
              rl.question("Estado: ", async (estado) => {
                await crearContrato(idProyecto, fechaInicio, fechaFin, descripcion, estado);
                setTimeout(() => menuContratos(callbackVolver), 2000);
              });
            });
          });
        });
      });
    } else if (opcion === "2") {
      listarContratos();
      setTimeout(() => menuContratos(callbackVolver), 10000);
    } else if (opcion === "3") {
      rl.question("ID del contrato a actualizar: ", (id) => {
        rl.question("Nueva descripción: ", (desc) => {
          rl.question("Nuevo estado: ", (estado) => {
            rl.question("Nueva fecha fin (YYYY-MM-DD): ", async (fechaFin) => {
              await actualizarContrato(id, desc, estado, fechaFin);
              setTimeout(() => menuContratos(callbackVolver), 2000);
            });
          });
        });
      });
    } else if (opcion === "4") {
      rl.question("ID del contrato a eliminar: ", async (id) => {
        await eliminarContrato(id);
        setTimeout(() => menuContratos(callbackVolver), 2000);
      });
    } else if (opcion === "5") {
      callbackVolver();
    } else {
      console.log("\n❌ Opción inválida");
      setTimeout(() => menuContratos(callbackVolver), 1500);
    }
  });
}

module.exports = { menuContratos };
