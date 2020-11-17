import "webpack-hot-middleware/client";

import React from "react";
import ReactDOM from "react-dom";

import "./global.scss";
import App from "./app";

ReactDOM.render(<App />, document.getElementById("app"));

module.hot && module.hot.accept();
