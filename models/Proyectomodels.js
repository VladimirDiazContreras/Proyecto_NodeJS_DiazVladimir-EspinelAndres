const conectarDB = require('../config/db');
const { ObjectId } = require('mongodb');

async function getCollection() {
  const db = await conectarDB();
  return db.collection('proyectos');
}

async function crearProyecto(estado, id_usuario, id_cliente, id_propuesta) {
  const col = await getCollection();
  return await col.insertOne({
    estado,
    id_usuario: new ObjectId(id_usuario),
    id_cliente: new ObjectId(id_cliente),
    id_propuesta: new ObjectId(id_propuesta)
  });
}

async function listarProyectos() {
  const col = await getCollection();
  return await col.find().toArray();
}

async function actualizarProyecto(id, nuevoEstado) {
  const col = await getCollection();
  return await col.updateOne(
    { _id: new ObjectId(id) },
    { $set: { estado: nuevoEstado } }
  );
}

async function eliminarProyecto(id) {
  const col = await getCollection();
  return await col.deleteOne({ _id: new ObjectId(id) });
}

module.exports = {
  crearProyecto,
  listarProyectos,
  actualizarProyecto,
  eliminarProyecto
};
