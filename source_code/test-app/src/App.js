import React from 'react';
import logo from './logo.svg';
import './App.css';

/* This is the react-router-dom
  Which is a lib that allows for
  page switch in the dom.
*/
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

export default function App() {
  return (

    /* This is the Router tag that contains the Switch and Routes */
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/user">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A Switch looks through Route and render the first that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>

/*
    <div className="App">
      <header className="App-header"></header>

      <div className="test_div"></div>
    </div>
    */
  );
}
/*
export default App;
*/
function Home(){
  return <h2>Home</h2>
}

function About(){
  return <h2>About</h2>
}

function Users(){
  return <h2>Users</h2>
}