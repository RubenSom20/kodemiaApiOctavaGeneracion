const Mentors = require('../models/mentors')

function getAll() {
  return Mentors.find()
}

function createMentors(dataMentorsObjet) {
  return Mentors.create(dataMentorsObjet)
}
function findByIdAndDelete(deleteMentorsId) {
  return Mentors.findByIdAndDelete(deleteMentorsId)
}
function findByIdAndUpdate(idMentors, upDateMentorsObject) {
  return Mentors.findByIdAndUpdate(idMentors, upDateMentorsObject, {
    new: true,
  })
}
module.exports = {
  getAll,
  createMentors,
  findByIdAndDelete,
  findByIdAndUpdate,
}
