import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import HomeContainer from './HomeContainer';
import FaqContainer from './FaqContainer';
import Header from './Header';

class App extends Component {
  render() {
    return (
      <div style={{ display: 'flex' }}>
        <Header />
        <Switch>
          <Route exact path="/" component={HomeContainer} />
          <Route exact path="/faq" component={FaqContainer} />
        </Switch>
      </div>
    );
  }
}

export default App;
