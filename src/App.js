import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import Home from './Home';
import Form from './Form';
import styled from "styled-components";

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  border-bottom: 1px solid lime;
  background-color: aqua;

  .links {
    display: flex;
    justify-content: space-evenly;
  }

  .links a {
    text-decoration: none;
    color: white;
    font-weight: 700;
    margin-right: 8px;
    text-shadow: 1px 1px black;
  }

  .links a.active {
    border-bottom: 1px solid blue;
  }

  .app-title {
    color: Red;
    border: 2px solid red;
    border-radius: 20px;
    padding: 0 1%;
    background-color: white;
  }
` 

const App = () => {
  return (
    <>
      <StyledNav>
        <h1 className='app-title'>Lambda Eats</h1>
        <div className='links'>
          <Link to='/'>Home</Link>
          <Link>Help</Link>
        </div>
      </StyledNav>
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
