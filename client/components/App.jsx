import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import Start from './Start'
import Login from './Login'
import SignUp from './Signup'
import CreateTeam from './CreateTeam'
import Leagues from './Leagues'
import Teams from './Teams'
import Players from './Players'
import TeamPlayers from './TeamPlayers'
import ScoreBoard from './ScoreBoard'

const App = () => {
  return (
    <>
      <h1>League-ify</h1>
      <Router>
        <Route exact path="/" component={Start} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/create/team" component={CreateTeam} />
        <Route exact path="/leagues" component={Leagues} />
        <Route exact path="/leagues/:id" component={Teams} />
        <Route exact path="/teams/:id" component={TeamPlayers} />
        <Route path="/players" component={Players} />

        <Route exact path="/scoreboard" component={ScoreBoard} />
      </Router>
    </>
  )
}

export default App
