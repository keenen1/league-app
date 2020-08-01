import request from 'superagent'

const leagueURL = 'http://localhost:3000/api/v1/leagues'

export function getLeagues () {
  return request
    .get(leagueURL)
    .then(res => res.body)
}

export function getLeagueTeams (leagueName) {
  return request
    .get(leagueURL + '/' + leagueName)
    .then(res => res.body)
}
