// imported file list;
import './App.css';
import Home from './Components/Home/Home';
import NoMatch from './Components/NoMatch/NoMatch';
import { createContext, useState } from 'react';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Booking from './Components/Booking/Booking';
import Login from './Components/Login/Login';
import Destination from './Components/Destination/Destination';

export const UserContext = createContext();

function App() {
  {/* setting route path */}
  const [loggedInUser, setLoggedInUser]=useState({});
  return (
    <div >
      <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
          <Router>
              <Switch>
                    <Route path="/home">
                          <Home/>
                    </Route>
                    <PrivateRoute path="/booking/:transportName">
                        <Booking/>
                    </PrivateRoute>
                    <PrivateRoute path="/destination">
                        <Destination/>
                    </PrivateRoute>
                    <Route path="/login">
                        <Login/>
                    </Route>
                    <Route exact path="/">
                          <Home/>
                    </Route>
                    <Route path="*">
                        <NoMatch/>
                    </Route>
              </Switch>
          </Router> 
      </UserContext.Provider>
    </div>
  );
}

export default App;
