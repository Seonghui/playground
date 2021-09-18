import React, { ReactElement } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Memo from './pages/Memo'
import MemoItem from './pages/MemoItem'
import Create from './pages/Create'
import Edit from './pages/Edit'

function App(): ReactElement {
  return (
    <Router>
      <Switch>
        <Route path="/memo" exact>
          <Memo />
        </Route>
        <Route path="/memo/create" exact>
          <Create />
        </Route>
        <Route path="/memo/:id/edit" exact>
          <Edit />
        </Route>
        <Route path="/memo/:id">
          <MemoItem />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
