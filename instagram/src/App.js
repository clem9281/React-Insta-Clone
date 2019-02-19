import React, { Component } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import PostContainer from "./components/PostContainer/PostContainer";
import dummyData from "./dummy-data";
import { Container } from "reactstrap";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: dummyData
    };
  }
  render() {
    return (
      <div className="App">
        <SearchBar />
        <Container>
          {this.state.data.map(element => (
            <PostContainer data={element} key={element.username} />
          ))}
        </Container>
      </div>
    );
  }
}

export default App;
