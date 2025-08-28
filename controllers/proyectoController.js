const Proyecto = require('../models/Proyectomodels');

async function crearProyecto(estado, id_usuario, id_cliente, id_propuesta) {
  try {
    await Proyecto.crearProyecto(estado.trim(), id_usuario.trim(), id_cliente.trim(), id_propuesta.trim());
    console.log("\n✅ Proyecto creado con éxito.");
  } catch (err) {
    console.log("\n❌ Error al crear proyecto:", err.message);
  }
}

async function listarProyectos() {
  try {
    const proyectos = await Proyecto.listarProyectos();
    console.log("\n📋 Lista de proyectos:");
    proyectos.forEach(p =>
      console.log(`- ID: ${p._id} | Estado: ${p.estado} | Usuario: ${p.id_usuario} | Cliente: ${p.id_cliente} | Propuesta: ${p.id_propuesta}`)
    );
  } catch (err) {
    console.log("\n❌ Error al listar proyectos:", err.message);
  }
}

async function actualizarProyecto(id, nuevoEstado) {
  try {
    const result = await Proyecto.actualizarProyecto(id, nuevoEstado);
    if (result.modifiedCount > 0) {
      console.log("\n✅ Proyecto actualizado correctamente.");
    } else {
      console.log("\n⚠️ No se encontró el proyecto.");
    }
  } catch (err) {
    console.log("\n❌ Error al actualizar proyecto:", err.message);
  }
}

async function eliminarProyecto(id) {
  try {
    const result = await Proyecto.eliminarProyecto(id);
    if (result.deletedCount > 0) {
      console.log("\n✅ Proyecto eliminado correctamente.");
    } else {
      console.log("\n⚠️ No se encontró el proyecto.");
    }
  } catch (err) {
    console.log("\n❌ Error al eliminar proyecto:", err.message);
  }
}

module.exports = {
  crearProyecto,
  listarProyectos,
  actualizarProyecto,
  eliminarProyecto
};
