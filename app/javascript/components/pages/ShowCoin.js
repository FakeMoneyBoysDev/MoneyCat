import React, { Component } from "react";
import { Col, Card, CardTitle, CardFooter, Button, CardText } from "reactstrap";
import { Redirect } from "react-router-dom";

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
    if(!this.props.location.state) return <Redirect to="/" />

    const { coin, myCoin } = this.props.location.state;

    if(!coin) return <div>Invalid Coin</div>

    return (
      <div className="body">
        <Col className="card" sm="4">
          <Card body>
            <CardTitle>{coin.name}</CardTitle>
            <img
              src={coin.image}
              className="coinLogo"
              alt="Coin Logo"
              style={{ height: 200, margin: "auto" }}
            />
            <CardText>
              Ticker: {coin.symbol}
              <br></br>Current Price: $
              {coin.current_price.toLocaleString()}
              <br></br>
              24 Hour Price Change: $
              {coin.price_change_24h.toLocaleString()}
              <br></br>
              24 Hour Price Percentage Change: %
              {coin.price_change_percentage_24h}
            </CardText>
            {myCoin &&<CardText>
              Quantity: {myCoin.quantity}
              <br />
              Value: ${(myCoin.quantity & coin.current_price).toLocaleString()}
            </CardText>}
            <CardFooter>
              <Button onClick={this.handleDelete}>Delete</Button>
            </CardFooter>
          </Card>
        </Col>
      </div>
    );
  }
}
