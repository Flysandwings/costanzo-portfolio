import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import Resume from "./components/views/resume";
import Article from "./components/views/article";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/home.css";
//import reportWebVitals from "./reportWebVitals";

export default function Load() {
  let state = {
    articles: [
      {
        id: 1,
        title: "Article1",
        imageUrl: "https://picsum.photos/200",
        description: "This is a description about the article1",
      },
      {
        id: 2,
        title: "Article2",
        imageUrl: "https://picsum.photos/200",
        description: "This is a description about the article2",
      },
      {
        id: 3,
        title: "Article3",
        imageUrl: "https://picsum.photos/200",
        description: "This is a description about the article3",
      },
      {
        id: 4,
        title: "Article5",
        imageUrl: "https://picsum.photos/200",
        description: "This is a description about the article4",
      },
    ],
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<App articles={state.articles} />} />
          <Route path="resume" element={<Resume />} />
          <Route
            path="article/:id"
            element={<Article articles={state.articles} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Load />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
