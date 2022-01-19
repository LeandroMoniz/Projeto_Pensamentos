const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('toughts2', 'root', 'y5^T8/%jJkws.g=', {
    host: 'localhost',
    dialect: 'mysql',
})

try {
    sequelize.authenticate()
    console.log('Conectamos com sucesso!')
} catch (err) {
    console.log(`Não foi possível conectar: ${err}`)
}

module.exports = sequelize