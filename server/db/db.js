const environment = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getLeagues,
  saveNewLeague,
  getTeams
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
