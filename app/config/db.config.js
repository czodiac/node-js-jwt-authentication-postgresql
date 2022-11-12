module.exports.external = {
  HOST: "heffalump.db.elephantsql.com",
  USER: "qrwkctqr",
  PASSWORD: "DFJBdMZ_-M8BYNA47lLi3ldhtu2znQ76",
  DB: "qrwkctqr",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};

module.exports.localhost = {
  HOST: "localhost",
  USER: "postgres",
  PASSWORD: "123",
  DB: "TestDB",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};