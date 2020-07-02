import React from 'react'

import { getPlayers } from '../api/api-players'

class DisplayPlayers extends React.Component {
  state = {
    players: []
  }

  componentDidMount () {
    getPlayers()
      .then(playersArr => {
        this.setState({
          players: playersArr
        })
      })
  }

  render () {
    return (
      <>
        <h2>Players</h2>
        {/* <ul>
          {this.state.players.map(player => {
            return <li key={player.id}>
              {`Name: ${player.firstname} ${player.surname} Number: ${player.number}`}
              {player.isCaptain ? ` > Captain` : ''}
            </li>
          })}
        </ul> */}
        <table>
          <thead>
            <tr>
              <th>Player</th>
              <th>Number</th>
              <th>Captain</th>
            </tr>
          </thead>
          <tbody>
            {this.state.players.map(player => {
              return <tr key={player.id}>
                <td>{`${player.firstname} ${player.surname}`}</td>
                <td>{player.number}</td>
                <td>{player.isCaptain ? `Yes` : ``}</td>
              </tr>
            })}
          </tbody>
        </table>
      </>
    )
  }
}

export default DisplayPlayers
