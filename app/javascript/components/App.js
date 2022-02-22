import React, { Component } from "react";
import CoinIndex from "./pages/CoinIndex";
import Header from "./components/Header";
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
        <Header />
        {logged_in && (
          <div>
            <a href={sign_out_route}>Sign Out</a>
            <CoinIndex />
          </div>
        )}
        {!logged_in && (
          <div>
            <a href={sign_in_route}>Sign In</a>
          </div>
        )}
      </>
    );
  }
}

export default App;
