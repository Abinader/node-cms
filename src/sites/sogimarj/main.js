import React from "react";
import Router from 'react-router';

import Home from './js/Home.react';
import Noticias from './js/Noticias.react';

var { Route, DefaultRoute } = Router;

var routes = (
  <Route name='home' path='/' handler={Home}>
    <Route name='noticias' path='noticias' handler={Noticias} />
  </Route>
);

// declare our routes and their hierarchy
Router.run(routes, Router.HashLocation, (Root) => {
  React.render(<Root />, document.body);
});
