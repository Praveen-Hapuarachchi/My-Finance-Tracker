const path = require('path');
const webpack = require('webpack');

module.exports = {
  resolve: {
    fallback: {
      "assert": require.resolve("assert/"),
      "buffer": require.resolve("buffer/"),
      "stream": require.resolve("stream-browserify")
    }
  },
  // ...existing configuration...
  module: {
    rules: [
      // ...existing rules...
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      Buffer: ['buffer', 'Buffer'],
      process: 'process/browser',
    }),
    // ...existing plugins...
  ]
};
