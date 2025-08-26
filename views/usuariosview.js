const readline = require('readline');
const { registrarUsuario, iniciarSesion } = require('../controllers/usuariocontroller');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function mostrarMenu() {
  console.clear();
  console.log('=============================');
  console.log('     🔐 INICIO DE SESIÓN     ');
  console.log('=============================');
  console.log('1) Registrar usuario');
  console.log('2) Iniciar sesión');
  console.log('3) Salir');

  rl.question('\nSeleccione una opción [1-3]: ', (opcion) => {
    if (opcion === '1') {
      rl.question('Nuevo usuario: ', (usuario) => {
        rl.question('Nueva contraseña: ', async (contrasena) => {
          await registrarUsuario(usuario, contrasena);
          setTimeout(mostrarMenu, 2000);
        });
      });
    } else if (opcion === '2') {
      rl.question('Usuario: ', (usuario) => {
        rl.question('Contraseña: ', async (contrasena) => {
          await iniciarSesion(usuario, contrasena);
          setTimeout(mostrarMenu, 2000);
        });
      });
    } else if (opcion === '3') {
      console.log('\n👋 Saliendo...');
      rl.close();
      process.exit(0);
    } else {
      console.log('\n Opción inválida');
      setTimeout(mostrarMenu, 1500);
    }
  });
}

module.exports = { mostrarMenu };
