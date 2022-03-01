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
      coin: {
        quantity: "",
      },
      submitted: false,
    };
  }

  handleChange = (e) => {
    console.log(e.target.value);
    let { updateCoin } = this.state;
    updateCoin[e.target.name] = e.target.value;
    this.setState({ updateCoin: updateCoin });
  };

  handleSubmit = () => {
    this.props.updateCoin(this.state.coin);
    this.setState({ submitted: true });
  };

  render_form() {
    return (
      <Form>
        <FormGroup row>
          <Label for="quantity" sm={2}>
            Quantity
          </Label>
          <Col sm={10}>
            <Input type="text" name="quantity" id="quantity" />
          </Col>
        </FormGroup>
        <Button color="primary" onClick={this.updateCoin}>
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
