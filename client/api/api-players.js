import request from 'superagent'

const playersURL = 'http://localhost:3000/api/v1/players'

export function getPlayers () {
  return request
    .get(playersURL)
    .then(res => {
      return res.body
    })
}
