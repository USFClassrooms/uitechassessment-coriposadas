import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import axios from 'axios';

import Main from './Main/Main';

const store = createStore(() => {}, {});

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Route path="/" component={Main} />
        </Router>
      </Provider>
    );
  }
}

export default App;
