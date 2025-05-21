const express = require('express');
const app = express();
const PORT = process.env.PORT || 8081;

// Middleware para parsear JSON
app.use(express.json());

// Importa las rutas desde la carpeta correcta
const chatRoutes = require('./api/routes/chatRoutes');

// Usa las rutas con un prefijo /api
app.use('/api', chatRoutes);

// Inicia el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
