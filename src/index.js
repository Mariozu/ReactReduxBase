/*eslint-disable import/default */
import React                    from 'react';
import {createStore, applyMiddleware, compose} from 'redux';
import { render }               from 'react-dom';
import { Provider }             from 'react-redux';
import { Router, hashHistory }  from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import routes                   from './routes';
import PropTypes                from 'prop-types';
import configureStore           from './store/configureStore';
import $ from 'jquery';
import {Button}                 from 'react-bootstrap';


// HOJAS DE ESTILO
import './styles/styles.css';
import './styles/bootstrap.css';
//import './styles/styles.css';



const store = configureStore();

const history = syncHistoryWithStore(hashHistory, store);

let content;
if (process.env.NODE_ENV == 'production') {
  content = <Router history={history} routes={routes} />;
} else {
  content =(
    <div>
      <Router history={history} routes={routes} />
    </div>);
}

render((
  <Provider store={store}>
    {content}
  </Provider>
), document.getElementById('app'));
