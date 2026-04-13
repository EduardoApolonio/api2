const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const filmeRoutes = require('./src/routes/filmeRoutes');

const app = express();
app.use(express.json());

// Rotas
app.use('/api/filmes', filmeRoutes);

// Rota base
app.get('/', (req, res) => {
  res.json({ mensagem: 'API de Filmes funcionando!' });
});

// Conexão com MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('MongoDB conectado');
    app.listen(process.env.PORT, () => {
      console.log(`Servidor rodando na porta ${process.env.PORT}`);
    });
  })
  .catch((err) => console.error('Erro ao conectar:', err));

  