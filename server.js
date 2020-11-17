const express = require("express");
const webpack = require("webpack");
const config = require("./webpack.config");

const PORT = process.env.PORT || 3333;
const app = express();
const compiler = webpack(config);

const webpackDevMiddleware = require("webpack-dev-middleware")(compiler);
app.use(webpackDevMiddleware);

const webpackHotMiddleware = require("webpack-hot-middleware")(compiler);
app.use(webpackHotMiddleware);

app.use(express.static("public"));

app.listen(PORT, () => console.log(`Server on port ${PORT}`));
