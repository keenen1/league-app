import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

// import TopPanel from './TopPanel'
import Start from './Start'
import Login from './Login'
import SignUp from './Signup'
import CreateTeam from './CreateTeam'
import DisplayLeague from './DisplayLeagues'

const App = () => {
  return (
    <>
      <h1>League-ify</h1>
      <Router>
        <Route exact path="/" component={Start} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/create/team" component={CreateTeam} />
        <Route path="/leagues" component={DisplayLeague} />
      </Router>
    </>
  )
}

export default App
