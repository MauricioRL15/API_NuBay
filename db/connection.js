const sql = require('mssql');
const { obtenerConfiguracionDB } = require('../config/databaseConfig');

// Función para conectar a la base de datos utilizando la configuración
async function conectarDB() {
  try {
    const config = obtenerConfiguracionDB();
    await sql.connect(config);
    console.log('Conexión a la base de datos establecida');
  } catch (error) {
    console.error('Error al conectar a la base de datos:', error);
  }
}

module.exports = { conectarDB };