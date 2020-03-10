const express = require('express')
const helmet = require('helmet')
const morgan = require('morgan')

const users = require('./users')

const app = express()
const port = 3000

app.use(helmet())
app.use(morgan('dev'))

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/api/users', (req, res, next) => {
  res.json(users)
  
  // Enforce a HTTP 500
  // res.status(500).send({ error: 'Some server error!' })
})

app.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})

app.use((error, req, res, next) => {
  const status = error.status || 500
  res.status(status)
  res.json({
    detail: {
      message: error.message,
    }
  })
})

app.listen(port, () => console.log(`API listening on port ${port}!`))
