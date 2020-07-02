import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import Start from './Start'
import Login from './Login'
import SignUp from './Signup'
import CreateTeam from './CreateTeam'
import DisplayLeagues from './DisplayLeagues'
import DisplayTeams from './DisplayTeams'
import DisplayPlayers from './DisplayPlayers'

const App = () => {
  return (
    <>
      <h1>League-ify</h1>
      <Router>
        <Route exact path="/" component={Start} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/create/team" component={CreateTeam} />
        <Route path="/leagues" component={DisplayLeagues} />
        <Route path="/teams" component={DisplayTeams} />
        <Route path="/players" component={DisplayPlayers} />
      </Router>
    </>
  )
}

export default App
