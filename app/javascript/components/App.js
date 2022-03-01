import React, { Component } from "react";
import CoinIndex from "./pages/CoinIndex";
import Home from "./pages/Home";
import CoinEdit from "./pages/CoinEdit";
import ShowCoin from "./pages/ShowCoin";
import NewCoin from "./pages/NewCoin";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./pages/ShowCoin.css";
import "./components/Footer.css";
import "./components/Header.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
  }
  updateCoin = (updateCoin) => {
    fetch("http://localhost:3000/coins", {
      body: JSON.stringify(updateCoin),
      headers: {
        "Content-Type": "application/json",
      },
      method: "PUT",
    }).then((response) => response.json());
  };

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
            {logged_in && <Route exact path="/coins/new" component={NewCoin} />}
            {logged_in && (
              <Route exact path="/coins/:id" component={ShowCoin} />
            )}
            {logged_in && (
              <Route exact path="/coins/:id/edit" component={CoinEdit} />
            )}
          </Switch>
          <Footer {...this.props} />
        </Router>
      </>
    );
  }
}

export default App;

// index = CoinIndex = /
//  create = CoinNew = /coins/new
//  read = CoinShow = /coins/:id
//  update = CoinEdit = /coins/:id/edit
//  delete = (button on the CoinIndex that does a DELETE to /coins/:id
