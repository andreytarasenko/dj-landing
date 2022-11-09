module.exports = function ({ env }) {
  const outConfig = {};

  outConfig.babel = {
    plugins: [
      [
        'babel-plugin-styled-components',
        {
          ssr: false,
          displayName: true,
          preprocess: false,
          minify: false,
        },
      ],
    ],
  };
  return outConfig;
};
