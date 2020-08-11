import React from 'react'

class ScoreBoard extends React.Component {
  constructor () {
    super()
    this.state = {
      scoreA: 0,
      scoreB: 0,
      periods: ['1st', '2nd', '3rd', '4th', 'OT', '2OT', '3OT', '4OT'],
      toDisableBack: true,
      toDisableNext: false,
      currentPeriod: ''
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

  componentDidMount () {
    this.setState({
      currentPeriod: this.state.periods[0]
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
                <button onClick={this.changeScoreA.bind(this, -1)}>-1</button>
                <button onClick={this.changeScoreA.bind(this, -2)}>-2</button>
                <button onClick={this.changeScoreA.bind(this, -3)}>-3</button>
              </div>
              <div className="score-team">{this.state.scoreA}</div>
              <div className="add-buttons">
                <button onClick={this.changeScoreA.bind(this, 1)}>+1</button>
                <button onClick={this.changeScoreA.bind(this, 2)}>+2</button>
                <button onClick={this.changeScoreA.bind(this, 3)}>+3</button>
              </div>
            </div>
          </div>
          <div>
            <h1>Period</h1>
            <div className="period-container">
              <div className="period">{this.state.currentPeriod}</div>
              <div className="period-buttons">
                <button id="period-minus" disabled={this.state.toDisableBack
                  ? 1
                  : 0
                }>Back</button>
                <button id="period-plus" disabled={this.state.toDisableNext
                  ? 1
                  : 0
                }>Next</button>
              </div>
            </div>
          </div>
          <div>
            <h2>Team B</h2>
            <div className="team-a">
              <div className="minus-buttons">
                <button onClick={this.changeScoreB.bind(this, -1)}>-1</button>
                <button onClick={this.changeScoreB.bind(this, -2)}>-2</button>
                <button onClick={this.changeScoreB.bind(this, -3)}>-3</button>
              </div>
              <div className="score-team">{this.state.scoreB}</div>
              <div className="add-buttons">
                <button onClick={this.changeScoreB.bind(this, 1)}>+1</button>
                <button onClick={this.changeScoreB.bind(this, 2)}>+2</button>
                <button onClick={this.changeScoreB.bind(this, 3)}>+3</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ScoreBoard
