// js básico (antes do import/export por causa do sequelize)

module.exports = {
    dialect: 'postrgres',
    host: 'localhost',
    username: 'postgres',
    password: 'docker',
    database: 'gobarber',
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true,
    },
};
