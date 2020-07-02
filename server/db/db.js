const environment = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getLeagues,
  saveNewLeague,
  getTeams,
  getPlayers
}

function getLeagues (db = connection) {
  return db('leagues').select()
}

function saveNewLeague (name, db = connection) {
  return db('leagues')
    .insert({
      name
    })
}

function getTeams (db = connection) {
  return db('teams').select()
}

function getPlayers (db = connection) {
  return db('players').select()
}
