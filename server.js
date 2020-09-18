const express = require('express')
const { join } = require('path')

const app = express()

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(join(__dirname, 'client', 'build')))
}

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(require('./routes'))


if (process.env.NODE_ENV === 'production') {
  app.get('/*', (req, res) => {
    res.sendFile(join(__dirname, 'client', 'build', 'index.html'))
  })
}

require('./db')
  .then(() => app.listen(process.env.PORT || 3001))
  .catch(err => console.log(err))

  //run the npm if-env AND concurrently --save-dev
  //then change the scripts in package.json(backend)
  // "scripts": {
  //   "start": "if-env NODE_ENV=production && npm run start:prod || npm run start:dev",
  //   "start:prod": "node server.js",
  //   "start:dev": "concurrently \"nodemon --ignore 'client/*'\" \"npm run client\"",
  //   "client": "cd client && npm run start",
  //   "install": "cd client && npm install",
  //   "build": "cd client && npm run build",
  //   "heroku-postbuild": "npm run build"
  // }