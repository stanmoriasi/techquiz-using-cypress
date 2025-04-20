import { defineConfig } from "cypress";

export default defineConfig({
  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
    setupNodeEvents(on, config) {
      on("before:browser:launch", (browser, launchOptions) => {
        if (
          browser.name === "chrome" ||
          browser.name === "chromium" ||
          browser.name === "electron"
        ) {
          launchOptions.args.push("--disable-dev-shm-usage");
          launchOptions.args.push("--disable-gpu");
          launchOptions.args.push("--no-sandbox");
          return launchOptions;
        }
      });
      return config;
    },
  },
  e2e: {
    baseUrl: "http://localhost:3001",
    setupNodeEvents(on, config) {
      on("before:browser:launch", (browser, launchOptions) => {
        if (
          browser.name === "chrome" ||
          browser.name === "chromium" ||
          browser.name === "electron"
        ) {
          launchOptions.args.push("--disable-dev-shm-usage");
          launchOptions.args.push("--disable-gpu");
          launchOptions.args.push("--no-sandbox");
          return launchOptions;
        }
      });
      return config;
    },
  },
});