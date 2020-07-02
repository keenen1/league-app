import request from 'superagent'

const teamURL = 'http://localhost:3000/api/v1/teams'

export function getTeams () {
  return request
    .get(teamURL)
    .then(res => res.body)
}

export function retreiveTeam (team) {
  return request
    .post(teamURL)
    .send(team)
    .then(res => res.body)
}
