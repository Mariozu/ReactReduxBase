import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App                   from './componentes/App';
import PaginaPrincipal       from './componentes/componenteMain/paginaPrincipal';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={PaginaPrincipal} />
  </Route>
);
