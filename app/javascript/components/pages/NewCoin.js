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

export default class NewCoin extends Component {
  render_form() {
    return (
      <Form>
        <FormGroup row>
          <Label for="exampleText" sm={2}>
            Text Area3
          </Label>
          <Col sm={10}>
            <Input type="textarea" name="text" id="exampleText" />
          </Col>
        </FormGroup>
      </Form>
    );
  }
  render() {
    return <div>New Coin {this.render_form()}</div>;
  }
}
