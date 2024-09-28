const { defineConfig } = require("cypress");

module.exports = defineConfig({
  watchForFileChanges: false,
  chromeWebSecurity: false,
  reporter: "cypress-mochawesome-reporter",

  video: true,

  reporterOptions: {
    charts: true,

    reportPageTitle: "Cypress Inline Reporter",

    embeddedScreenshots: true,

    inlineAssets: true, //Adds the asserts inline
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here

      require("cypress-mochawesome-reporter/plugin")(on);
    },
    experimentalStudio: true,
  },
});
