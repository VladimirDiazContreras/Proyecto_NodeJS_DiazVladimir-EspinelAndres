const Usuario = require('../models/usuariomodel');

async function crearUsuario(nombre, contrasena) {
  try {
    await Usuario.crearUsuario(nombre.trim(), contrasena.trim());
    console.log("\n✅ Usuario creado con éxito.");
  } catch (err) {
    console.log("\n❌ Error al crear usuario:", err.message);
  }
}

async function listarUsuarios() {
  try {
    const usuarios = await Usuario.listarUsuarios();
    console.log("\n📋 Lista de usuarios:");
    usuarios.forEach(u => console.log(`- ${u.nombre}`));
  } catch (err) {
    console.log("\n❌ Error al listar usuarios:", err.message);
  }
}

async function actualizarUsuario(nombre, nuevaContrasena) {
  try {
    const result = await Usuario.actualizarUsuario(nombre.trim(), nuevaContrasena.trim());
    if (result.modifiedCount > 0) {
      console.log("\n✅ Contraseña actualizada correctamente.");
    } else {
      console.log("\n⚠️ No se encontró el usuario.");
    }
  } catch (err) {
    console.log("\n❌ Error al actualizar usuario:", err.message);
  }
}

async function eliminarUsuario(nombre) {
  try {
    const result = await Usuario.eliminarUsuario(nombre.trim());
    if (result.deletedCount > 0) {
      console.log("\n✅ Usuario eliminado correctamente.");
    } else {
      console.log("\n⚠️ No se encontró el usuario.");
    }
  } catch (err) {
    console.log("\n❌ Error al eliminar usuario:", err.message);
  }
}

module.exports = {
  crearUsuario,
  listarUsuarios,
  actualizarUsuario,
  eliminarUsuario
};
