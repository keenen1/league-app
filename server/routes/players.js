const express = require('express')
const router = express.Router()

const db = require('../db/db')

// retreive all teams
router.get('/', (req, res) => {
  db.getPlayers()
    .then(players => {
      res.json(players)
    })
    .catch(err => res.status(500).send(err.message))
})

module.exports = router
