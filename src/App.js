import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import TopMenu from './Component/TopMenu'
import Login from './Component/Login'
import Home from './Component/Home'
import Room from './Component/Room'
import { AuthProvider } from './Context/AuthContext'

function App() {
  return (
      <AuthProvider>
        <Router>
          <div className="App">
            <TopMenu />
          </div>
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/room/:id" component={Room} />
            <Redirect from="/" to="/login" />
          </Switch>
        </Router>
      </AuthProvider>
  );
}

export default App;
