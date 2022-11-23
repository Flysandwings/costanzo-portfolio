import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

class Navigation extends Component {
  generateArticleDropdown() {
    let list = [];
    this.props.articles.map((article) => {
      // <Article key=? article=article>
      let x = (
        <NavDropdown.Item key={article.id} href={"/article/" + article.id}>
          {article.title}
        </NavDropdown.Item>
      );
      list.push(x);
    });
    return (
      <NavDropdown title="Articles" id="basic-nav-dropdown">
        {list}
        <NavDropdown.Divider />
        <NavDropdown.Item href="#articleList">Article List</NavDropdown.Item>
      </NavDropdown>
    );
  }

  render() {
    return (
      <Navbar bg="light" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand href="/">Andrew Costanzo</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/resume">Resume</Nav.Link>
              {this.generateArticleDropdown()}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default Navigation;
