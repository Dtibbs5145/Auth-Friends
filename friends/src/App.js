import React from 'react';
import './App.css';
import Login from './components/Login';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import FriendsList from './components/FriendsList';
import PrivateRoute from './components/PrivateRoute';

// const ProtectedRoute = ({ component: undefined, ...rest}) => {
//   return <Route {... {...props, component: undefined}} />
// };

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
        <PrivateRoute exact path="/friends" component={FriendsList} />
      </div>
    </Router>
  );
}

export default App;

//53:38