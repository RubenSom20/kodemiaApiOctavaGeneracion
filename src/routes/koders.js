//se manda llamar la libreria
const express = require('express')
const userCasoDeUsos = require('../usecases/koders')
const koders = require('../models/koders')
// generamos un objeto tipo router funcion constructora en mayuscula (R)
const router = express.Router()

router.get('/', async (request, response) => {
  // try es para intentar una itercion y el catch por si existe un errror
  try {
    const koderData = await userCasoDeUsos.getAll()
    response.json({ koderData })
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
    //con esta funcion se accede al body (es una peticion)
    const newKoder = request.body
    const koderCreado = await userCasoDeUsos.createKoder(newKoder)
    response.json({ koderCreado })
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
    const deleteKoder = request.params.id
    const koderDelete = await userCasoDeUsos.findByIdAndDelete(deleteKoder)
    response.json({ koderDelete })
    //response.json({ koder: 'soy un delet' })
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
    const idKoder = request.params.id
    const upDataKoder = request.body
    const koderDataUpDate = await userCasoDeUsos.findByIdAndUpdate(
      idKoder,
      upDataKoder
    )
    response.json({ koderDataUpDate })
    //response.json({ koder: 'soy un pach' })
  } catch (error) {
    response.status(400)
    response.json({
      success: false,
      error: error.message,
    })
  }
})

module.exports = router
