const { defineConfig } = require("cypress");

module.exports = defineConfig({
    e2e: {
        baseUrl: "http://localhost:3000",
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
    },
    viewportWidth: 1920,
    viewportHeight: 1080,
    video: true,
    defaultCommandTimeout: 10000, // Set the default command timeout to 10 seconds
    requestTimeout: 10000, // Set the request timeout for network requests to 15 seconds
});
