const express = require('express');
const routes = require('./src/routes')

const app = express();
const port = 5000;


routes(app)

app.listen(port,() => console.log(`servidor rodando na porta ${port}`))

module.exports = app;