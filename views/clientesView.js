const readline = require('readline');
const {
  crearCliente,
  listarClientes,
  actualizarCliente,
  eliminarCliente
} = require('../controllers/clienteController');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function menuClientes(callbackVolver) {
  console.clear();
  console.log("=============================");
  console.log("   👥 CRUD DE CLIENTES");
  console.log("=============================");
  console.log("1) Crear cliente");
  console.log("2) Listar clientes");
  console.log("3) Actualizar contraseña");
  console.log("4) Eliminar cliente");
  console.log("5) Volver al menú principal");

  rl.question("\nSeleccione una opción [1-5]: ", (opcion) => {
    if (opcion === "1") {
      rl.question("Nombre: ", (nombre) => {
        rl.question("Contraseña: ", async (contrasena) => {
          await crearCliente(nombre, contrasena);
          setTimeout(() => menuClientes(callbackVolver), 2000);
        });
      });
    } else if (opcion === "2") {
      listarClientes();
      setTimeout(() => menuClientes(callbackVolver), 2000);
    } else if (opcion === "3") {
      rl.question("Nombre del cliente a actualizar: ", (nombre) => {
        rl.question("Nueva contraseña: ", async (contrasena) => {
          await actualizarCliente(nombre, contrasena);
          setTimeout(() => menuClientes(callbackVolver), 2000);
        });
      });
    } else if (opcion === "4") {
      rl.question("Nombre del cliente a eliminar: ", async (nombre) => {
        await eliminarCliente(nombre);
        setTimeout(() => menuClientes(callbackVolver), 2000);
      });
    } else if (opcion === "5") {
      callbackVolver();
    } else {
      console.log("\n❌ Opción inválida");
      setTimeout(() => menuClientes(callbackVolver), 1500);
    }
  });
}

module.exports = { menuClientes };
