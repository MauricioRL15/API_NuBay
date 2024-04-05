const express = require('express');
const sql = require('mssql');
const { conectarDB } = require('./db/connection');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); // Permitir acceso desde cualquier origen
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE'); // Métodos HTTP permitidos
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept'); // Encabezados permitidos
  next();
});

// Conectar a la base de datos
conectarDB();

// Antes de configurar las rutas
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Configurar rutas


// Después de configurar las rutas
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Algo salió mal!');
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});
