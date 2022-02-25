import React, { Component } from "react";
import CoinIndex from "./pages/CoinIndex";
import Home from "./pages/Home";

import Header from "./components/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route,
    } = this.props;
    return (
      <>
        <Router>
          <Header {...this.props} />
          <Switch>
            {logged_in && <Route exact path="/" component={CoinIndex} />}
            {!logged_in && <Route exact path="/" component={Home} />}
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
