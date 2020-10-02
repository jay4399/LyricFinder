import React from 'react';
import './App.css';
import Navbar from './components/layout/Navbar'
import Index from './components/layout/Index'
import Lyrics from './components/tracks/Lyrics'
import { Provider } from './Context'
import { HashRouter, BrowserRouter as Router, Route, Switch } from 'react-router-dom'

export default function App() {
  return (
    <HashRouter basename='/'>
    <Provider>
      <Router>
        <React.Fragment>
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={ Index } />
              <Route exact path="/lyrics/track/:id" component={ Lyrics } />
            </Switch>
          </div>
        </React.Fragment>
      </Router>
    </Provider>
    </HashRouter>
  );
}
