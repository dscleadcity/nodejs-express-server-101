const express = require('express')

const app = express()

const port = 9000

app.use('/', (req, res) => {
  res.send('<h1>Hello World</h1>')
})

app.listen(port, () => console.log(`Server listening on ${port}`))
