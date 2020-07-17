//Definicion del servidor server
// Mandando llamar a express / inportar
const express = require('express')
//instan objeto de express almacenar variable app
const app = express()
const kodersRouter = require('./routes/koders')
const mentorsRouter = require('./routes/mentors')

//esto es para configurar que nuestra api reciba archivos json parsear (convertir de json a objeto de js)
app.use(express.json())
//le vamos a indicar al servidor que existen otras rutas en este caso koders

app.use('/koders', kodersRouter)
app.use('/mentors', mentorsRouter)
//endpoit
app.get('/', (request, response) => {
  response.json({
    success: true,
    message: 'Kodemia APIv8',
  })
})


//Exportar para ser utilizada en otras partes del codigo
module.exports = app
