const express = require('express')
const app = express()

app.get('/user', (req, res) => {
  res.status(200).json({
    name: 'John',
    age: 30,
  })
})

module.exports = app
