const Propuesta = require('../models/propuestasmodels');

async function crearPropuesta(titulo, descripcion, estado) {
  try {
    await Propuesta.crearPropuesta(titulo.trim(), descripcion.trim(), estado.trim());
    console.log("\n✅ Propuesta creada con éxito.");
  } catch (err) {
    console.log("\n❌ Error al crear propuesta:", err.message);
  }
}

async function listarPropuestas() {
  try {
    const propuestas = await Propuesta.listarPropuestas();
    console.log("\n📋 Lista de propuestas:");
    propuestas.forEach(p =>
      console.log(`- ${p.titulo} | Estado: ${p.estado} | ${p.descripcion}`)
    );
  } catch (err) {
    console.log("\n❌ Error al listar propuestas:", err.message);
  }
}

async function actualizarPropuesta(titulo, nuevaDescripcion, nuevoEstado) {
  try {
    const result = await Propuesta.actualizarPropuesta(titulo.trim(), nuevaDescripcion.trim(), nuevoEstado.trim());
    if (result.modifiedCount > 0) {
      console.log("\n✅ Propuesta actualizada correctamente.");
    } else {
      console.log("\n⚠️ No se encontró la propuesta.");
    }
  } catch (err) {
    console.log("\n❌ Error al actualizar propuesta:", err.message);
  }
}

async function eliminarPropuesta(titulo) {
  try {
    const result = await Propuesta.eliminarPropuesta(titulo.trim());
    if (result.deletedCount > 0) {
      console.log("\n✅ Propuesta eliminada correctamente.");
    } else {
      console.log("\n⚠️ No se encontró la propuesta.");
    }
  } catch (err) {
    console.log("\n❌ Error al eliminar propuesta:", err.message);
  }
}

module.exports = {
  crearPropuesta,
  listarPropuestas,
  actualizarPropuesta,
  eliminarPropuesta
};
