// proyectosModel.js

class Proyecto {
    constructor(nombre, fechaInicio, estado) {
        this.nombre = nombre;
        this.fechaInicio = fechaInicio;
        this.estado = estado;
    }

    // Definimos el esquema esperado para cada campo
    static schema = {
        nombre: 'string',
        fechaInicio: 'string',
        estado: 'string'
    };

    // Validar el proyecto antes de guardar
    static validar(proyecto) {
        if (!proyecto.nombre || !proyecto.fechaInicio || !proyecto.estado) {
            console.error("Error de validación: Faltan campos obligatorios.");
            return false;
        }

        for (let campo in Proyecto.schema) {
            if (typeof proyecto[campo] !== Proyecto.schema[campo]) {
                console.error(`Error de validación: El campo "${campo}" no es del tipo esperado.`);
                return false;
            }
        }
        return true;
    }

    // Guardar en la base de datos
    static async guardar(db, proyecto) {
        const collection = db.collection('proyectos');

        if (!Proyecto.validar(proyecto)) {
            throw new Error('El proyecto no cumple con el esquema');
        }

        await collection.insertOne(proyecto);
        console.log('Proyecto guardado correctamente en MongoDB 🚀');
    }

    // Nuevo método para listar todos los proyectos
    static async listar(db) {
        const collection = db.collection('proyectos');
        const proyectos = await collection.find({}).toArray();
        return proyectos;
    }
}
    
module.exports = Proyecto;