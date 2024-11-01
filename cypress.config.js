const { defineConfig } = require("cypress");
const  {configureAllureAdapterPlugins} = require ('@mmisty/cypress-allure-adapter/plugins');

module.exports = defineConfig({
  retries: 1,
  video: true,
  screenshotOnRunFailure: true,
  e2e: {
    baseUrl: 'https://petstore.swagger.io/v2',
    setupNodeEvents(on, config) {
      configureAllureAdapterPlugins(on, config);
      return config;
    },
  },
});
