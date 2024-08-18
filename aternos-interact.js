const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: false }); // Set headless to false for debugging
  const page = await browser.newPage();

  // Navigate to Aternos login page
  await page.goto('https://aternos.org/signin');

  // Log in (replace with actual credentials)
  await page.type('gitstart', process.env.ATERNOS_USERNAME); // Use environment variables for security
  await page.type('gstart1', process.env.ATERNOS_PASSWORD);
  await page.click('#login-button');
  await page.waitForNavigation();

  // Navigate to the server page
  await page.goto('https://aternos.org/server');
  
  // Click on the "Start" button (you may need to adjust the selector)
  await page.click('button.start'); // Adjust selector if needed
  console.log('Starting server...');
  
  // Wait for server to start
  await page.waitForSelector('#status', { visible: true }); // Adjust selector based on actual server status

  console.log('Server started successfully');
  
  await browser.close();
})();
