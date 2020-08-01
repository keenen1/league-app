import React from 'react'
import { Link } from 'react-router-dom'

import { getLeagueTeams } from '../api/api-leagues'

class Teams extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      league: this.props.match.params.id,
      teams: []
    }
  }

  componentDidMount () {
    getLeagueTeams(this.state.league)
      .then(teamsArr => {
        this.setState({
          teams: teamsArr
        })
      })
  }

  render () {
    return (
      <>
        <Link className="tp-goback" to="/leagues">All Leagues</Link>
        <h1>{this.state.league}</h1>
        <ul className="team-ul">
          {this.state.teams.map(team => {
            return <Link className="team-li" to={`/teams/${team.id}`} key={team.id}>
              <li>
                {team.teamname}
              </li>
            </Link>
          })}
        </ul>
      </>
    )
  }
}

export default Teams
