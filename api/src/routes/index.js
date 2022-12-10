const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const axios = require("axios");

const { Characters, Continents } = require("../db.js");

const { getAllCharacters } = require("../controllers/getAllCharacters.js");

const router = Router();

router.get("/characters", async (req, res, next) => {
  try {
    let allChar = await getAllCharacters();
    res.status(200).json(allChar);
  } catch (err) {
    console.log(err);
  }
});

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

module.exports = router;
