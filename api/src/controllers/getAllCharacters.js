const { getApiInfo } = require("./getApiInfo");

const getAllCharacters = async () => {
  const apiInfo = await getApiInfo();
  return apiInfo;
};

module.exports = { getAllCharacters };
