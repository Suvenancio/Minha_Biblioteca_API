const express = require('express');
const routes = require('./src/routes');

const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');

routes(app);
app.use(cors());

app.listen(port,() => console.log(`servidor rodando na porta ${port}`));

module.exports = app;