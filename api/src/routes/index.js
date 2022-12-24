const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const { getAllCharacters } = require("../controllers/getAllCharacters.js");
const { Characters } = require("../db.js");
// const { createCharacter } = require("../controllers/createCharacter.js");
const { v4: uuidv4 } = require("uuid");

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

router.post("/characters", async (req, res) => {
  try {
    let id = uuidv4();
    let { firstName, lastName, fullName, title, imageUrl } = req.body;
    const char = await Characters.create({
      id,
      firstName,
      lastName,
      fullName,
      title,
      imageUrl,
    });
    res.status(200).send("new character created");
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
