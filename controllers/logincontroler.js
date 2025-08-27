const Cliente = require('../models/clientemodels');
const Usuario = require('../models/usuariomodel');
const { menuUsuarios } = require('../views/usuariosview');
const { menuClientes } = require('../views/clientesView');

async function iniciarSesion(correo, contrasena) {
  try {
    // Buscar primero en clientes
    const cliente = await Cliente.buscarCliente(correo.trim(), contrasena.trim());
    if (cliente) {
      console.log(`\n✅ Bienvenido cliente: ${cliente.correo}`);
      setTimeout(() => menuClientes(() => require('../views/menu').mostrarMenu()), 1500);
      return;
    }

    // Si no es cliente, buscar en usuarios
    const usuario = await Usuario.buscarUsuarioPorCredenciales(correo.trim(), contrasena.trim());
    if (usuario) {
      console.log(`\n✅ Bienvenido usuario: ${usuario.correo}`);
      setTimeout(() => menuUsuarios(() => require('../views/menu').mostrarMenu()), 1500);
      return;
    }

    console.log("\n❌ Correo o contraseña incorrectos.");
    setTimeout(() => require('../views/menu').mostrarMenu(), 3000); // <-- Agregar esta línea para volver al menú después del error.

  } catch (err) {
    console.log("\n❌ Error al iniciar sesión:", err.message);
  }
}

module.exports = { iniciarSesion };