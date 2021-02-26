'strict'
const express = require('express')
const history = require('connect-history-api-fallback')
const serveStatic = require('serve-static')
const path = require('path')
const port = process.env.PORT || 5000

const app = express()

app.use(history())

app.use('/', serveStatic(path.join(__dirname + '/dist/')))

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/dist/index.html')
})

app.listen(port)

console.log('Server started ' + port)
