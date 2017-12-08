import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import Main from './views/Main';
import NewGame from './views/NewGame';
import Join from './views/Join';
import Game from './views/Game';
import Controller from './views/Controller';

import registerServiceWorker from './registerServiceWorker';
import 'semantic-ui-css/semantic.min.css';
import './index.css';

ReactDOM.render(
  <Router>
    <div style={{ height: '100%' }}>
      <Route exact path="/" component={Main}/>
      <Route exact path="/newgame" component={NewGame}/>
      <Route exact path="/join" component={Join}/>
      <Route exact path="/game" component={Game}/>
      <Route exact path="/controller" component={Controller}/>
    </div>
  </Router>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
