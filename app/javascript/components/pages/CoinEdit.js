import React, { Component } from "react";
import {
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
} from "reactstrap";

export default class CoinEdit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ...this.props.location.state,
      submitted: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateCoin = this.updateCoin.bind(this);
  }

  updateCoin() {
    const {
      myCoin: { id, quantity },
    } = this.state;

    fetch(`/api/coins/${id}`, {
      body: JSON.stringify({ coin: { quantity } }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "PATCH",
    })
      .then((response) => response.json())
      .then((payload) => console.log("success", payload));
  }

  handleChange(e) {
    const { myCoin } = this.state;

    myCoin[e.target.name] = e.target.value;

    this.setState({ myCoin });
  }

  handleSubmit = () => {
    this.updateCoin();

    this.setState({ submitted: true });
  };

  render_form() {
    const {
      myCoin: { quantity },
    } = this.state;

    return (
      <Form>
        <FormGroup row>
          <Label for="quantity" sm={2}>
            Quantity
          </Label>
          <Col sm={10}>
            <Input
              type="text"
              name="quantity"
              id="quantity"
              value={quantity}
              onChange={this.handleChange}
            />
          </Col>
        </FormGroup>
        <Button color="primary" onClick={this.handleSubmit}>
          update
        </Button>
      </Form>
    );
  }

  render() {
    const coin = this.props.location.state.coin;
    return (
      <div>
        Edit {coin.name} {this.render_form()}
      </div>
    );
  }
}
