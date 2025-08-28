const Contrato = require('../models/Contratomodels');

async function crearContrato(id_proyecto, fecha_inicio, fecha_fin, descripcion, estado) {
  try {
    await Contrato.crearContrato(id_proyecto.trim(), fecha_inicio.trim(), fecha_fin.trim(), descripcion.trim(), estado.trim());
    console.log("\n✅ Contrato creado con éxito.");
  } catch (err) {
    console.log("\n❌ Error al crear contrato:", err.message);
  }
}

async function listarContratos() {
  try {
    const contratos = await Contrato.listarContratos();
    console.log("\n📋 Lista de contratos:");
    contratos.forEach(c =>
      console.log(`- ID: ${c._id} | Proyecto: ${c.id_proyecto} | ${c.descripcion} | Estado: ${c.estado} | Inicio: ${c.fecha_inicio} | Fin: ${c.fecha_fin}`)
    );
  } catch (err) {
    console.log("\n❌ Error al listar contratos:", err.message);
  }
}

async function actualizarContrato(id, nuevaDescripcion, nuevoEstado, nuevaFechaFin) {
  try {
    const result = await Contrato.actualizarContrato(id, nuevaDescripcion, nuevoEstado, nuevaFechaFin);
    if (result.modifiedCount > 0) {
      console.log("\n✅ Contrato actualizado correctamente.");
    } else {
      console.log("\n⚠️ No se encontró el contrato.");
    }
  } catch (err) {
    console.log("\n❌ Error al actualizar contrato:", err.message);
  }
}

async function eliminarContrato(id) {
  try {
    const result = await Contrato.eliminarContrato(id);
    if (result.deletedCount > 0) {
      console.log("\n✅ Contrato eliminado correctamente.");
    } else {
      console.log("\n⚠️ No se encontró el contrato.");
    }
  } catch (err) {
    console.log("\n❌ Error al eliminar contrato:", err.message);
  }
}

module.exports = {
  crearContrato,
  listarContratos,
  actualizarContrato,
  eliminarContrato
};
