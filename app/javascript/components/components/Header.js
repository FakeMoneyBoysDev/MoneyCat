import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  render() {
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route,
    } = this.props;
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Money Cat</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                {logged_in ? (
                  <a className="nav-link" href={sign_out_route}>
                    Sign Out
                  </a>
                ) : (
                  <a className="nav-link" href={sign_in_route}>
                    Sign In
                  </a>
                )}
              </NavItem>
              <NavItem>
                <a
                  className="nav-link"
                  href="https://github.com/FakeMoneyBoysDev/MoneyCat"
                  target="_blank"
                >
                  GitHub
                </a>
              </NavItem>
              <NavItem>
                <a className="nav-link" href="/aboutus" target="_blank">
                  AboutUs
                </a>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
