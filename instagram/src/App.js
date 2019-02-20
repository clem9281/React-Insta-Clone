import React, { Component } from "react";
import authenticate from "./components/authenticate/authenticate";
import SearchBar from "./components/SearchBar/SearchBar";
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
      foundUser: true
    };
  }
  componentDidMount() {
    this.setState({ data: dummyData });
  }
  // if the search doesn't find anything, change the data back to the previous state, but also change foundUser to false.
  componentDidUpdate(prevProps, prevState) {
    if (this.state.data.length === 0) {
      this.setState({ data: prevState.data, foundUser: false });
    }
  }
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
        {/* <SearchBar
          onSearch={this.handleSearch}
          changeFunction={this.handleChanges}
          textValue={this.state.searchText}
        /> */}
        <PostsPage
          data={this.state.data}
          foundUser={this.state.foundUser}
          onSearch={this.handleSearch}
          changeFunction={this.handleChanges}
          textValue={this.state.searchT}
        />
      </div>
    );
  }
}

export default authenticate(App)(Login);
