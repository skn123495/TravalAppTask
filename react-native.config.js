module.exports = {
  presets: [
    ["@babel/preset-env", { targets: { node: "current" } }],
    "@babel/preset-typescript",
  ],
  dependencies: {
    "react-native-vector-icons": {
      platforms: {
        ios: null,
      },
    },
  },
};
