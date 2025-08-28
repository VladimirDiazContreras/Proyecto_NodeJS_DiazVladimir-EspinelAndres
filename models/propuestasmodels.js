const conectarDB = require('../config/db');

async function getCollection() {
  const db = await conectarDB();
  return db.collection('propuestas');
}

async function crearPropuesta(titulo, descripcion, estado) {
  const col = await getCollection();
  return await col.insertOne({ titulo, descripcion, estado });
}

async function listarPropuestas() {
  const col = await getCollection();
  return await col.find().toArray();
}

async function actualizarPropuesta(titulo, nuevaDescripcion, nuevoEstado) {
  const col = await getCollection();
  return await col.updateOne(
    { titulo },
    { $set: { descripcion: nuevaDescripcion, estado: nuevoEstado } }
  );
}

async function eliminarPropuesta(titulo) {
  const col = await getCollection();
  return await col.deleteOne({ titulo });
}

module.exports = {
  crearPropuesta,
  listarPropuestas,
  actualizarPropuesta,
  eliminarPropuesta
};
