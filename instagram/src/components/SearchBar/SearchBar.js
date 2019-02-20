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
const SearchBar = ({ textValue, changeFunction, onSearch }) => {
  return (
    <Navbar color="light" light className="w-100">
      <Row className="d-flex align-items-center w-100 mx-auto">
        <Col xs="4" md="2">
          <NavbarBrand href="/" className="d-none d-md-block" id="main-nav">
            <img src={instaLogo} alt="instagram text logo" className="h-100" />
          </NavbarBrand>
        </Col>
        <Col xs="4" md={{ size: 4, offset: 2 }}>
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
        <Col xs="4" className="d-flex justify-content-end">
          <Button outline className="border-0 text-center">
            <i className="far fa-compass fa-lg" />
          </Button>
          <Button outline className="border-0">
            <i className="far fa-heart fa-lg" />
          </Button>
          <DropDown />
        </Col>
      </Row>
    </Navbar>
  );
};

export default SearchBar;
