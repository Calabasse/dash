// Browser tests R1-R7. Run from tests/: npx playwright test
const path = require('path');
const { defineConfig } = require('@playwright/test');
const { PORT } = require('./browser/helpers.cjs');

module.exports = defineConfig({
  testDir: './browser',
  testMatch: /.*\.spec\.cjs$/,
  // R7 compares against the committed pre-change screenshots in tests/fixtures/.
  snapshotPathTemplate: '{testDir}/../fixtures/{arg}{ext}',
  updateSnapshots: 'none',
  workers: 1,
  reporter: [['list']],
  use: { baseURL: `http://127.0.0.1:${PORT}`, deviceScaleFactor: 1 },
  projects: [
    { name: 'w390', use: { viewport: { width: 390, height: 844 } } },
    { name: 'w1440', use: { viewport: { width: 1440, height: 900 } } },
  ],
  webServer: {
    command: `python3 -m http.server ${PORT} --bind 127.0.0.1`,
    cwd: path.join(__dirname, '..'),
    url: `http://127.0.0.1:${PORT}/tracker.html`,
    reuseExistingServer: true,
  },
});
