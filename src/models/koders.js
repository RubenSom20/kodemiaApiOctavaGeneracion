//estamos llamando a la libreria
const mongoose = require('mongoose')
const Schema = mongoose.Schema
//generar el esquemaque tiene un koder (propiedades)
const koderSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    min: 18,
    max: 100,
  },
  generacion: {
    type: String,
    required: true,
  },
  pasword: {
    type: String,
    required: true,
  },
  mail: {
    type: String,
    required: true,
  },
})
// exportamos el modelo
module.exports = mongoose.model('Koder', koderSchema)
