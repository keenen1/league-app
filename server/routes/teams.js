const express = require('express')
const router = express.Router()

const db = require('../db/db')

// retreive all teams
router.get('/', (req, res) => {
  db.getTeams()
    .then(teams => {
      res.json(teams)
    })
    .catch(err => res.status(500).send(err.message))
})

// retreive all team players
router.get('/:teamId', (req, res) => {
  const { teamId } = req.params
  db.getTeamPlayers(teamId)
    .then(teams => {
      console.log('Router:', teams)
      res.json(teams)
    })
    .catch(err => res.status(500).send(err.message))
})

module.exports = router
