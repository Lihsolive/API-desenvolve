require("dotenv").config();

const express = require("express");

const routes = require("../src/routers/routes.js");

const port = parseInt(process.env.NODE_PORT, 10) || 3000;

const app = express();

// para usar o middleware express.json(). Sem ele, as requisições de post e put (que usam json) não funcionarão corretamente.
app.use(express.json());

// routes
app.use(routes);

// server initialization
app.listen(port, () => console.log(`Server running on port ${port}`));

module.exports = app