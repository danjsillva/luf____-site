import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './pages/Home/Home'
import Sobre from './pages/Sobre/Sobre'
import Servicos from './pages/Servicos/Servicos'

export default function Router(props) {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/sobre" exact component={Sobre} />
      <Route path="/servicos" exact component={Servicos} />
    </Switch>
  )
}
