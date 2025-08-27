const readline = require('readline');
const { iniciarSesion } = require('../controllers/logincontroler');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function mostrarMenu() {
  console.clear();
  console.log('=============================');
  console.log('     🔐 INICIO DE SESIÓN     ');
  console.log('=============================');
  console.log('1) Iniciar sesión');
  console.log('2) Salir');

  rl.question('\nSeleccione una opción [1-2]: ', (opcion) => {
    if (opcion === '1') {
      rl.question('Correo: ', (correo) => {
        rl.question('Contraseña: ', async (contrasena) => {
          await iniciarSesion(correo, contrasena);
          setTimeout(mostrarMenu, 3000);
        });
      });
    } else if (opcion === '2') {
      console.log('\n👋 Saliendo...');
      rl.close();
      process.exit(0);
    } else {
      console.log('\n❌ Opción inválida');
      setTimeout(mostrarMenu, 1500);
    }
  });
}

module.exports = { mostrarMenu };
