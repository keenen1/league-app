import React from 'react'

import { getTeamPlayers } from '../api/api-teams'

class TeamPlayers extends React.Component {
  // constructor (props) {
  //   super(props)
  // }
  state = {
    teamname: '',
    teamPlayers: []
  }

  componentDidMount () {
    getTeamPlayers(1)
      .then(teamsArr => {
        this.setState({
          teamname: teamsArr[0].teamname,
          teamPlayers: teamsArr
        })
      })
  }

  render () {
    return (
      <>
        <h1>{this.state.teamname}</h1>
        <div className="table-div">
          <table>
            <thead>
              <tr>
                <th>Player</th>
                <th>Number</th>
                <th>Captain</th>
              </tr>
            </thead>
            <tbody>
              {this.state.teamPlayers.map(player => {
                return <tr key={player.id}>
                  <td className="td-name">{`${player.firstname} ${player.surname}`}</td>
                  <td>{player.number}</td>
                  <td>{player.isCaptain ? `Yes` : ``}</td>
                </tr>
              })}
            </tbody>
          </table>
        </div>
      </>
    )
  }
}

export default TeamPlayers
