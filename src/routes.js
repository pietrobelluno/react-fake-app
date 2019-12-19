import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from './pages/Home'
import Detail from './pages/Detail'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={Home} exact/>
        <Route path='/detail/:id' component={Detail}/>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;