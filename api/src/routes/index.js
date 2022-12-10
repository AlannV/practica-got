const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const { getAllCharacters } = require("../controllers/getAllCharacters.js");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get("/characters", async (req, res, next) => {
  try {
    let allChar = await getAllCharacters();
    res.status(200).json(allChar);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
