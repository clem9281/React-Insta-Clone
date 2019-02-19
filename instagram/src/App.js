import React, { Component } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import PostContainer from "./components/PostContainer/PostContainer";
import dummyData from "./dummy-data";
import { Container } from "reactstrap";
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
        <SearchBar
          onSearch={this.handleSearch}
          changeFunction={this.handleChanges}
          textValue={this.state.searchText}
        />
        <Container>
          <p
            className={
              this.state.foundUser
                ? "bad-search-area text-center"
                : "text-center"
            }
          >
            Sorry, we couldn't find any posts by that username, but check out
            these recent posts
          </p>
          {this.state.data.map(element => (
            <PostContainer data={element} key={element.username} />
          ))}
        </Container>
      </div>
    );
  }
}

export default App;
