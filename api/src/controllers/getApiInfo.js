const axios = require("axios");

const getApiInfo = () => {
  const apiInfo = axios
    .get("https://thronesapi.com/api/v2/Characters")
    .then((res) =>
      res.data.map((char) => {
        return {
          id: char.id,
          firstName: char.firstName,
          lastName: char.lastName,
          fullName: char.fullName,
          title: char.title,
          family: char.family,
          imageUrl: char.imageUrl,
        };
      })
    );
  return apiInfo;
};

module.exports = { getApiInfo };
