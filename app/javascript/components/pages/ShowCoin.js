import React, { Component } from "react";
import { Col, Card, CardTitle, CardFooter, Button, CardText } from "reactstrap";
import { Redirect } from "react-router-dom";

export default class ShowCoin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      coin: null,
      myCoin: null,
      redirect: false
    }

    this.handleCreate = this.handleCreate.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.loadCoins = this.loadCoins.bind(this);
    this.loadMyCoins = this.loadMyCoins.bind(this);
  }

  componentDidMount() {
    this.loadCoins();
    this.loadMyCoins();
  }

  handleCreate() {
    const { coin } = this.state;

    fetch(`/api/coins`, {
      body: JSON.stringify({ coin: { quantity: 0, ticker: coin.id } }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    })
      .then((response) => response.json())
      .then((payload) => this.setState({ redirect: true }));
  }

  handleDelete() {
    const { myCoin } = this.state;

    fetch(`/api/coins/${myCoin.id}`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((payload) => this.setState({ redirect: true }));
  }

  async loadCoins() {
    const { id } = this.props.match.params;

    fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${id}`)
      .then((response) => response.json())
      .then((payload) => this.setState({ coin: payload[0] }));
  }

  async loadMyCoins() {
    fetch("/api/coins/")
      .then((response) => response.json())
      .then((payload) => this.setState({ myCoin: payload[0] }));
  }

  render() {
    const { id } = this.props.match.params;
    const { coin, myCoin, redirect } = this.state;

    if(redirect) return <Redirect to="/" />
    if(!coin) return <div>Loading...</div>

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
              Value: ${(myCoin.quantity * coin.current_price).toLocaleString()}
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
