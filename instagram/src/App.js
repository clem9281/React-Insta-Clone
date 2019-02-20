import React, { Component } from "react";
import authenticate from "./components/authenticate/authenticate";
import PostsPage from "./components/PostsPage/PostsPage";
import Login from "./components/Login/Login";
import dummyData from "./dummy-data";
import FuzzySearch from "fuzzy-search";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      searchText: "",
      foundUser: true,
      localUser: ""
    };
  }
  componentDidMount() {
    if (localStorage.getItem("localUser")) {
      this.setState({
        data: dummyData,
        localUser: localStorage.getItem("localUser")
      });
    } else {
      this.setState({ data: dummyData });
    }
  }
  // if the search doesn't find anything, change the data back to the previous state, but also change foundUser to false.
  componentDidUpdate(prevProps, prevState) {
    console.log(1, prevState, this.state);
    if (this.state.data.length === 0) {
      this.setState({ data: prevState.data, foundUser: false });
    }
  }
  logout = event => {
    console.log("clicked");
    event.stopPropagation();
    localStorage.removeItem("localUser");
    window.location.reload();
  };
  handleChanges = event => {
    this.setState({ [event.target.name]: event.target.value, foundUser: true });
  };
  handleSearch = event => {
    event.preventDefault();
    // const newData = this.state.data.filter(
    //   element => element.username === this.state.searchText
    // );
    const searcher = new FuzzySearch(this.state.data, ["username"]);
    const result = searcher.search(this.state.searchText);
    this.setState({ data: result, searchText: "" });
  };
  render() {
    return (
      <div className="App">
        <PostsPage
          data={this.state.data}
          foundUser={this.state.foundUser}
          onSearch={this.handleSearch}
          changeFunction={this.handleChanges}
          textValue={this.state.searchText}
          localUser={this.state.localUser}
          logout={this.logout}
        />
      </div>
    );
  }
}

export default authenticate(App)(Login);
