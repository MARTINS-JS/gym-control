const express = require('express')
const routes = express.Router()

routes.get('/', function(request, response) {
  return response.send('LaunchBase!')
})

module.exports = routes
