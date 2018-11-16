module.exports = function (api) {
  api.cache(true)
  const presets = ["@babel/preset-env"];
  const plugins = ["syntax-class-properties", "transform-class-properties", "@babel/plugin-proposal-optional-chaining"];

  return {
    presets,
    plugins
  };
}
