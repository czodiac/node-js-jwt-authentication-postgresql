const config = require("../config/db.config.js");
const Sequelize = require("sequelize");

// Connect to PostegreSQL DB
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

// Check if DB is connected.
sequelize.authenticate().then(() => {
  console.log(`Postgres connected`)
}).catch((err) => {
  console.log('Postgres NOT connected: ' + err)
})

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// For Cute Fishes
db.cuteUser = require("../models/cuteUser.model.js")(sequelize, Sequelize);
db.cuteCity = require("../models/cuteCity.model.js")(sequelize, Sequelize);
db.cuteCountry = require("../models/cuteCountry.model.js")(sequelize, Sequelize);
db.cuteState = require("../models/cuteState.model.js")(sequelize, Sequelize);
db.cuteRole = require("../models/cuteRole.model.js")(sequelize, Sequelize);
db.cuteUser.belongsTo(db.cuteRole, {
  foreignKey: "roleId",
});
db.cuteUser.belongsTo(db.cuteCity, {
  foreignKey: "cityId",
});
db.cuteUser.belongsTo(db.cuteState, {
  foreignKey: "stateId",
});
db.cuteUser.belongsTo(db.cuteCountry, {
  foreignKey: "countryId",
});
db.cuteState.belongsTo(db.cuteCountry, {
  foreignKey: "countryId",
});
db.cuteCity.belongsTo(db.cuteState, {
  foreignKey: "stateId",
});

// For KioStart
db.role = require("../models/role.model.js")(sequelize, Sequelize);
db.user = require("../models/user.model.js")(sequelize, Sequelize);
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