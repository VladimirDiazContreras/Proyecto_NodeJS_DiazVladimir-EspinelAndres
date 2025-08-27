const conectarDB = require('../config/db');

async function getCollection() {
  const db = await conectarDB();
  return db.collection('clientes');
}

async function crearCliente(correo, contrasena) {
  const col = await getCollection();
  return await col.insertOne({ correo, contraseña: contrasena });
}

async function listarClientes() {
  const col = await getCollection();
  return await col.find().toArray();
}

async function actualizarCliente(correo, nuevaContrasena) {
  const col = await getCollection();
  return await col.updateOne(
    { correo },
    { $set: { contraseña: nuevaContrasena } }
  );
}

async function eliminarCliente(correo) {
  const col = await getCollection();
  return await col.deleteOne({ correo });
}

async function buscarCliente(correo, contrasena) {
  const col = await getCollection();
  return await col.findOne({ correo, contraseña: contrasena });
}

module.exports = {
  crearCliente,
  listarClientes,
  actualizarCliente,
  eliminarCliente,
  buscarCliente
};
