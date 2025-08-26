const { mostrarMenu } = require('./views/usuariosview');
const conectarDB = require('./config/db');

(async () => {
  await conectarDB(); // conecta antes de iniciar
  mostrarMenu();      // arranca la vista
})();
