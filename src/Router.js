import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './pages/Home/Home'
import Sobre from './pages/Sobre/Sobre'

export default function Router(props) {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/sobre" exact component={Sobre} />
    </Switch>
  )
}
