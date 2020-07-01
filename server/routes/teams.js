const express = require('express')
const router = express.Router()

const db = require('../db/db')

// retreive all teams
router.get('/', (req, res) => {
  db.getTeams()
    .then(teams => {
      res.send(teams)
    })
    .catch(err => res.status(500).send(err.message))
})
