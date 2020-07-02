import React from 'react'

import { getLeagues } from '../api/api-leagues'

class DisplayLeagues extends React.Component {
  state = {
    leagues: []
  }

  componentDidMount () {
    getLeagues()
      .then(leaguesArr => {
        this.setState({
          leagues: leaguesArr
        })
      })
  }

  render () {
    return (
      <>
        <h1>Leagues</h1>
        <ul>
          {this.state.leagues.map(league => {
            return <li key={league.id}>
              {league.name}
            </li>
          })}
        </ul>
      </>
    )
  }
}

export default DisplayLeagues
