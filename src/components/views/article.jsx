import React, { Component } from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navigation from "../navigation";
import "../../css/article.css";

const Article = (props) => {
  const { id } = useParams();

  const articles = [
    {
      id: 1,
      title: "Portfolio",
      content: [
        {
          header:
            "What makes this site so important you needed to write an article about it?",
          desc: "It's my first site using React. Up until this point I used Angular5 and it was hard to learn and super clunky, therefore I was hesitant to reach out and try a new framework. I had heard about React and Angular as essentially bretheren, and after learning Angular I was turned off to learning yet another framework. As time progressed, my curiosity grew and I ended up attempting to make a portfolio site using React.",
          img: require("../../img/reactvangular.jpg"),
          source:
            "Source: https://railsware.com/blog/react-vs-angular-battle-for-the-front-end/",
        },
        {
          header: "Big whoop, you finally learned React, who cares?",
          desc: "I know, I know. My journey to learning React isn't actually impressive or exciting in and of itself. However, after designing this front-end only portfolio site, React has piqued my interest. I have gone on and made two other more complex, data driven applications with React since making this initial portfolio site. React is a powerful tool, and I much prefer it to Angular.",
          img: require("../../img/hooray.gif"),
          source: "Source: NBC's The Office",
        },
        {
          header: "Component Tree",
          desc: "The component overview beings with the main element, App. Within this there is routing for multiple pages. The most complex page is the homepage which contains the title animation and articles card layouts. We currently reside on an article page, where data is being drawn from an array as opposed to a database. I did not think such a simple site warrents database interactions, so navigation data such as articles is passed from component to component originating from an array within the App component, where regular database interactions might pass the data in a data-driven application.",
          img: require("../../img/componentTree.jpg"),
          source: "Tree of Components",
        },
        {
          header: "How does this site actually work?",
          desc: "This site is purely designed to be a front-end spectacle. On the 'Home' page, there is an animation designed using SVG's to showcase my animation capabilities. To showcase my styling capabilities, there is a card layout, and navigation bar created using bootstrap5. To showcase my ability to create data-driven front-end applications, all of the data is stored in arrays within class/functional components. I thought a database for a portfolio website would be overkill. I chose to demonstrate my database abilities via other sites listed within this portfolio page. However, I still use the data in the same way I would from a database. For example, the list generated in the navigation bar, and in the card layout on the homepage use the exact same array. In the App component, there is an array called 'articles' that is used by both the navigation component and the home->articles->article component.",
        },
      ],
    },
    {
      id: 2,
      title: "Costanzo Friends and Family Cookbook",
    },
    {
      id: 3,
      title: "Disc Golfing Analysis and Game Tracker",
    },
  ];

  function makeArticle(element) {
    let total = [];

    element.content.map((e, index) => {
      total.push(
        <div key={index}>
          <h2>{e.header}</h2>
          <p>{e.desc}</p>
          <img src={e.img} alt="" />
          <small>{e.source}</small>
        </div>
      );
    });

    return total;
  }

  return (
    <Container>
      <Navigation articles={props.articles} />

      <div>
        {articles
          .filter((element) => element.id == id)
          .map((element, index) => (
            <div className="article-body" key={index}>
              <h1>{element.title}</h1>
              {makeArticle(element)}
            </div>
          ))}
      </div>
    </Container>
  );
};

export default Article;
