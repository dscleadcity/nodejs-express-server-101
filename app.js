const path = require('path')

const express = require('express')

const app = express()

const port = 9000

// Static files Middleware
app.use('/', express.static(path.join(__dirname, 'public')))

app.use('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'views', 'home.html')
)})

app.listen(port, () => console.log(`Server listening on ${port}`))
