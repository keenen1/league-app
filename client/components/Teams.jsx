import React from 'react'

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
        <ul>
          {this.state.teams.map(team => {
            return <li key={team.id}>
              {team.name}
            </li>
          })}
        </ul>
      </>
    )
  }
}

export default Teams
