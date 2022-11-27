module.exports = (sequelize, Sequelize) => {
  const CuteCity = sequelize.define("cuteCities", {
    name: {
      type: Sequelize.STRING
    }
  });
  return CuteCity;
};