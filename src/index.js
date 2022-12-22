import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

    <HashRouter base="http://johnramos14.github.io/focus-flow/">
      <App />
    </HashRouter>

);

export default App;