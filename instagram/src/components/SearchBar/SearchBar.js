import React from "react";
import instaLogo from "../../assets/iglogo.png";
import {
  Navbar,
  Input,
  InputGroup,
  NavbarBrand,
  Row,
  Col,
  Form
} from "reactstrap";
import "./SearchBar.css";
const SearchBar = props => {
  return (
    <Navbar color="light" light className="w-100">
      <Row className="d-flex align-items-center w-100 mx-auto">
        <Col xs="4" md="2">
          <NavbarBrand href="/">
            <img src={instaLogo} alt="instagram text logo" className="w-100" />
          </NavbarBrand>
        </Col>
        <Col xs="4" md={{ size: 4, offset: 2 }}>
          <Form>
            <InputGroup>
              <Input bsSize="sm" type="text" placeholder="&#xf002; Search" />
            </InputGroup>
          </Form>
        </Col>
        <Col xs="4" className="d-flex justify-content-end">
          <i className="far fa-compass text-muted fa-lg pl-2" />
          <i className="far fa-heart text-muted fa-lg pl-2" />
          <i className="far fa-user text-muted fa-lg pl-2" />
        </Col>
      </Row>
    </Navbar>
  );
};

export default SearchBar;
