import React, { ReactElement } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import routeMap from './routes'

function App(): ReactElement {
  return (
    <Router>
      <Switch>
        {routeMap.map((route) => (
          <Route {...route} key={route.path} />
        ))}
      </Switch>
    </Router>
  )
}

export default App
