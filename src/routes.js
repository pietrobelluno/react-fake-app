import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from './pages/Home'
import Detail from './pages/Detail'
import Edit from './pages/Edit'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={Home} exact/>
        <Route path='/detail/:id' component={Detail}/>
        <Route path='/edit/:id' component={Edit}/>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;