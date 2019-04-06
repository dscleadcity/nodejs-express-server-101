const path = require('path')

const express = require('express')

const app = express()

const port = 9000

// Static files Middleware
app.use('/static', express.static(path.join(__dirname, 'public')))

app.use('/', (req, res) => {
  res.send('<h1><em>Hello</em> World</h1>')
})

app.listen(port, () => console.log(`Server listening on ${port}`))
