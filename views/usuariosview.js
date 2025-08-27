const readline = require('readline');
const {
  crearUsuario,
  listarUsuarios,
  actualizarUsuario,
  eliminarUsuario
} = require('../controllers/usuariocontroller');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function menuUsuarios(callbackVolver) {
  console.clear();
  console.log("=============================");
  console.log("   👤 CRUD DE USUARIOS");
  console.log("=============================");
  console.log("1) Crear usuario");
  console.log("2) Listar usuarios");
  console.log("3) Actualizar contraseña");
  console.log("4) Eliminar usuario");
  console.log("5) Volver al menú principal");

  rl.question("\nSeleccione una opción [1-5]: ", (opcion) => {
    if (opcion === "1") {
      rl.question("Nombre: ", (nombre) => {
        rl.question("Contraseña: ", async (contrasena) => {
          await crearUsuario(nombre, contrasena);
          setTimeout(() => menuUsuarios(callbackVolver), 2000);
        });
      });
    } else if (opcion === "2") {
      listarUsuarios();
      setTimeout(() => menuUsuarios(callbackVolver), 2000);
    } else if (opcion === "3") {
      rl.question("Nombre del usuario a actualizar: ", (nombre) => {
        rl.question("Nueva contraseña: ", async (contrasena) => {
          await actualizarUsuario(nombre, contrasena);
          setTimeout(() => menuUsuarios(callbackVolver), 2000);
        });
      });
    } else if (opcion === "4") {
      rl.question("Nombre del usuario a eliminar: ", async (nombre) => {
        await eliminarUsuario(nombre);
        setTimeout(() => menuUsuarios(callbackVolver), 2000);
      });
    } else if (opcion === "5") {
      callbackVolver();
    } else {
      console.log("\n❌ Opción inválida");
      setTimeout(() => menuUsuarios(callbackVolver), 1500);
    }
  });
}

module.exports = { menuUsuarios };
