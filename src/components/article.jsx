import React, { Component } from "react";

class Article extends Component {
  //   state = {
  //     title: "Article1",
  //     imageUrl: "https://picsum.photos/200",
  //     description: "This is a description about the article",
  //   };

  render() {
    const { title, imageUrl, description, id } = this.props.article;

    return (
      <div className="card m-2">
        <img className="card-img-top" src={imageUrl} alt="Card top" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
            <small>{description}</small>
          </p>
          <a href={"article/" + id} className="btn btn-dark btn-sm">
            View Article
          </a>
        </div>
      </div>
    );
  }
}

export default Article;
