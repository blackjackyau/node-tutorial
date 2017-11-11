const express = require('express')
const app = express()

// seems like filter in servlet.

app.use((request, response, next) => {
  console.log("middleware 1")
  console.log(request.headers)
  next()
})

app.use((request, response, next) => {
  console.log("middleware 2")
  request.chance = Math.random()
  next()
})

app.get('/', (request, response) => {
  console.log("final route")
  response.json({
    chance: request.chance
  })
})

app.get('/error', (request, response) => {
  console.log("error route")
  throw new Error('simulated error')
})

app.use((err, request, response, next) => {
  console.log("middleware - error")
  // log the error, for now just console.log
  console.log(err)
  response.status(500).send('Something broke!')
})

app.listen(3000)