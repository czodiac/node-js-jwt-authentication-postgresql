module.exports = (sequelize, Sequelize) => {
  const CuteCountry = sequelize.define("cuteCountries", {
    name: {
      type: Sequelize.STRING
    }
  });
  return CuteCountry;
};