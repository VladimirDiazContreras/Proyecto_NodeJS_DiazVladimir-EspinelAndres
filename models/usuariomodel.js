const conectarDB = require('../config/db');

async function getCollection() {
  const db = await conectarDB();
  return db.collection('usuarios');
}

// ✅ Crear usuario con todos los campos
async function crearUsuario(correo, contrasena, nombre, telefono) {
  const col = await getCollection();
  const nuevo = { correo, contraseña: contrasena, nombre, telefono };
  return await col.insertOne(nuevo);
}

// ✅ Listar todos los usuarios
async function listarUsuarios() {
  const col = await getCollection();
  return await col.find().toArray();
}

// ✅ Actualizar TODOS los datos de un usuario (por correo)
async function actualizarUsuario(correo, nuevosDatos) {
  const col = await getCollection();
  return await col.updateOne(
    { correo },
    { $set: {
        nombre: nuevosDatos.nombre,
        telefono: nuevosDatos.telefono,
        contraseña: nuevosDatos.contraseña,
        correo: nuevosDatos.correo   // por si también se quiere cambiar
      }
    }
  );
}

// ✅ Eliminar usuario por correo
async function eliminarUsuario(correo) {
  const col = await getCollection();
  return await col.deleteOne({ correo });
}

// ✅ Buscar usuario por credenciales (login)
async function buscarUsuarioPorCredenciales(correo, contrasena) {
  const col = await getCollection();
  return await col.findOne({ correo, contraseña: contrasena });
}

module.exports = {
  crearUsuario,
  listarUsuarios,
  actualizarUsuario,
  eliminarUsuario,
  buscarUsuarioPorCredenciales
};

