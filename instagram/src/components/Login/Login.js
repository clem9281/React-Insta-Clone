import React from "react";
import instaLogo from "../../assets/iglogo.png";

import {
  Container,
  Card,
  CardHeader,
  CardBody,
  Form,
  InputGroup,
  Input,
  Button
} from "reactstrap";

import { LoginLogo } from "../Styles/StyledComponents";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      user: "",
      usernameValue: "",
      passwordValue: ""
    };
  }
  handleChanges = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  login = event => {
    const newUser = this.state.usernameValue;
    const pass = this.state.passwordValue;
    this.setState({
      user: newUser,
      usernameValue: "",
      passwordValue: ""
    });
    localStorage.setItem("localUser", newUser);
  };
  render() {
    return (
      <Container
        fluid
        className="d-flex align-items-center justify-content-center vh-100"
      >
        <Card>
          <CardHeader>
            <LoginLogo src={instaLogo} alt="instagram text logo" />
          </CardHeader>
          <CardBody>
            <Form onSubmit={this.login}>
              <InputGroup className="mb-2">
                <Input
                  type="username"
                  placeholder="Username"
                  value={this.state.usernameValue}
                  name="usernameValue"
                  onChange={this.handleChanges}
                  required
                />
              </InputGroup>
              <InputGroup className="mb-2">
                <Input
                  type="password"
                  placeholder="Password"
                  value={this.state.passwordValue}
                  name="passwordValue"
                  onChange={this.handleChanges}
                  required
                />
              </InputGroup>
              <Button color="primary" className="d-block mx-auto">
                Login
              </Button>
            </Form>
          </CardBody>
        </Card>
      </Container>
    );
  }
}
export default Login;
