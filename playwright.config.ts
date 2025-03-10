import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './test', 
  timeout: 60000, 
  expect: {
    timeout: 5000, 
  },
  reporter: [['html', { outputFolder: 'playwright-report' }], ['json', { outputFile: 'test-results.json' }]],
  use: {
    baseURL: 'https://demoqa.com/', 
    headless: true, 
    screenshot: 'on', 
    video: 'on-first-retry', 
    trace: 'on-first-retry', 
    browserName: 'chromium', 
  },
  projects: [
    {
      name: 'chromium',
      use: { browserName: 'chromium' },
    },
    {
      name: 'firefox',
      use: { browserName: 'firefox' },
    },
  ],
});
