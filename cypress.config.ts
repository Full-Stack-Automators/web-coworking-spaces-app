import {defineConfig} from "cypress";
import {addXrayResultUpload, configureXrayPlugin} from "cypress-xray-plugin";
import "cypress-xray-plugin/register";
import {DEVICES} from "./cypress/support/Enums/Devices";
import * as dotenv from "dotenv";
dotenv.config();

export default defineConfig({
  projectId: 'bg4znc',
  watchForFileChanges: false,
  retries: 0,
  video: process.env.VIDEO == 'true' ? true : false,
  videoUploadOnPasses: false,
  screenshotOnRunFailure: process.env.SCREENSHOT == 'true' ? true : false,
  videoCompression: 30,
  screenshotsFolder: 'cypress/screenshots',
  trashAssetsBeforeRuns: true,
  videosFolder: 'cypress/videos',
  defaultCommandTimeout: 20000,
  execTimeout: 20000,
  pageLoadTimeout: 30000,
  requestTimeout: 20000,
  responseTimeout: 20000,
  experimentalWebKitSupport: true,

  e2e: {
    // baseUrl: 'http://localhost:3000',
    baseUrl: 'https://full-stack-automators.github.io/web-coworking-spaces-app/',
    setupNodeEvents(on, config) {
      let currentDate = new Date()
      let modifiedDate = currentDate.getDate() + "/"
          + (currentDate.getMonth()+1) + "/"
          + currentDate.getFullYear() + " - "
          + currentDate.getHours() + ":"
          + currentDate.getMinutes();

      configureXrayPlugin(
          config,
          {
            jira: {
              projectKey: 'WEBC',
              url: 'https://fullstackautomators.atlassian.net/',
              testExecutionIssueSummary: ` ${process.env.RUN_NAME} ${modifiedDate}`
            }
          }
      );
      addXrayResultUpload(on);
      const device = process.env.DEVICE || 'IPHONE_12_PRO';
      config.env.deviceType = DEVICES[device].deviceType;
      config.env.isMobile = config.env.deviceType === 'mobile';
      config.env.isTablet = config.env.deviceType === 'tablet';
      config.viewportWidth = DEVICES[device].viewportWidth;
      config.viewportHeight = DEVICES[device].viewportHeight;
      return config;
    },
    specPattern: 'cypress/integration/Home**',
  },
  env: {
    XRAY_CLIENT_ID: process.env.XRAY_CLIENT_ID,
    // XRAY_CLIENT_ID: "402C4276B9614A70BE3D9E24AA1F459F",
    XRAY_CLIENT_SECRET: process.env.XRAY_CLIENT_SECRET,
    // XRAY_CLIENT_SECRET: "e4abcdf917230e9d9fc2ec129f0ced46ceb26ae609c59a09e11d2735dc8fdb59",
    JIRA_USERNAME: 'admin@fullstackautomators.com',
    JIRA_API_TOKEN: process.env.JIRA_API_TOKEN,
    // JIRA_API_TOKEN: "ATATT3xFfGF0JeEugYiUwaMopo-Yv43YRZY_cxbEeS5YRSOotohhtWwNYjT3clafTMxvmEXE0hJ7NGEUZztsCZSSZmyyUXSm47jFPlSdE7Iv7ghisyvuojgw4lDMDXQktXXKfa4VSYwOvS29JQ_lM2qjDoTbfLm86aZi8gLk5hDO20gIPhKzUSs=214994BF",
  }
});
