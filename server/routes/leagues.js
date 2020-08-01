const express = require('express')
const router = express.Router()

const db = require('../db/db')

// GET all leagues
router.get('/', (req, res) => {
  db.getLeagues()
    .then(leagues => {
      res.json(leagues)
    })
    .catch(err => res.status(500).send(err.message))
})

// GET teams based on league name
router.get('/:name', (req, res) => {
  let { name } = req.params
  db.getLeagueTeams(name)
    .then(teams => res.json(teams))
    .catch(err => res.status(500).send(err.message))
})

// save new league to database
router.post('/', (req, res) => {
  db.saveNewLeague(req.body)
    .then(res.sendStatus(200))
    .catch(err => {
      res.status(500).send(err.message)
    })
})

module.exports = router
