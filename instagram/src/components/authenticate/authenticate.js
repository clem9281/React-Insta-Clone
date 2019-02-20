import React from "react";

const authenticate = App => Login =>
  class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        loggedIn: false
      };
    }
    componentDidMount() {
      if (localStorage.getItem("localUser")) {
        this.setState({ loggedIn: true });
      }
    }
    render() {
      return this.state.loggedIn ? <App /> : <Login />;
    }
  };

export default authenticate;
