// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  root: './src/',
  mount: {
    /* ... */
  },
  plugins: [
    '@snowpack/plugin-typescript',
    [
      'snowpack-plugin-raw-file-loader',
      {
        exts: ['.md', '.html'], // Add file extensions saying what files should be loaded as strings in your snowpack application. Default: '.txt'
      },
    ],
  ], // ! '@snowpack/plugin-typescript'], NOT WORKING
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
};
