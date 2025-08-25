const readline = require('readline');

// Datos simulados (usuario y contraseña)
const usuarios = {
  admin: '1234',
  user: 'abcd'
};

// Crear la interfaz readline
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Función para mostrar el menú
function mostrarMenu() {
  console.clear();
  console.log('=============================');
  console.log('     🔐 INICIO DE SESIÓN     ');
  console.log('=============================');
  console.log('1) Iniciar sesión');
  console.log('2) Salir');

  rl.question('\nSeleccione una opción [1-2]: ', (opcion) => {
    if (opcion === '1') {
      iniciarSesion();
    } else if (opcion === '2') {
      console.log('\n👋 Saliendo...');
      rl.close();
    } else {
      console.log('\n❌ Opción inválida');
      mostrarMenu(); // Volver a mostrar el menú
    }
  });
}

// Función para manejar el inicio de sesión
function iniciarSesion() {
  rl.question('Usuario: ', (usuario) => {
    rl.question('Contraseña: ', (contrasena) => {
      // Eliminar espacios extras (al inicio y final) para evitar errores de comparación
      const usuarioTrim = usuario.trim();
      const contrasenaTrim = contrasena.trim();

      // Verificar las credenciales
      if (usuarios[usuarioTrim] && usuarios[usuarioTrim] === contrasenaTrim) {
        console.log(`\n✅ Bienvenido, ${usuarioTrim}`);
      } else {
        console.log('\n❌ Usuario o contraseña incorrectos.');
      }
      // Volver al menú después de 2 segundos
      setTimeout(mostrarMenu, 2000);
    });
  });
}

// Iniciar el proceso
mostrarMenu();
