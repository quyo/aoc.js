const defer = require("config/defer").deferConfig;
const raw = require("config/raw").raw;

const port = 3000;
const config = {
  env: {
    label: undefined,
    labelOutput: defer(function () {
      return "[" + this.env.label + "]";
    }),
  },
  backend: {
    logOutputStream: raw(process.stdout),
    server: {
      port: port,
      fullUrl: `http://localhost:${port}`,
    },
  },
};

module.exports = config;
