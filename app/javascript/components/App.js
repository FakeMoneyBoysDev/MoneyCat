import React, { Component } from "react";
import CoinIndex from "./pages/CoinIndex";
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
          <Switch>{<Route exact path="/" component={CoinIndex} />}</Switch>
        </Router>
      </>
    );
  }
}

export default App;
