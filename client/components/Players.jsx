import React from 'react'

import { getPlayers } from '../api/api-players'

class Players extends React.Component {
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
        <h2>PLAYERS</h2>
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
              {this.state.players.map(player => {
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

export default Players
