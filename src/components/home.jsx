import Articles from "./articles";
import Title from "./title";
import Navigation from "./navigation";
import React, { Component } from "react";
import Container from "react-bootstrap/Container";

class Home extends Component {
  render() {
    const articleList = this.props.articles;

    return (
      <Container>
        <Navigation articles={articleList} />
        <Title />
        <h2 className="title">Personal Websites</h2>
        <p className="title-subtext">
          <small>
            These websites were made using ReactJS. Feel free to take a look at
            an indepth description by clicking 'View Article' below.
          </small>
        </p>
        <Articles articles={articleList} />
      </Container>
    );
  }
}

export default Home;
