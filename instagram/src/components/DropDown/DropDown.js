import React from "react";
import {
  Button,
  ButtonDropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu
} from "reactstrap";

class DropDown extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <ButtonDropdown
        isOpen={this.state.dropdownOpen}
        toggle={this.toggle}
        direction="left"
      >
        <DropdownToggle outline className="border-0">
          <i className="far fa-user fa-lg" />
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>
            <Button outline className="border-0" onClick={this.props.logout}>
              Logout
            </Button>
          </DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>
    );
  }
}
export default DropDown;
