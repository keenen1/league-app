import React from 'react'

import { getLeagues } from '../api/api-leagues'

const DisplayLeague = () => {
  const leagueArr = [getLeagues()]
  console.log(leagueArr)
  return (
    <>
      <h1>Leagues</h1>
      <ul>
        {leagueArr.map(league => {
          console.log(league)
          return <li key={league.id}>
            {league.name}
          </li>
        })}
      </ul>
    </>
  )
}

export default DisplayLeague
