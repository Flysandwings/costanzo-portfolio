import "./App.css";
import React, { Component } from "react";
import Home from "./components/home";

class App extends Component {
  render() {
    const articleList = this.props.articles;
    return <Home articles={articleList} />;
  }
}

export default App;
