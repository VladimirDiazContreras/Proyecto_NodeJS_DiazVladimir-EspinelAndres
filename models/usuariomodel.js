const conectarDB = require('../config/db');

async function getCollection() {
  const db = await conectarDB();
  return db.collection('usuarios');
}

async function crearUsuario(usuario, contrasena) {
  const col = await getCollection();
  return await col.insertOne({ usuario, contrasena });
}

async function buscarUsuario(usuario, contrasena) {
  const col = await getCollection();
  return await col.findOne({ usuario, contrasena });
}

module.exports = { crearUsuario, buscarUsuario };
