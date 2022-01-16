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
        <Route path="/memos" exact>
          <Memo />
        </Route>
        <Route path="/memos/create" exact>
          <Create />
        </Route>
        <Route path="/memos/:id/edit" exact>
          <Edit />
        </Route>
        <Route path="/memos/:id">
          <MemoItem />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
