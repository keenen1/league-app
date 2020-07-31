import React from 'react'
import { Link } from 'react-router-dom'

import { getTeams } from '../api/api-teams'

class Teams extends React.Component {
  state = {
    teams: []
  }

  componentDidMount () {
    getTeams()
      .then(teamsArr => {
        this.setState({
          teams: teamsArr
        })
      })
  }

  render () {
    return (
      <>
        <h1>Teams</h1>
        <ul className="team-ul">
          {this.state.teams.map(team => {
            return <Link className="team-li" to={`/teams/${team.id}`} key={team.id}>
              <li>
                {team.name}
              </li>
            </Link>
          })}
        </ul>
      </>
    )
  }
}

export default Teams
