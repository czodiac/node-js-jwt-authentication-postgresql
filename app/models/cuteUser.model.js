module.exports = (sequelize, Sequelize) => {
    const CuteUser = sequelize.define("cuteUsers", {
        email: {
            type: Sequelize.STRING,
            primaryKey: true
        },
        password: {
            type: Sequelize.STRING
        },
        isMale: {
            type: Sequelize.BOOLEAN
        }
    });
  
    return CuteUser;
};  