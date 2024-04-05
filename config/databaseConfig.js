// Función para obtener la configuración de la base de datos
function obtenerConfiguracionDB() {
    return {

      server: 'localhost',
      database: 'dDBFacturas',
      options: {
        trustedConnection: true // Usar si estás utilizando la autenticación de Windows
      }
    };
  }
  
module.exports = { obtenerConfiguracionDB };