// UsesCases caso de usos acciones que se van a realizar
//mandar a llamar el modelo el cual por ser modelo sera en mayusculas
const Koder = require('../models/koders')
const koders = require('../models/koders')
//crear funciones pequeñas
function getAll() {
  return Koder.find()
}

function createKoder(dataKoderObjet) {
  return Koder.create(dataKoderObjet)
}
function findByIdAndDelete(deleteKoderId) {
  return Koder.findByIdAndDelete(deleteKoderId)
}
function findByIdAndUpdate(idKoder, upDateKodersObject) {
  //new:true es una parametro que es un objeto para que te regrese el koder actualozado
  return Koder.findByIdAndUpdate(idKoder, upDateKodersObject, { new: true })
}
module.exports = {
  getAll,
  createKoder,
  findByIdAndDelete,
  findByIdAndUpdate,
}
