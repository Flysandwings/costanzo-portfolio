import React, { Component } from "react";
import Article from "./article";

class Articles extends Component {
  render() {
    return (
      <div className="card-group">
        {this.props.articles.map((article) => (
          <Article key={article.id} article={article} />
        ))}
      </div>
    );
  }
}

export default Articles;
