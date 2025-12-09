import { defineConfig, devices } from '@playwright/test';

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig( {
  testDir: './tests/',
  timeout: 30 * 1000,
  expect: {
    timeout: 25000,
    toHaveScreenshot: { maxDiffPixels: 60 },
  },

  /* Opt out of parallel tests on CI. */
  workers: 1,
  
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://127.0.0.1:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on',
  },

  //retries: process.env.CI ? 2 : 0,
  reporter: [
    [ 'list' ],
    [
      'html',
      {
        outputFolder: 'playwright-results/',
        open: 'always',
      },
    ],
  ],
  /* Configure projects for major browsers */
  projects: [ {
    name: 'Google Chrome',
    use: { ...devices[ 'Desktop Chrome' ], channel: 'chrome' },
  }
    // {
    //   name: 'chromium',
    //   use: { ...devices['Desktop Chrome'] },
    // }

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
  ],
} );