const express = require('express');
const routes = require('./routes');

// importando conexão com banco de dados
// require('./database');

const app = express();
const port = 3000;

app.use(express.json());
app.use(routes());

// Executando aplicação
app.listen(port, () => {
  console.log('listening on port ' + port);
});

