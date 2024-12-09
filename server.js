const express = require('express');
const path = require('path');

const app = express();

// Configurar o middleware para servir arquivos estáticos
app.use('/web', express.static(path.join(__dirname, 'web')));

// Rota principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'web', 'index.html'));
});

// Inicializar o servidor
app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});
