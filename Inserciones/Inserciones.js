// ================== DOCUMENTACIÓN DEL MODELO DE DATOS EN MONGODB ==================

/*
  Este conjunto de colecciones representa un sistema de gestión de proyectos.
  Las relaciones entre las colecciones se manejan a través de referencias de ObjectId,
  que vinculan documentos de una colección con documentos de otra.
*/

// ================== CLIENTES ==================
/*
  Colección 'clientes': Almacena información sobre los clientes de la empresa.
  Campos:
  - _id: ObjectId, identificador único del cliente.
  - nombre: String, nombre completo del cliente.
  - correo: String, dirección de correo electrónico.
  - telefono: String, número de teléfono.
*/
db.clientes.insertMany([
  { _id: ObjectId("64c1a1111111111111111111"), nombre: "Juan Pérez", correo: "juan.perez@example.com", telefono: "3001111111" },
  { _id: ObjectId("64c1a1111111111111111112"), nombre: "María Gómez", correo: "maria.gomez@example.com", telefono: "3002222222" },
  { _id: ObjectId("64c1a1111111111111111113"), nombre: "Carlos Ruiz", correo: "carlos.ruiz@example.com", telefono: "3003333333" },
  { _id: ObjectId("64c1a1111111111111111114"), nombre: "Ana Torres", correo: "ana.torres@example.com", telefono: "3004444444" },
  { _id: ObjectId("64c1a1111111111111111115"), nombre: "Luis Fernández", correo: "luis.fernandez@example.com", telefono: "3005555555" }
]);

// ================== USUARIOS ==================
/*
  Colección 'usuarios': Contiene los datos de los empleados o personal de la empresa.
  Campos:
  - _id: ObjectId, identificador único del usuario.
  - nombre: String, nombre completo del usuario.
  - correo: String, dirección de correo electrónico.
  - telefono: String, número de teléfono.
*/
db.usuarios.insertMany([
  { _id: ObjectId("64c1b2222222222222222221"), nombre: "Pedro López", correo: "pedro.lopez@example.com", telefono: "3101111111" },
  { _id: ObjectId("64c1b2222222222222222222"), nombre: "Laura Sánchez", correo: "laura.sanchez@example.com", telefono: "3102222222" },
  { _id: ObjectId("64c1b2222222222222222223"), nombre: "Andrés Ramírez", correo: "andres.ramirez@example.com", telefono: "3103333333" },
  { _id: ObjectId("64c1b2222222222222222224"), nombre: "Sofía Morales", correo: "sofia.morales@example.com", telefono: "3104444444" },
  { _id: ObjectId("64c1b2222222222222222225"), nombre: "Diego Castillo", correo: "diego.castillo@example.com", telefono: "3105555555" }
]);

// ================== PROPUESTAS ==================
/*
  Colección 'propuestas': Registra las propuestas comerciales enviadas a los clientes.
  Campos:
  - _id: ObjectId, identificador único de la propuesta.
  - estado: String, estado actual de la propuesta (ej. "Aprobada", "Pendiente").
  - id_usuario: ObjectId, referencia al usuario que creó la propuesta.
  - id_cliente: ObjectId, referencia al cliente de la propuesta.
*/
db.propuestas.insertMany([
  { _id: ObjectId("64c1c3333333333333333331"), estado: "Aprobada", id_usuario: ObjectId("64c1b2222222222222222221"), id_cliente: ObjectId("64c1a1111111111111111111") },
  { _id: ObjectId("64c1c3333333333333333332"), estado: "Aprobada", id_usuario: ObjectId("64c1b2222222222222222222"), id_cliente: ObjectId("64c1a1111111111111111112") }
]);

// ================== PROYECTOS ==================
/*
  Colección 'proyectos': Contiene los proyectos activos que se están desarrollando.
  Campos:
  - _id: ObjectId, identificador único del proyecto.
  - estado: String, estado actual del proyecto (ej. "En Progreso", "Finalizado").
  - id_usuario: ObjectId, referencia al usuario responsable del proyecto.
  - id_cliente: ObjectId, referencia al cliente del proyecto.
  - id_propuesta: ObjectId, referencia a la propuesta que originó el proyecto.
*/
db.proyectos.insertMany([
  { _id: ObjectId("64c1d4444444444444444441"), estado: "En Progreso", id_usuario: ObjectId("64c1b2222222222222222221"), id_cliente: ObjectId("64c1a1111111111111111111"), id_propuesta: ObjectId("64c1c3333333333333333331") },
  { _id: ObjectId("64c1d4444444444444444442"), estado: "Planeación", id_usuario: ObjectId("64c1b2222222222222222222"), id_cliente: ObjectId("64c1a1111111111111111112"), id_propuesta: ObjectId("64c1c3333333333333333332") }
]);

// ================== CONTRATOS ==================
/*
  Colección 'contratos': Almacena los acuerdos formales relacionados con los proyectos.
  Campos:
  - _id: ObjectId, identificador único del contrato.
  - id_proyecto: ObjectId, referencia al proyecto del contrato.
  - fecha_inicio: ISODate, fecha de inicio del contrato.
  - fecha_fin: ISODate, fecha de finalización del contrato.
  - descripcion: String, descripción detallada del contrato.
  - estado: String, estado del contrato (ej. "Activo", "Vencido").
*/
db.contratos.insertMany([
  { _id: ObjectId("64c1e5555555555555555551"), id_proyecto: ObjectId("64c1d4444444444444444441"), fecha_inicio: ISODate("2025-01-01"), fecha_fin: ISODate("2025-06-01"), descripcion: "Contrato para desarrollo de sistema de ventas", estado: "Activo" },
  { _id: ObjectId("64c1e5555555555555555552"), id_proyecto: ObjectId("64c1d4444444444444444442"), fecha_inicio: ISODate("2025-02-01"), fecha_fin: ISODate("2025-07-01"), descripcion: "Contrato para app móvil de clientes", estado: "Activo" }
]);

// ================== GESTION FINANCIERA ==================
/*
  Colección 'gestion_financiera': Registra los movimientos financieros de cada proyecto.
  Campos:
  - _id: ObjectId, identificador único del movimiento.
  - id_proyecto: ObjectId, referencia al proyecto.
  - descripcion: String, descripción del movimiento (ej. "Pago inicial", "Compra de licencias").
  - presupuesto: Number, presupuesto total del proyecto.
  - tipo_movimiento: String, tipo de transacción ("Ingreso" o "Egreso").
  - fecha: ISODate, fecha del movimiento.
  - monto: Number, cantidad del movimiento financiero.
*/
db.gestion_financiera.insertMany([
  // Movimientos para el Proyecto 1
  { _id: ObjectId("64c1f6666666666666666661"), id_proyecto: ObjectId("64c1d4444444444444444441"), descripcion: "Pago inicial", presupuesto: 1000000, tipo_movimiento: "Ingreso", fecha: ISODate("2025-01-05"), monto: 500000 },
  { _id: ObjectId("64c1f6666666666666666662"), id_proyecto: ObjectId("64c1d4444444444444444441"), descripcion: "Compra de servidores", presupuesto: 1000000, tipo_movimiento: "Egreso", fecha: ISODate("2025-01-15"), monto: 200000 },
  { _id: ObjectId("64c1f6666666666666666663"), id_proyecto: ObjectId("64c1d4444444444444444441"), descripcion: "Segundo abono cliente", presupuesto: 1000000, tipo_movimiento: "Ingreso", fecha: ISODate("2025-03-01"), monto: 300000 },

  // Movimientos para el Proyecto 2
  { _id: ObjectId("64c1f6666666666666666671"), id_proyecto: ObjectId("64c1d4444444444444444442"), descripcion: "Pago inicial", presupuesto: 1500000, tipo_movimiento: "Ingreso", fecha: ISODate("2025-02-05"), monto: 600000 },
  { _id: ObjectId("64c1f6666666666666666672"), id_proyecto: ObjectId("64c1d4444444444444444442"), descripcion: "Licencias de software", presupuesto: 1500000, tipo_movimiento: "Egreso", fecha: ISODate("2025-02-20"), monto: 250000 },
  { _id: ObjectId("64c1f6666666666666666673"), id_proyecto: ObjectId("64c1d4444444444444444442"), descripcion: "Segundo abono cliente", presupuesto: 1500000, tipo_movimiento: "Ingreso", fecha: ISODate("2025-04-01"), monto: 400000 }
]);