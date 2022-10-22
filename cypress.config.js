const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin =
  require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin =
  require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;

module.exports = defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
      });

      on("file:preprocessor", bundler);
      await addCucumberPreprocessorPlugin(on, config);

      return config;
    },
    experimentalStudio: true,
    baseUrl: "https://demoqa.com",
    defaultCommandTimeout: 10000,
    specPattern: [
      "cypress/e2e/features/*.feature",
      "cypress/e2e/features/*/*.feature"],
    viewportWidth: 1280, //macbook-13
    viewportHeight: 800,
    chromeWebSecurity: false
  }
});