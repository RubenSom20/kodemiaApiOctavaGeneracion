const mongoose = require('mongoose')
const Schema = mongoose.Schema

const mentorsSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    min: 18,
    max: 100,
  },
  courses: {
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

module.exports = mongoose.model('mentors', mentorsSchema)
