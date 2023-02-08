var path = require('path');
const { override, addWebpackAlias } = require('customize-cra');

module.exports = function (config, env) {
  return Object.assign(
    config,
    override(
      // add an alias for "our" imports
      addWebpackAlias({
        '@api': path.resolve(__dirname, 'src/api'),
        '@config': path.resolve(__dirname, 'src/config'),
        '@app': path.resolve(__dirname, 'src/app'),
        '@router': path.resolve(__dirname, 'src/router'),
        '@pages': path.resolve(__dirname, 'src/pages'),
        '@components': path.resolve(__dirname, 'src/components'),
        '@store': path.resolve(__dirname, 'src/store'),
        '@theme': path.resolve(__dirname, 'src/theme'),
        '@utils': path.resolve(__dirname, 'src/utils'),
        '@constants': path.resolve(__dirname, 'src/constants'),
        '@assets': path.resolve(__dirname, 'src/assets'),
      })
    )(config, env)
  );
};
