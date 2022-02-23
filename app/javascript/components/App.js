import React, { Component } from "react";
import CoinIndex from "./pages/CoinIndex";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignIn from "./components/SignIn";

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
            {/* <Route exact path="/" component={Home} /> */}
            {/* //<Route path="/catindex" component={CatIndex} /> */}
            {/* //<Route path="/catshow" component={CatShow} /> */}
            {/* <Route path="/users/sign_in" component={SignIn} /> */}
            {/* //<Route path="/catedit" component={CatEdit} /> */}
            {/* //</Switch></Router>Route component={NotFound} /> */}
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
