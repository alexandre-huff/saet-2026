const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('<h1>Minicurso K8s & Helm: Aplicação rodando no Docker!</h1>');
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
