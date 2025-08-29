const conectarDB = require('../config/db');

async function getCollection() {
  const db = await conectarDB();
  return db.collection('propuestas');
}
async function getCollectionProy() {
  const db = await conectarDB();
  return db.collection('proyectos');
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
const nuevoProyecto = {
  estado: "Aprobado",
  id_usuario: "",
  id_cliente: "",
  fechaCreacion: new Date()
};

async function pasarpropuestaProyecto(tituloPropuesta) {
  try {
    const propuestasCol = await getCollection('propuestas');
    const proyectosCol = await getCollectionProy('proyectos');

    // 1. Encontrar la propuesta por su título.
    const propuesta = await propuestasCol.findOne({ titulo: tituloPropuesta });

    // 2. Verificar si la propuesta existe y si su estado es 'aceptada'.
    if (!propuesta) {
      console.log(`Error: No se encontró una propuesta con el título "${tituloPropuesta}".`);
      return { success: false, message: 'Propuesta no encontrada.' };
    }

    if (propuesta.estado !== 'aceptada') {
      console.log(`Error: La propuesta "${tituloPropuesta}" debe estar en estado 'aceptada' para ser convertida a proyecto.`);
      return { success: false, message: 'Estado de propuesta incorrecto.' };
    }

    // 3. Insertar la propuesta en la colección de proyectos.
    const nuevoProyecto = {
      _id: ObjectId(""),
      estado: "Aprobado",
      id_usuario: "",
      id_cliente: "",
      fechaCreacion: new Date()
    };
    
    // Corregido: pasar el objeto 'nuevoProyecto' a insertOne
    await proyectosCol.insertOne(nuevoProyecto);

    // 4. Eliminar la propuesta original de la colección de propuestas.
    await propuestasCol.deleteOne({ _id: propuesta._id });

    console.log(`La propuesta "${tituloPropuesta}" ha sido convertida en proyecto exitosamente.`);
    return { success: true, message: 'Propuesta convertida a proyecto.' };
  } catch (error) {
    console.error("Error al pasar la propuesta a proyecto:", error);
    return { success: false, message: 'Error interno del servidor.' };
  }
}

module.exports = {
  crearPropuesta,
  listarPropuestas,
  actualizarPropuesta,
  eliminarPropuesta,
  pasarpropuestaProyecto
};

