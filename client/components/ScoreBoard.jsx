import React from 'react'

class ScoreBoard extends React.Component {
  constructor () {
    super()
    this.state = {
      scoreA: 0,
      scoreB: 0
    }
  }

  changeScoreA (num) {
    this.setState({
      scoreA: this.state.scoreA + num
    })
  }

  changeScoreB (num) {
    this.setState({
      scoreB: this.state.scoreB + num
    })
  }

  render () {
    return (
      <div className="scoreboard">
        <h1>ScoreBoard</h1>
        <div className="score-container">
          <div>
            <h2>Team A</h2>
            <div className="team-a">
              <div className="minus-buttons">
                <button href="#" onClick={this.changeScoreA.bind(this, -1)}>-1</button>
                <button href="#" onClick={this.changeScoreA.bind(this, -2)}>-2</button>
                <button href="#" onClick={this.changeScoreA.bind(this, -3)}>-3</button>
              </div>
              <div className="score-team">{this.state.scoreA}</div>
              <div className="add-buttons">
                <button href="#" onClick={this.changeScoreA.bind(this, 1)}>+1</button>
                <button href="#" onClick={this.changeScoreA.bind(this, 2)}>+2</button>
                <button href="#" onClick={this.changeScoreA.bind(this, 3)}>+3</button>
              </div>
            </div>
          </div>
          <div>
            <h2>Team B</h2>
            <div className="team-a">
              <div className="minus-buttons">
                <button href="#" onClick={this.changeScoreB.bind(this, -1)}>-1</button>
                <button href="#" onClick={this.changeScoreB.bind(this, -2)}>-2</button>
                <button href="#" onClick={this.changeScoreB.bind(this, -3)}>-3</button>
              </div>
              <div className="score-team">{this.state.scoreB}</div>
              <div className="add-buttons">
                <button href="#" onClick={this.changeScoreB.bind(this, 1)}>+1</button>
                <button href="#" onClick={this.changeScoreB.bind(this, 2)}>+2</button>
                <button href="#" onClick={this.changeScoreB.bind(this, 3)}>+3</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ScoreBoard
