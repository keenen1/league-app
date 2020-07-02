import request from 'superagent'

const leagueURL = 'http://localhost:3000/api/v1/leagues'

export function getLeagues () {
  return request
    .get(leagueURL)
    .then(res => {
      return res.body
    })
}

// export function retreiveLeague (league) {
//   return request
//     .post(leagueURL)
//     .send(league)
//     .then(res => res.body)
// }
