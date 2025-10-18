module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      "nativewind/babel",
    ],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./src"],
          alias: {
            "@": "./src",
          },
        },
      ],
      [
        "expo-router/babel",
        {
          appDir: "src/app",
        },
      ],
      "react-native-reanimated/plugin",
    ],
  };
};
