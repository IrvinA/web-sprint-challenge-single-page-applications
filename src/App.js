import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import Home from './Home';
import Form from './Form';

const App = () => {
  return (
    <>
      <nav>
        <h1 className='app-title'>Lambda Eats</h1>
        <div className='links'>
          <Link to='/'>Home</Link>
          <Link>Help</Link>
        </div>
      </nav>
      {
        <Switch>
          <Route path='/pizza'>
            <Form />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      }
    </>
  );
};
export default App;
