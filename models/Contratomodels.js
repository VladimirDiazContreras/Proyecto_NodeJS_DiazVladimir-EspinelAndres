const conectarDB = require('../config/db');
const { ObjectId } = require('mongodb');

async function getCollection() {
  const db = await conectarDB();
  return db.collection('contratos');
}

async function crearContrato(id_proyecto, fecha_inicio, fecha_fin, descripcion, estado) {
  const col = await getCollection();
  return await col.insertOne({
    id_proyecto: new ObjectId(id_proyecto),
    fecha_inicio: new Date(fecha_inicio),
    fecha_fin: new Date(fecha_fin),
    descripcion,
    estado
  });
}

async function listarContratos() {
  const col = await getCollection();
  return await col.find().toArray();
}

async function actualizarContrato(id, nuevaDescripcion, nuevoEstado, nuevaFechaFin) {
  const col = await getCollection();
  return await col.updateOne(
    { _id: new ObjectId(id) },
    { $set: { descripcion: nuevaDescripcion, estado: nuevoEstado, fecha_fin: new Date(nuevaFechaFin) } }
  );
}

async function eliminarContrato(id) {
  const col = await getCollection();
  return await col.deleteOne({ _id: new ObjectId(id) });
}

module.exports = {
  crearContrato,
  listarContratos,
  actualizarContrato,
  eliminarContrato
};
