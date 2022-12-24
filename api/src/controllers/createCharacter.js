const { Characters } = require("../models/Characters");
const { v4: uuidv4 } = require("uuid");
require("dotenv").config();

const axios = require("axios");

const addCharacter = async (req, res, next) => {
  const id = uuidv4();
  let { firstName, lastName, fullName, title, imageUrl } = req.body;

  const characterCreated = await Characters.create({
    id,
    firstName,
    lastName,
    fullName,
    title,
    imageUrl,
  });
};

module.exports = { addCharacter };
