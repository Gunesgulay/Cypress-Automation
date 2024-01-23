const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "169cij",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
