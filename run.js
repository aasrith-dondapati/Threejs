const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
    // Launch a browser with a visible window
    const browser = await puppeteer.launch({
        headless: false, // Set to false to see the window
        args: ['--start-maximized'] // Maximize the window
    });

    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 720 });

    // Load the local HTML file
    const filePath = `file://${path.resolve(__dirname, 'index.html')}`;
    await page.goto(filePath);

    // Keep the browser open until manually closed
    // await browser.close(); // Uncomment to auto-close after a delay
})();