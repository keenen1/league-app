import React from 'react'
import { Link } from 'react-router-dom'

import { getLeagues } from '../api/api-leagues'

class Leagues extends React.Component {
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
        <ul className="league-ul">
          {this.state.leagues.map(league => {
            return <Link className="league-li" key={league.id} to={`/leagues/${league.name}`}>
              <li>
                {league.name}
              </li>
            </Link>
          })}
        </ul>
      </>
    )
  }
}

export default Leagues
