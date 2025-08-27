const Cliente = require('../models/clientemodels');

async function crearCliente(nombre, contrasena) {
  try {
    await Cliente.crearCliente(nombre.trim(), contrasena.trim());
    console.log("\n✅ Cliente creado con éxito.");
  } catch (err) {
    console.log("\n❌ Error al crear cliente:", err.message);
  }
}

async function listarClientes() {
  try {
    const clientes = await Cliente.listarClientes();
    console.log("\n📋 Lista de clientes:");
    clientes.forEach(c => console.log(`- ${c.nombre}`));
  } catch (err) {
    console.log("\n❌ Error al listar clientes:", err.message);
  }
}

async function actualizarCliente(nombre, nuevaContrasena) {
  try {
    const result = await Cliente.actualizarCliente(nombre.trim(), nuevaContrasena.trim());
    if (result.modifiedCount > 0) {
      console.log("\n✅ Contraseña actualizada correctamente.");
    } else {
      console.log("\n⚠️ No se encontró el cliente.");
    }
  } catch (err) {
    console.log("\n❌ Error al actualizar cliente:", err.message);
  }
}

async function eliminarCliente(nombre) {
  try {
    const result = await Cliente.eliminarCliente(nombre.trim());
    if (result.deletedCount > 0) {
      console.log("\n✅ Cliente eliminado correctamente.");
    } else {
      console.log("\n⚠️ No se encontró el cliente.");
    }
  } catch (err) {
    console.log("\n❌ Error al eliminar cliente:", err.message);
  }
}

module.exports = {
  crearCliente,
  listarClientes,
  actualizarCliente,
  eliminarCliente
};
