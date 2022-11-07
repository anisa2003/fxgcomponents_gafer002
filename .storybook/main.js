module.exports = {
  stories: [
    "../**/*.stories.mdx",
    "../**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  framework: "@storybook/react",
  staticDirs: [{ from: '../src/assets', to: '/assets' }]
};