const { alias } = require("react-app-rewire-alias");

module.exports = function override(config, env) {
  alias({
    "@components": "src/components",
    "@ui": "src/components/UI",
    "@containers": "src/containers",
    "@constants": "src/constants",
    "@context": "src/context",
    "@hoc-helpers": "src/hoc-helpers",
    "@services": "src/services",
    "@utils": "src/utils",
    "@hooks": "src/hooks",
    "@styles": "src/styles",
    "@routes": "src/routes",
    "@static": "src/static",
    "@store": "src/store",
  })(config);

  return config;
};
