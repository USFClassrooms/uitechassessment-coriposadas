import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Container } from 'react-bootstrap/';

import Home from './Home';
import Cart from './Cart';
import Add from './Add';

class Main extends Component {
  render() {
    return (
      <Container className="main">
        <br></br>
        <Home></Home>
        <Route exact path="/cart">
          <Cart></Cart>
        </Route>
        <Route exact path="/add">
          <Add></Add>
        </Route>
      </Container>
    );
  }
}

export default Main;
