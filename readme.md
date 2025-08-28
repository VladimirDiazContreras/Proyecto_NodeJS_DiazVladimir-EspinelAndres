# :fire: Proyecto de Node JS Vladimir Diaz - Andres Espinel - Edgar Acevedo :fire:

# :raised_hand: Herramienta de Gestion aplicado en el Proyecto :raised_hand:
Link: 
https://diazc04080910-1755863033586.atlassian.net/jira/software/projects/SCRUM/boards/1?atlOrigin=eyJpIjoiMjI3NjhmNGNjYTdjNDA3ZGJjODQ4MzZlNTRiYmIwMDgiLCJwIjoiaiJ9

Nota: Con la herraminta Jira se crea un desglose detallado de las actividades a realizar enmarcando un trabajo ordenado y estructurado para que de esa forma se logre el objetivo

# :raised_hand: Product Backlog :raised_hand:
Link: 
https://docs.google.com/document/d/1HU8xuiVEsxjC_8uNe1Kb4n2Fv1vZDI2J_JBolTeEdq8/edit?usp=sharing 

Nota: Aca se refleja el informe de casos de usos o requermientos en un marco metodologico aplicando SCRUM

# :runner: Desarrollo de una App en comando de Linea :runner:

La gestión eficiente de información es esencial para empresas y profesionales freelance que manejan múltiples proyectos y clientes de forma simultánea. Tradicionalmente, muchas de estas organizaciones dependen de hojas de cálculo y documentos dispersos, lo que conlleva problemas como pérdida de datos, duplicidad de registros y dificultades para el seguimiento integral de los proyectos.

En respuesta a esta necesidad, el presente proyecto propone el desarrollo de una aplicación de línea de comandos (CLI) construida totalmente en Node.js. Esta herramienta está diseñada para centralizar y automatizar la gestión del portafolio profesional de freelancers, permitiendo controlar y organizar clientes, propuestas, contratos, proyectos, entregables y finanzas desde un único sistema.

La aplicación hace uso de tecnologías y metodologías modernas, como la programación orientada a objetos, principios SOLID, patrones de diseño y persistencia segura de datos con MongoDB. Así, ofrece una solución robusta, escalable y adaptada a las demandas reales del entorno freelance, optimizando los procesos internos y elevando la calidad de la gestión profesional.

# Modelo Entidad - Relacioón 

El modelo entidad-relación gestiona clientes, propuestas y proyectos, vinculando usuarios y administrativos en grupos, con soporte para finanzas y pagos. Está diseñado en un enfoque NoSQL, lo que le da mayor flexibilidad para manejar estructuras de datos dinámicas. Las relaciones entre entidades se plantean de forma lógica, priorizando la escalabilidad y la consistencia de la información.

# Caso de Estudio

La empresa de freelancers gestiona numerosos proyectos para diferentes clientes. Tradicionalmente, la administración de sus actividades se basaba en hojas de cálculo y documentos digitales almacenados en ubicaciones diversas. Este método resultó en múltiples problemas críticos: pérdida frecuente de información, duplicidad de datos, dificultad para mantener actualizados los registros y poco control sobre el estado de los contratos, entregables y finanzas.

A raíz de esta problemática, se evidenció la necesidad de una herramienta centralizada que permitiera automatizar y sistematizar la gestión de su portafolio profesional. El objetivo es evitar los errores del manejo manual de información y mejorar la eficiencia organizativa, permitiendo a los freelancers dedicar más tiempo a sus proyectos y menos a tareas administrativas.

En este contexto, se plantea el desarrollo de una aplicación de línea de comandos (CLI) utilizando Node.js, que permita a la empresa registrar, consultar, modificar y controlar toda la información relevante de su operación: clientes, propuestas, proyectos, contratos, entregables y aspectos financieros. De este modo, se busca transformar el proceso de gestión tradicional en un flujo moderno, confiable y alineado con las mejores prácticas tecnológicas actuales.


## Planificación

1- Construcción del Modelo Conceptual

- Tabla Cliente

Descripción: Almacena la información de los clientes registrados en el sistema.

 Atributos:
idCliente (PK): Identificador único del cliente.


nombre: Nombre del cliente.


correo: Correo electrónico del cliente (único).



- Tabla Propuesta

Descripción: Contiene las propuestas asociadas a un cliente.
 Atributos:
idPropuesta (PK): Identificador único de la propuesta.


estado: Estado actual de la propuesta (pendiente, aceptada, rechazada).


idCliente (FK): Relación con el cliente que la solicitó.



- Tabla Proyecto

Descripción: Representa los proyectos generados a partir de propuestas aprobadas.

 Atributos:
idProyecto (PK): Identificador único del proyecto.


estado: Estado actual del proyecto.


idCliente (FK): Cliente al que pertenece el proyecto.


idPropuesta (FK): Propuesta de la que surge el proyecto.



- Tabla Usuario
Descripción: Registra los datos de usuarios que interactúan en el sistema (gestores, administradores, etc.).
 

Atributos:
idUsuario (PK): Identificador único del usuario.


nombre: Nombre del usuario.


correo: Correo electrónico del usuario (único).



- Tabla Administrativo

Descripción: Contiene a los usuarios con rol administrativo vinculados directamente a proyectos.
 Atributos:
idAdministrativo (PK): Identificador único.


nombre: Nombre del administrativo.


correo: Correo electrónico.


idProyecto (FK): Proyecto que administra.



- Tabla Grupo

Descripción: Define grupos de trabajo donde participan distintos usuarios.

 Atributos:
idGrupo (PK): Identificador del grupo.


descripcion: Breve descripción del grupo.


idUsuario (FK): Usuario que integra el grupo.



- Tabla Gestión Financiera

Descripción: Registra los procesos financieros gestionados por usuarios del sistema.

 Atributos:
idFinanza (PK): Identificador único del registro financiero.


nombre: Nombre asociado al proceso financiero.


correo: Correo electrónico de referencia.


idUsuario (FK): Usuario responsable de la gestión financiera.



- Tabla Gestión de Pagos

Descripción: Almacena los pagos realizados dentro del sistema.

 Atributos:
idPago (PK): Identificador único del pago.


descripcion: Concepto del pago.


idUsuario (FK): Usuario asociado al registro de pago.




# :collision:// ===== DOCUMENTACIÓN DEL MODELO DE DATOS EN MONGODB =========:collision:

/*
  Este conjunto de colecciones representa un sistema de gestión de proyectos.
  Las relaciones entre las colecciones se manejan a través de referencias de ObjectId,
  que vinculan documentos de una colección con documentos de otra.
*/

## // ===== CLIENTES ====
/*
  #Colección 'clientes': Almacena información sobre los clientes de la empresa.
  Campos:
  - _id: ObjectId, identificador único del cliente.
  - nombre: String, nombre completo del cliente.
  - correo: String, dirección de correo electrónico.
  - telefono: String, número de teléfono.
*/
``` js
db.clientes.insertMany([
  { _id: ObjectId("64c1a1111111111111111111"), nombre: "Juan Pérez", correo: "juan.perez@example.com", telefono: "3001111111" },
  { _id: ObjectId("64c1a1111111111111111112"), nombre: "María Gómez", correo: "maria.gomez@example.com", telefono: "3002222222" },
  { _id: ObjectId("64c1a1111111111111111113"), nombre: "Carlos Ruiz", correo: "carlos.ruiz@example.com", telefono: "3003333333" },
  { _id: ObjectId("64c1a1111111111111111114"), nombre: "Ana Torres", correo: "ana.torres@example.com", telefono: "3004444444" },
  { _id: ObjectId("64c1a1111111111111111115"), nombre: "Luis Fernández", correo: "luis.fernandez@example.com", telefono: "3005555555" }

]);
```

## // ====== USUARIOS ==========

  Colección 'usuarios': Contiene los datos de los empleados o personal de la empresa.
  Campos:
  - _id: ObjectId, identificador único del usuario.
  - nombre: String, nombre completo del usuario.
  - correo: String, dirección de correo electrónico.
  - telefono: String, número de teléfono.
*/
``` js
db.usuarios.insertMany([
  { _id: ObjectId("64c1b2222222222222222221"), nombre: "Pedro López", correo: "pedro.lopez@example.com", telefono: "3101111111" },
  { _id: ObjectId("64c1b2222222222222222222"), nombre: "Laura Sánchez", correo: "laura.sanchez@example.com", telefono: "3102222222" },
  { _id: ObjectId("64c1b2222222222222222223"), nombre: "Andrés Ramírez", correo: "andres.ramirez@example.com", telefono: "3103333333" },
  { _id: ObjectId("64c1b2222222222222222224"), nombre: "Sofía Morales", correo: "sofia.morales@example.com", telefono: "3104444444" },
  { _id: ObjectId("64c1b2222222222222222225"), nombre: "Diego Castillo", correo: "diego.castillo@example.com", telefono: "3105555555" }
]);
```

## //===== PROPUESTAS =========
/*
  Colección 'propuestas': Registra las propuestas comerciales enviadas a los clientes.
  Campos:
  - _id: ObjectId, identificador único de la propuesta.
  - estado: String, estado actual de la propuesta (ej. "Aprobada", "Pendiente").
  - id_usuario: ObjectId, referencia al usuario que creó la propuesta.
  - id_cliente: ObjectId, referencia al cliente de la propuesta.
*/
``` js
db.propuestas.insertMany([
  { _id: ObjectId("64c1c3333333333333333331"), estado: "Aprobada", id_usuario: ObjectId("64c1b2222222222222222221"), id_cliente: ObjectId("64c1a1111111111111111111") },
  { _id: ObjectId("64c1c3333333333333333332"), estado: "Aprobada", id_usuario: ObjectId("64c1b2222222222222222222"), id_cliente: ObjectId("64c1a1111111111111111112") }
]);
```
## // ====== PROYECTOS ======
/*
  Colección 'proyectos': Contiene los proyectos activos que se están desarrollando.
  Campos:
  - _id: ObjectId, identificador único del proyecto.
  - estado: String, estado actual del proyecto (ej. "En Progreso", "Finalizado").
  - id_usuario: ObjectId, referencia al usuario responsable del proyecto.
  - id_cliente: ObjectId, referencia al cliente del proyecto.
  - id_propuesta: ObjectId, referencia a la propuesta que originó el proyecto.
*/
``` js
db.proyectos.insertMany([
  { _id: ObjectId("64c1d4444444444444444441"), estado: "En Progreso", id_usuario: ObjectId("64c1b2222222222222222221"), id_cliente: ObjectId("64c1a1111111111111111111"), id_propuesta: ObjectId("64c1c3333333333333333331") },
  { _id: ObjectId("64c1d4444444444444444442"), estado: "Planeación", id_usuario: ObjectId("64c1b2222222222222222222"), id_cliente: ObjectId("64c1a1111111111111111112"), id_propuesta: ObjectId("64c1c3333333333333333332") }
]);
```
## // ==== CONTRATOS ======
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
``` js
db.contratos.insertMany([
  { _id: ObjectId("64c1e5555555555555555551"), id_proyecto: ObjectId("64c1d4444444444444444441"), fecha_inicio: ISODate("2025-01-01"), fecha_fin: ISODate("2025-06-01"), descripcion: "Contrato para desarrollo de sistema de ventas", estado: "Activo" },
  { _id: ObjectId("64c1e5555555555555555552"), id_proyecto: ObjectId("64c1d4444444444444444442"), fecha_inicio: ISODate("2025-02-01"), fecha_fin: ISODate("2025-07-01"), descripcion: "Contrato para app móvil de clientes", estado: "Activo" }
]);
```
## // === GESTION FINANCIERA =======
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

``` js

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
```

# Desarrollado Por: 

- Andrés David Reyes Espinel
- Vladímir Díaz Contreras
- Edgar Leonardo Acevedo Arteaga

