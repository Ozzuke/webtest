const browserstack = require('browserstack-local');
const { Builder, By, until } = require('selenium-webdriver');
const assert = require('assert');

const capabilities = {
  'bstack:options': {
    'os': 'Windows',
    'osVersion': '10',
    'local': 'false',
    'seleniumVersion': '3.5.2',
    'userName': 'YOUR_BROWSERSTACK_USERNAME',
    'accessKey': 'YOUR_BROWSERSTACK_ACCESS_KEY'
  },
  'browserName': 'Chrome',
  'browserVersion': 'latest'
};

describe('Cross-browser compatibility tests', function() {
  let driver;
  let bsLocal;

  before(async function() {
    bsLocal = new browserstack.Local();
    await new Promise((resolve, reject) => {
      bsLocal.start({ 'key': capabilities['bstack:options'].accessKey }, function(error) {
        if (error) return reject(error);
        resolve();
      });
    });

    driver = await new Builder()
      .usingServer('http://hub-cloud.browserstack.com/wd/hub')
      .withCapabilities(capabilities)
      .build();
  });

  after(async function() {
    await driver.quit();
    await new Promise((resolve, reject) => {
      bsLocal.stop(function(error) {
        if (error) return reject(error);
        resolve();
      });
    });
  });

  it('should load the home page', async function() {
    await driver.get('http://localhost:8080');
    const title = await driver.getTitle();
    assert.strictEqual(title, 'WebDev-X');
  });

  it('should test src/components for cross-browser compatibility', async function() {
    await driver.get('http://localhost:8080');
    const header = await driver.findElement(By.tagName('header'));
    assert.ok(await header.isDisplayed());

    const footer = await driver.findElement(By.tagName('footer'));
    assert.ok(await footer.isDisplayed());

    const addPostButton = await driver.findElement(By.id('add-post-button'));
    assert.ok(await addPostButton.isDisplayed());
  });

  it('should test src/views for cross-browser compatibility', async function() {
    await driver.get('http://localhost:8080');
    const homeLink = await driver.findElement(By.linkText('Home'));
    await homeLink.click();
    await driver.wait(until.titleIs('WebDev-X'), 1000);

    const addPostLink = await driver.findElement(By.linkText('Add Post'));
    await addPostLink.click();
    await driver.wait(until.titleIs('Add Post | WebDev-X'), 1000);

    const signupLink = await driver.findElement(By.linkText('Sign Up'));
    await signupLink.click();
    await driver.wait(until.titleIs('Sign Up | WebDev-X'), 1000);
  });
});
