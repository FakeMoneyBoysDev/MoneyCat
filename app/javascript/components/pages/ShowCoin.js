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

export default class ShowCoin extends Component {
  render() {
    const coin = this.props.location.state.coin;

    return <div>Show {coin.name}</div>;
  }
}
