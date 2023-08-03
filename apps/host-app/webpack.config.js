const { composePlugins, withNx } = require('@nx/webpack');
const { withReact } = require('@nx/react');
const { withModuleFederation } = require('@nx/react/module-federation');

const baseConfig = require('./module-federation.config');

const coreLibraries = new Set([
  'react',
  'react-dom',
  'react-router-dom',
  'styled-components',
  '@mf-nx-test/load-remote-module',
]);

const config = {
  ...baseConfig,
  shared: (libraryName, defaultConfig) => {
    if (coreLibraries.has(libraryName)) {
      return {
        ...defaultConfig,
        eager: true,
      };
    }
    // Returning false means the library is not shared.
    return false;
  },
};

// Nx plugins for webpack to build config object from Nx options and context.
module.exports = composePlugins(
  withNx(),
  withReact(),
  withModuleFederation(config)
);
