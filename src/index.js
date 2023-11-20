import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./Header.css";
import "./login.css";
import App from "./App";
import { movies } from "./movieDummy";
import Movie from "./components/Movie";
import Header from "./components/Header";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
