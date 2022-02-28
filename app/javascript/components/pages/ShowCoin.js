import React, { Component } from "react";
import { Col, Card, CardTitle, CardText } from "reactstrap";

export default class ShowCoin extends Component {
  render() {
    const coin = this.props.location.state.coin;

    return (
      <div className="body">
        <Col className="card" sm="4">
          <Card body>
            <CardTitle>{coin && coin.name}</CardTitle>
            <img
              src={coin && coin.logo}
              className="coinLogo"
              alt="Coin Logo"
              style={{ height: 200, margin: "auto" }}
            />
            <CardText>
              Ticker: {coin && coin.ticker}
              <br></br>Current Price: ${coin && coin.price}
              <br></br>
              24 Hour Price Change: ${coin && coin.price_change_24h}
              <br></br>
              24 Hour Price Percentage Change: %
              {coin && coin.price_change_percentage_24h}
            </CardText>
          </Card>
        </Col>
      </div>
    );
  }
}
