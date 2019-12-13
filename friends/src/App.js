import React from 'react';
import './App.css';
import Login from './components/Login';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Friends from './components/Friends';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
      <div className='App'>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/friends">Friends Page</Link>
          </li>
        </ul>
        <Route path="/login" component={Login} />
        <PrivateRoute exact path="/friends" component={Friends} />
      </div>
    </Router>
  );
}

export default App;