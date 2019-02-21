import React from "react";
import DropDown from "../DropDown/DropDown";
import instaLogo from "../../assets/iglogo.png";
import {
  Navbar,
  Input,
  InputGroup,
  NavbarBrand,
  Row,
  Col,
  Form,
  Button
} from "reactstrap";
import "./SearchBar.css";
const SearchBar = ({ textValue, changeFunction, onSearch, logout }) => {
  return (
    <Navbar color="light" light className="w-100">
      <Row className="d-flex align-items-center w-100 mx-auto">
        <Col xs="2" md="4">
          <NavbarBrand
            href="/"
            id="main-nav"
            className="d-flex align-items-center"
          >
            <i className="fab fa-instagram fa-2x pr-2" id="insta-icon" />
            <img
              src={instaLogo}
              alt="instagram text logo"
              className="h-100 d-none d-md-inline mt-1 pl-2"
            />
          </NavbarBrand>
        </Col>
        <Col xs="8" md="4">
          <Form onSubmit={onSearch}>
            <InputGroup>
              <Input
                bsSize="sm"
                type="text"
                placeholder="&#xf002; Search"
                name="searchText"
                value={textValue}
                onChange={changeFunction}
              />
            </InputGroup>
          </Form>
        </Col>
        <Col xs="2" md="4" className="d-flex justify-content-end p-0 p-md-3">
          <Button outline className="border-0 text-center d-none d-md-inline">
            <i className="far fa-compass fa-lg" />
          </Button>
          <Button outline className="border-0 d-none d-md-inline">
            <i className="far fa-heart fa-lg" />
          </Button>
          <DropDown logout={logout} />
        </Col>
      </Row>
    </Navbar>
  );
};

export default SearchBar;
