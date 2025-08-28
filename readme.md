<div align="center">

# PROYECTO NODE.JS

&nbsp;  
&nbsp;  
&nbsp;  
&nbsp;  
&nbsp;  


**Vladmir Diaz Contreras** <br> 
**Andrés David Reyes Espinel**<br>
**Edgar Leonardo Acevedo Arteaga**<br>




&nbsp;  
&nbsp;  
 
**GRUPO S1 CAJASAN**  
&nbsp;  
&nbsp;  
&nbsp;  

*DOCENTE**
**INGENIERO PEDRO FELIPE GÓMEZ BONILLA**  

&nbsp;  
&nbsp;  
&nbsp;  

**CAMPUSLANDS**  
**Cajasan**  
**RUTA NODEJS**  
**BUCARAMANGA**  
**CAJASAN**
**2025**
<br>
</div>
<br>
<br>
<br>
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
## Tabla de Contenidos

- [Introducción](#introducción)
- [Caso de Estudio](#caso-de-estudio)
- [Planificación](#planificación)
- [Construcción del Modelo Conceptual](#construcción-del-modelo-conceptual)
  - [Descripción](#descripción)
  - [Gráfica](#gráfica)
  - [Descripción Técnica](#descripción-técnica)
- [Construcción del Modelo Lógico](#construcción-del-modelo-lógico)
  - [Descripción](#descripción-1)
  - [Gráfica](#gráfica-1)
  - [Descripción Técnica](#descripción-técnica-1)
- [Normalización del Modelo Lógico](#normalización-del-modelo-lógico)
  - [Primera Forma Normal (1FN)](#primera-forma-normal-1fn)
    - [Descripción](#descripción-2)
    - [Gráfica](#gráfica-2)
    - [Descripción Técnica](#descripción-técnica-2)
  - [Segunda Forma Normal (2FN)](#segunda-forma-normal-2fn)
    - [Descripción](#descripción-3)
    - [Gráfica](#gráfica-3)
    - [Descripción Técnica](#descripción-técnica-3)
  - [Tercera Forma Normal (3FN)](#tercera-forma-normal-3fn)
    - [Descripción](#descripción-4)
    - [Gráfica](#gráfica-4)
    - [Descripción Técnica](#descripción-técnica-4)
- [Construcción del Modelo Físico](#construcción-del-modelo-físico)
  - [Descripción](#descripción-5)
  - [Código](#código)
  - [Descripción Técnica](#descripción-técnica-5)
- [Diagrama E-R](#diagrama-e-r)
  - [Descripción](#descripción-6)
  - [Gráfica](#gráfica-5)
  - [Descripción Técnica](#descripción-técnica-6)
- [Tablas](#tablas)
  - [Descripción](#descripción-7)
  - [Gráfica](#gráfica-6)
  - [Descripción Técnica](#descripción-técnica-7)
- [Relaciones entre Tablas](#relaciones-entre-tablas)
  - [Descripción](#descripción-8)
  - [Gráfica](#gráfica-7)
  - [Descripción Técnica](#descripción-técnica-8)
- [Inserción de Datos](#inserción-de-datos)
  - [Descripción](#descripción-9)
  - [Gráfica](#gráfica-8)
  - [Descripción Técnica](#descripción-técnica-9)
- [Referencias](#referencias)

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
# Introducción

La gestión eficiente de información es esencial para empresas y profesionales freelance que manejan múltiples proyectos y clientes de forma simultánea. Tradicionalmente, muchas de estas organizaciones dependen de hojas de cálculo y documentos dispersos, lo que conlleva problemas como pérdida de datos, duplicidad de registros y dificultades para el seguimiento integral de los proyectos.

En respuesta a esta necesidad, el presente proyecto propone el desarrollo de una aplicación de línea de comandos (CLI) construida totalmente en Node.js. Esta herramienta está diseñada para centralizar y automatizar la gestión del portafolio profesional de freelancers, permitiendo controlar y organizar clientes, propuestas, contratos, proyectos, entregables y finanzas desde un único sistema.

La aplicación hace uso de tecnologías y metodologías modernas, como la programación orientada a objetos, principios SOLID, patrones de diseño y persistencia segura de datos con MongoDB. Así, ofrece una solución robusta, escalable y adaptada a las demandas reales del entorno freelance, optimizando los procesos internos y elevando la calidad de la gestión profesional.

# Caso de Estudio

La empresa de freelancers gestiona numerosos proyectos para diferentes clientes. Tradicionalmente, la administración de sus actividades se basaba en hojas de cálculo y documentos digitales almacenados en ubicaciones diversas. Este método resultó en múltiples problemas críticos: pérdida frecuente de información, duplicidad de datos, dificultad para mantener actualizados los registros y poco control sobre el estado de los contratos, entregables y finanzas.
A raíz de esta problemática, se evidenció la necesidad de una herramienta centralizada que permitiera automatizar y sistematizar la gestión de su portafolio profesional. El objetivo es evitar los errores del manejo manual de información y mejorar la eficiencia organizativa, permitiendo a los freelancers dedicar más tiempo a sus proyectos y menos a tareas administrativas.

En este contexto, se plantea el desarrollo de una aplicación de línea de comandos (CLI) utilizando Node.js, que permita a la empresa registrar, consultar, modificar y controlar toda la información relevante de su operación: clientes, propuestas, proyectos, contratos, entregables y aspectos financieros. De este modo, se busca transformar el proceso de gestión tradicional en un flujo moderno, confiable y alineado con las mejores prácticas tecnológicas actuales.


<h2 id="construcción-del-modelo-conceptual">Construcción del Modelo Conceptual</h2>

<h3 id="descripción">Descripción</h3>

<h4>Entidades y atributos principales:</h4>

<ol>
  <li><strong>Tabla Cliente</strong>
    <ul>
      <li><code>idCliente</code></li>
      <li><code>nombre</code></li>
      <li><code>Correo</code></li>
    </ul>
    <p><strong>Descripción:</strong> Almacena la información de los clientes registrados en el sistema</p>
  </li>

  <li><strong>Tabla Propuesta</strong>
    <ul>
      <li><code>idPropuesta</code></li>
      <li><code>estado</code></li>
      <li><code>idCliente</code></li>
    </ul>
       <p><strong>Descripción:</strong> Contiene las propuestas asociadas al cliente</p>
  </li>

  <li><strong>Tabla de Proyecto</strong>
    <ul>
      <li><code>idProyecto</code></li>
      <li><code>estado</code></li>
      <li><code>idCliente</code></li>
      <li><code>idPropuesta</code></li>
    </ul> 
   <p><strong>Descripción:</strong> Contiene las propuestas asociadas a un cliente</p>
  </li>

  <li><strong>Tabla de Usuario</strong>
    <ul>
      <li><code>idUsuario</code></li>
      <li><code>nombre</code></li>
      <li><code>correo</code></li>
    </ul>
    <p><strong>Descripción:</strong> Registra los datos de usuarios que interactúan en el sistema (gestores, administradores, etc.).</p>
  </li>

  <li><strong>Tabla Administrativa</strong>
    <ul>
      <li><code>idAdministratio</code></li>
      <li><code>nombre</code></li>
      <li><code>correo</code></li>
      <li><code>idProyecto</code></li>
    </ul>
    <p><strong>Descripción:</strong> Contiene a los usuarios con rol administrativo vinculados directamente a proyectos.</p>
  </li>

   <li><strong>Tabla Grupo</strong>
    <ul>
      <li><code>idGrupo</code></li>
      <li><code>descripcion</code></li>
      <li><code>idUsuario</code></li>
    </ul>
    <p><strong>Descripción:</strong> Define grupos de trabajo donde participan distintos usuarios.</p>
  </li>

   <li><strong>Tabla Gestion financiera </strong>
    <ul>
      <li><code>idFinanza</code></li>
      <li><code>nombre</code></li>
      <li><code>correo</code></li>
      <li><code>idUsuario</code></li>
    </ul>
    <p><strong>Descripción:</strong> Registra los procesos financieros gestionados por usuarios del sistema  </p>
  </li>

   <li><strong>Tabla Gestion de Pagos</strong>
    <ul>
      <li><code>idPago</code></li>
      <li><code>descripcion</code></li>
      <li><code>idUsuarios</code></li>
    </ul>
    <p><strong>Descripción:Almacena los pagos realizados dentro del sistema </strong> </p>
  </li>
</ol>
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

<h3 id="gráfica">Gráfica</h3>

<div align="center">
  <img src="./img/DiagramaModeloConseptual.png" alt="Modelo Conceptual" width="800px">
  <br><br>
  <a href="https://drive.google.com/file/d/1TrpyUwY_rDEoA1gYqghtMEs9JYpaQpoM/view?usp=sharing" target="_blank"> 🔗 Ver en Draw.io</a>
</div>

<h3 id="descripción-técnica">Descripción Técnica</h3>

<p>
  El modelo conceptual del Proyecto node.js se define a través de entidades clave y sus relaciones, sin tener en cuenta el almacenamiento físico.
  Las principales entidades son: <strong>Clientes</strong>, <strong>Propuestas</strong>, <strong>Proyecto</strong>, <strong>Usuarios</strong>,
  <strong>Administrativo</strong>, <strong>Grupo</strong>, <strong>Financiera</strong> y <strong>Pagos</strong>..
</p>

  Este modelo permite visualizar un sistema completo, distribuido en diferentes capas administrativas,
  con relaciones estructuradas entre los actores del sistema.
</p>


<h2 id="construcción-del-modelo-lógico">Construcción del Modelo Lógico</h2>

<h3 id="descripción-1">Descripción</h3>

<p>
  El modelo entidad-relación gestiona clientes, propuestas y proyectos, vinculando usuarios y administrativos en grupos, con soporte para finanzas y pagos. Está diseñado en un enfoque NoSQL, lo que le da mayor flexibilidad para manejar estructuras de datos dinámicas. Las relaciones entre entidades se plantean de forma lógica, priorizando la escalabilidad y la consistencia de la información.

De esta manera, el modelo asegura un control eficiente de los procesos clave del sistema sin depender de esquemas rígidos.

<h3 id="gráfica-1">Gráfica</h3>

<div align="center">
  <img src="./img/DiagramaMermaid.png" alt="Modelo Conceptual" width="800px">
  <br><br>
  <a href="https://mermaid.live/edit#pako:eNqlVttuozAQ_RXk56RK7w1viLBbpAQqSPdhFSlyYUKsBRsZU22b5N_XJtwKpJvd8hTbx2cuZ8aTHQpYCEhHwGcERxwnK6rJb2E7vjF_nmn7_XjMdpr15Gu6xiHKYzyMeHT9J3tpzCUsy1PgrySTyCNW3S5hT4ZpW87SkjC8ITEp2ertAxuP93vt0faXrmcba3NuO7ZpSLggQGEALUlNaVgRRkDD2mjtUGXZ8nzXKRyEJI0BD8NMY6G4AkZbBrughTWzTVeZzEhETzD5lvfDNm0FYxsOAVSe1Z502QgN4vwNhlGW883yFpb3AVhqcSSoIiizofwPYQgxkF3IAk5eBtFLz1gaC5Vwt6iBAESjbO1UZfzZnhmzIxDH5L1GFl4pkFTXdB3_ea5cUMAM1iV2DQPgR9dTDrIg5xzWDV-LoyqapgRlAQqpXtC60Au69HhmG98d118eJejofuLOx5R01GgfthU2FiU-bzqjSlcZa6s7QsJJRELWBNAm2R231JcJTmikUZa8cOhtpxwyoAIHhNHeoQw2kIe8dXqoi7RypW-KhH-1HmIBGpW8iUymYD28jA6CAatl5f2XzXIbshQCIuspxGGHvanWrxgQOaesw1wU7OekRUo2EGxxD5YwQV57lK0C_5yZUKHRPAHez3NKsi5v3SVfycEp_dRL_8-8jfrVTNmdh--157kKrLF6IHKOO4Ttt6DPFRaPZDoQdrvlB3ygIQmKHoOsK3LZ__1LgqR9OdlLJifrMFU9L76iK2dxh7aeYmdqUszPs1yATOCQnS7jVsV6Q5RbxvGaUCKzMXy2IZVOaIQiTkKkC57DCEkbCVZLVLCukNhCAiuky58h5r9WaEXVnRTTn4wl1TXO8miL9A2OM7nKU1VP5b-mGqJGLjdZTgXSr-4KCqTv0G-5epheXF9eTic3l5PpZDpCb2rv4ub6_ubh9vp2cjW9u7q7P4zQe2FycvFwf3v4A41k2uo" target="_blank">🔗 Ver en Draw.io</a>
</div>





<h3 id="descripción-técnica-1">Descripción Técnica</h3>

<p>
  El modelo lógico general del sistema hospitalario define múltiples colecciones interrelacionadas en una base de datos MongoDB,
  representadas por entidades clave.
</p>

<p>
  La colección <strong>hospitales</strong> contiene identificadores únicos (<code>_id</code>), junto con datos como <code>nombre</code>, <code>direccion</code>, <code>telefono</code>
  y una lista de <code>areas</code> que representan las unidades médicas disponibles.
</p>

<p>
  La colección <strong>medicos</strong> incluye su propio <code>_id</code>, <code>nombre</code>, <code>hospitalId</code> (como referencia lógica al hospital donde labora),
  <code>area</code>, <code>especialidad</code>, <code>registro_medico</code> y un arreglo de <code>obligaciones</code>.
</p>

<p>
  De forma similar, la colección <strong>administrativos</strong> almacena funcionarios vinculados a un hospital mediante el campo <code>hospitalId</code>,
  con sus respectivos <code>cargos</code> y <code>obligaciones</code>.
</p>

<p>
  Por otro lado, la colección <strong>pacientes</strong> incluye campos como <code>_id</code>, <code>nombre</code>, <code>tipo_documento</code>,
  <code>numero_documento</code>, <code>fecha_nacimiento</code>, <code>direccion</code>, <code>telefono</code>,
  el identificador de su EPS (<code>epsId</code>), un arreglo de <code>obligaciones</code>,
  y una subestructura llamada <code>historia_clinica</code>, que es una lista de objetos con los campos <code>fecha</code>, <code>motivo</code>,
  <code>diagnostico</code>, <code>medicoId</code> (como referencia al médico tratante) y <code>tratamiento</code>.
</p>

<p>
  Finalmente, la colección <strong>eps</strong> está compuesta por <code>_id</code>, <code>nombre</code>,
  una lista de <code>responsabilidades</code> y un subdocumento embebido <strong>Director_EPS</strong>,
  que a su vez incluye un <code>_id</code>, <code>nombre</code>, <code>tipo_de_usuario</code> y sus <code>obligaciones</code>.
</p>

<p>
  Las relaciones entre entidades se manejan mediante referencias UUID, sin cambiar la estructura original del JSON,
  permitiendo una integración lógica limpia y flexible entre hospitales, personal, pacientes y entes externos como las EPS.
</p>


------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
# :fire: Proyecto de Node JS Vladimir Diaz - Andres Espinel - Edgar Acevedo :fire:

# :raised_hand: Herramienta de Gestion aplicado en el Proyecto :raised_hand:
Link: 	:cloud:
https://diazc04080910-1755863033586.atlassian.net/jira/software/projects/SCRUM/boards/1?atlOrigin=eyJpIjoiMjI3NjhmNGNjYTdjNDA3ZGJjODQ4MzZlNTRiYmIwMDgiLCJwIjoiaiJ9

Nota: Con la herraminta Jira se crea un desglose detallado de las actividades a realizar enmarcando un trabajo ordenado y estructurado para que de esa forma se logre el objetivo

# :raised_hand: Product Backlog :raised_hand:
Link: 	:cloud:
https://docs.google.com/document/d/1HU8xuiVEsxjC_8uNe1Kb4n2Fv1vZDI2J_JBolTeEdq8/edit?usp=sharing 

Nota: Aca se refleja el informe de casos de usos o requermientos en un marco metodologico aplicando SCRUM

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
# :runner: Desarrollo de una App en comando de Linea :runner:

La gestión eficiente de información es esencial para empresas y profesionales freelance que manejan múltiples proyectos y clientes de forma simultánea. Tradicionalmente, muchas de estas organizaciones dependen de hojas de cálculo y documentos dispersos, lo que conlleva problemas como pérdida de datos, duplicidad de registros y dificultades para el seguimiento integral de los proyectos.

En respuesta a esta necesidad, el presente proyecto propone el desarrollo de una aplicación de línea de comandos (CLI) construida totalmente en Node.js. Esta herramienta está diseñada para centralizar y automatizar la gestión del portafolio profesional de freelancers, permitiendo controlar y organizar clientes, propuestas, contratos, proyectos, entregables y finanzas desde un único sistema.

La aplicación hace uso de tecnologías y metodologías modernas, como la programación orientada a objetos, principios SOLID, patrones de diseño y persistencia segura de datos con MongoDB. Así, ofrece una solución robusta, escalable y adaptada a las demandas reales del entorno freelance, optimizando los procesos internos y elevando la calidad de la gestión profesional.

# 	:family: Modelo Entidad - Relacioón 	:family: 

El modelo entidad-relación gestiona clientes, propuestas y proyectos, vinculando usuarios y administrativos en grupos, con soporte para finanzas y pagos. Está diseñado en un enfoque NoSQL, lo que le da mayor flexibilidad para manejar estructuras de datos dinámicas. Las relaciones entre entidades se plantean de forma lógica, priorizando la escalabilidad y la consistencia de la información.

# 	:cop: Caso de Estudio	:cop:

La empresa de freelancers gestiona numerosos proyectos para diferentes clientes. Tradicionalmente, la administración de sus actividades se basaba en hojas de cálculo y documentos digitales almacenados en ubicaciones diversas. Este método resultó en múltiples problemas críticos: pérdida frecuente de información, duplicidad de datos, dificultad para mantener actualizados los registros y poco control sobre el estado de los contratos, entregables y finanzas.

A raíz de esta problemática, se evidenció la necesidad de una herramienta centralizada que permitiera automatizar y sistematizar la gestión de su portafolio profesional. El objetivo es evitar los errores del manejo manual de información y mejorar la eficiencia organizativa, permitiendo a los freelancers dedicar más tiempo a sus proyectos y menos a tareas administrativas.

En este contexto, se plantea el desarrollo de una aplicación de línea de comandos (CLI) utilizando Node.js, que permita a la empresa registrar, consultar, modificar y controlar toda la información relevante de su operación: clientes, propuestas, proyectos, contratos, entregables y aspectos financieros. De este modo, se busca transformar el proceso de gestión tradicional en un flujo moderno, confiable y alineado con las mejores prácticas tecnológicas actuales.



-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
# :collision: ===== DOCUMENTACIÓN DEL MODELO DE DATOS EN MONGODB ========= :collision:

/*
  Este conjunto de colecciones representa un sistema de gestión de proyectos.
  Las relaciones entre las colecciones se manejan a través de referencias de ObjectId,
  que vinculan documentos de una colección con documentos de otra.
*/

## :construction_worker:  ===== CLIENTES ==== :construction_worker:
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

## :man: ====== USUARIOS ========== 	:man:

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

## :hourglass: ===== PROPUESTAS ========= :hourglass:
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
## :bar_chart: ====== PROYECTOS ====== :bar_chart:
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
##	:scroll: ==== CONTRATOS ====== 	:scroll:
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
## :chart_with_upwards_trend: === GESTION FINANCIERA ======= :chart_with_upwards_trend:
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

# Desarrollado Por: :trollface:  

- Andrés David Reyes Espinel
- Vladímir Díaz Contreras
- Edgar Leonardo Acevedo Arteaga

