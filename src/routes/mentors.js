const express = require('express')
const userCasoDeUsos = require('../usecases/mentors')
const mentors = require('../models/mentors')

const router = express.Router()

router.get('/', async (request, response) => {
  try {
    const mentorsData = await userCasoDeUsos.getAll()
    response.json({ mentorsData })
  } catch (error) {
    response.status(400)
    response.json({
      success: false,
      error: error.message,
    })
  }
})
router.post('/', async (request, response) => {
  try {
    const newMentors = request.body
    const mentorsCreado = await userCasoDeUsos.createMentors(newMentors)
    response.json({ mentorsCreado })
  } catch (error) {
    response.status(400)
    response.json({
      success: false,
      error: error.message,
    })
  }
})
router.delete('/:id', async (request, response) => {
  try {
    const deleteMentors = request.params.id
    const mentorsDelete = await userCasoDeUsos.findByIdAndDelete(deleteMentors)
    response.json({ mentorsDelete })
  } catch (error) {
    response.status(400)
    response.json({
      success: false,
      error: error.message,
    })
  }
})
router.patch('/:id', async (request, response) => {
  try {
    const idMentors = request.params.id
    const upDataMentors = request.body
    const mentorsDataUpDate = await userCasoDeUsos.findByIdAndUpdate(
      idMentors,
      upDataMentors
    )
    response.json({ mentorsDataUpDate })
  } catch (error) {
    response.status(400)
    response.json({
      success: false,
      error: error.message,
    })
  }
})

module.exports = router
