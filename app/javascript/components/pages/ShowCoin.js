import React, { Component } from "react";
import { Col, Card, CardTitle, CardFooter, Button, CardText } from "reactstrap";

export default class ShowCoin extends Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete() {
    const { myCoin } = this.props.location.state;
    fetch(`/api/coins/${myCoin.id}`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((payload) => console.log("success"));
  }
  render() {
    const coin = this.props.location.state.coin;

    return (
      <div className="body">
        <Col className="card" sm="4">
          <Card body>
            <CardTitle>{coin && coin.name}</CardTitle>
            <img
              src={coin && coin.image}
              className="coinLogo"
              alt="Coin Logo"
              style={{ height: 200, margin: "auto" }}
            />
            <CardText>
              Ticker: {coin && coin.symbol}
              <br></br>Current Price: $
              {coin && coin.current_price.toLocaleString()}
              <br></br>
              24 Hour Price Change: $
              {coin && coin.price_change_24h.toLocaleString()}
              <br></br>
              24 Hour Price Percentage Change: %
              {coin && coin.price_change_percentage_24h}
            </CardText>
            <CardFooter>
              <Button onClick={this.handleDelete}>Delete</Button>
            </CardFooter>
          </Card>
        </Col>
      </div>
    );
  }
}
