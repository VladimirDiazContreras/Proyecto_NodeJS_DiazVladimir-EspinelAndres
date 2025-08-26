const Usuario = require('../models/usuariomodel');

async function registrarUsuario(usuario, contrasena) {
  try {
    await Usuario.crearUsuario(usuario.trim(), contrasena.trim());
    console.log("\n Usuario registrado con éxito.");
  } catch (err) {
    console.log("\n Error al registrar usuario:", err.message);
  }
}

async function iniciarSesion(usuario, contrasena) {
  try {
    const user = await Usuario.buscarUsuario(usuario.trim(), contrasena.trim());
    if (user) {
      console.log(`\n Bienvenido, ${user.usuario}`);
    } else {
      console.log("\n Usuario o contraseña incorrectos.");
    }
  } catch (err) {
    console.log("\n Error al iniciar sesión:", err.message);
  }
}

module.exports = { registrarUsuario, iniciarSesion };
