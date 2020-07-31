import React from 'react'
import { Link } from 'react-router-dom'

import { getTeamPlayers } from '../api/api-teams'

class TeamPlayers extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      teamname: '',
      teamId: this.props.match.params.id,
      teamPlayers: []
    }
  }

  componentDidMount () {
    getTeamPlayers(this.state.teamId)
      .then(playersArr => {
        this.setState({
          teamname: playersArr[0].teamname,
          teamPlayers: playersArr
        })
      })
  }

  render () {
    return (
      <>
        <Link className="tp-goback" to="/teams">All Teams</Link>
        <h1>{this.state.teamname}</h1>
        <div className="table-div">
          <table>
            <thead>
              <tr>
                <th>Number</th>
                <th>Player</th>
                <th>Captain</th>
              </tr>
            </thead>
            <tbody>
              {this.state.teamPlayers.map(player => {
                return <tr key={player.id}>
                  <td>{player.number}</td>
                  <td className="td-name">{`${player.firstname} ${player.surname}`}</td>
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
