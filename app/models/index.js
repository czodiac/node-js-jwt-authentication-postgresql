const config = require("../config/db.config.js");

const Sequelize = require("sequelize");

let sequelize = null;
if (process.env.DB == 'localhost') {
  sequelize = new Sequelize(
    config.localhost.DB,
    config.localhost.USER,
    config.localhost.PASSWORD,
    {
      host: config.localhost.HOST,
      dialect: config.localhost.dialect
    }
  );
} else {
  sequelize = new Sequelize(
    config.external.DB,
    config.external.USER,
    config.external.PASSWORD,
    {
      host: config.external.HOST,
      dialect: config.external.dialect
    }
  );
}


sequelize.authenticate().then(() => {
  console.log(`Postgres connected`)
}).catch((err) => {
  console.log('Postgres NOT connected: ' + err)
})

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("../models/user.model.js")(sequelize, Sequelize);
db.role = require("../models/role.model.js")(sequelize, Sequelize);

db.role.belongsToMany(db.user, {
  through: "user_roles",
  foreignKey: "roleId",
  otherKey: "userId"
});
db.user.belongsToMany(db.role, {
  through: "user_roles",
  foreignKey: "userId",
  otherKey: "roleId"
});

db.ROLES = ["user", "admin", "moderator"];

module.exports = db;
