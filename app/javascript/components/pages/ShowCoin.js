import React, { Component } from "react";
import { Col, Card, CardTitle, CardFooter, Button, CardText } from "reactstrap";
import { Redirect } from "react-router-dom";

export default class ShowCoin extends Component {
  constructor(props) {
    super(props);
    this.handleCreate = this.handleCreate.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleCreate() {
    const { coin, myCoin } = this.props.location.state;

    fetch(`/api/coins`, {
      body: JSON.stringify({ coin: { quantity: 0, ticker: coin.symbol } }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    })
      .then((response) => response.json())
      .then((payload) => console.log("success", payload));
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
              {myCoin && <button onClick={this.handleDelete} className="btn btn-danger">Delete</button>}
              {!myCoin && <button onClick={this.handleCreate} className="btn btn-primary">Create</button>}
            </CardFooter>
          </Card>
        </Col>
      </div>
    );
  }
}
