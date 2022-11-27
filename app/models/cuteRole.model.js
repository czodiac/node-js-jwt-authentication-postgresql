module.exports = (sequelize, Sequelize) => {
  const CuteRole = sequelize.define("cuteRoles", {
    name: {
      type: Sequelize.STRING
    }
  });
 
  return CuteRole;
};