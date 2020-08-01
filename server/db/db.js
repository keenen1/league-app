const environment = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getLeagues,
  saveNewLeague,
  getTeams,
  getLeagueTeams,
  getPlayers,
  getTeamPlayers
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

function getLeagueTeams (leagueName, db = connection) {
  return db('teams')
    .join('leagues', 'leagues.id', 'teams.league_id')
    .where('leagues.name', leagueName)
    .select('leagues.name as leaguename', 'teams.id', 'teams.name as teamname')
}

function getPlayers (db = connection) {
  return db('players').select()
}

function getTeamPlayers (teamId, db = connection) {
  return db('players')
    .join('teams', 'teams.id', 'players.team_id')
    .where('teams.id', teamId)
    .select('players.id as id', 'teams.name as teamname', 'players.firstname', 'players.surname', 'players.number', 'players.isCaptain')
}
