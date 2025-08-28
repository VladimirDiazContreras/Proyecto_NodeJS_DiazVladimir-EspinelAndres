// propuestasModel.js

class Propuesta {
    constructor(descripcion, fechaCreacion, estado) {
        this.descripcion = descripcion;
        this.fechaCreacion = fechaCreacion;
        this.estado = estado;
    }

    static schema = {
        descripcion: 'string',
        fechaCreacion: 'string',
        estado: 'string'
    };

    static validar(propuesta) {
        if (!propuesta.descripcion || !propuesta.estado) {
            console.error("Error de validación: Faltan campos obligatorios.");
            return false;
        }
        for (let campo in Propuesta.schema) {
            if (typeof propuesta[campo] !== Propuesta.schema[campo]) {
                console.error(`Error de validación: El campo "${campo}" no es del tipo esperado.`);
                return false;
            }
        }
        return true;
    }

    static async guardar(db, propuesta) {
        const collection = db.collection('propuestas');

        if (!Propuesta.validar(propuesta)) {
            throw new Error('La propuesta no cumple con el esquema');
        }

        await collection.insertOne(propuesta);
        console.log('Propuesta guardada correctamente en MongoDB 🚀');
    }

    // Nuevo método para listar todas las propuestas
    static async listar(db) {
        const collection = db.collection('propuestas');
        const propuestas = await collection.find({}).toArray();
        return propuestas;
    }
}

module.exports = Propuesta;