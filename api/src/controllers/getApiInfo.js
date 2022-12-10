const axios = require("axios");
require("dotenv").config();
const { API_URL } = process.env;

const getApiInfo = () => {
  const apiInfo = axios.get(API_URL).then((res) =>
    res.data.map((char) => {
      return {
        id: char.id,
        firstName: char.firstName,
        lastName: char.lastName,
        fullName: char.fullName,
        title: char.title,
        imageUrl: char.imageUrl,
      };
    })
  );
  return apiInfo;
};

module.exports = { getApiInfo };
