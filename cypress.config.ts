/// <reference types='cypress-tags' />
import {defineConfig} from "cypress";
import {addXrayResultUpload, configureXrayPlugin} from "cypress-xray-plugin";
import "cypress-xray-plugin/register";
import {DEVICES} from "./cypress/support/Enums/Devices";
import * as dotenv from "dotenv";
import {tagify} from "cypress-tags";

dotenv.config();

export default defineConfig({
    projectId: process.env.PROJECT_ID,
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
        baseUrl: process.env.LOCAL_RUN == 'true' ?  'http://localhost:3000' : 'https://full-stack-automators.github.io/web-coworking-spaces-app/',
        setupNodeEvents(on, config) {
            on('file:preprocessor', tagify(config));
            on('task', {
                log (message) {
                    console.log(message)
                    return null
                }
            });
            if (process.env.XRAY_RUN == 'true') {
                let currentDate = new Date()
                let modifiedDate = currentDate.getDate() + "/"
                    + (currentDate.getMonth() + 1) + "/"
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
            }
            const device = process.env.DEVICE || 'DESKTOP';
            config.env.deviceType = DEVICES[device].deviceType;
            config.env.deviceName = DEVICES[device].name;
            config.env.isMobile = config.env.deviceType === 'mobile';
            config.env.isTablet = config.env.deviceType === 'tablet';
            config.viewportWidth = DEVICES[device].viewportWidth;
            config.viewportHeight = DEVICES[device].viewportHeight;
            return config;
        },
        specPattern: 'cypress/integration/**',
        supportFile: './cypress/support/index.ts'
    },
    env: {
        XRAY_CLIENT_ID: process.env.XRAY_CLIENT_ID,
        XRAY_CLIENT_SECRET: process.env.XRAY_CLIENT_SECRET,
        JIRA_USERNAME: process.env.JIRA_USERNAME,
        JIRA_API_TOKEN: process.env.JIRA_API_TOKEN,
        OS: process.env.OS,
        VERSION: process.env.VERSION,
        BROWSER: process.env.BROWSER,
    }
});
