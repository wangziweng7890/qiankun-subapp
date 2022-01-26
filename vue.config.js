const packageName = require("./package.json").name;

module.exports = {
  configureWebpack(config) {
    config.devServer = {
      ...config.devServer,
      port: 8082,
      disableHostCheck: true,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    };
    config.output = {
      ...config.output,
      library: `sub-app-1`,
      libraryTarget: "window",
      // jsonpFunction: `webpackJsonp_${packageName}`,
    };
  },
};
