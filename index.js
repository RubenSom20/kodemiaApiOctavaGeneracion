//importar de server
const app = require('./src/server')
//importar la funcion para conectarnos a la BD
const DB = require('./src/lib/db')
//ejecutar a la funcion para conectarnos a la BD
DB.conectDataBase()
  .then(() => {
    console.log('Then se va a ejecutar si la promesa se ejecuto bien ')
    //Funcion anonima, callback
    app.listen(8080, () => {
      console.log('Server corriendo!!!')
    })
  })
  .catch(error => {
    console.log('error', error)
  })
