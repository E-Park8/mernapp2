import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Home from './Pages/Home'
import Save from './Pages/Save'

const App = () => {
  return(
    <Router>
    <div>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/save'>Save</Link>
      </nav>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path ="/save" component={Save} />
    </Switch>
    </div>
  </Router>
)
}
export default App