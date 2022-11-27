module.exports = (sequelize, Sequelize) => {
  const CuteState = sequelize.define("cuteStates", {
    name: {
      type: Sequelize.STRING
    }
  });
  return CuteState;
};