const mongoose = require('mongoose')
require('dotenv').config()
//variables constantes conectar BD
const MONGO_URL = process.env.MONGO_URL
function conectDataBase() {
  //retorna una promesa acciones asincronas
  return mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
}
//Exportar conexion como objeto
module.exports = { conectDataBase }
