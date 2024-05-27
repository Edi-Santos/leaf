import React from 'react';
import { Route, Routes as RoutesDom } from 'react-router-dom';

import Home from './pages/home/Home';
import Login from './pages/login/Login';

function Routes() {
  return (
    <RoutesDom>
      <Route index element={<Home />} />
      <Route path='/login' element={<Login />} />
    </RoutesDom>
  )
}

export default Routes;
