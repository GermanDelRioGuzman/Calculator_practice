const { Builder, By, Key, until } = require('selenium-webdriver');
const assert = require('assert');
const fs = require('fs');

describe('Prueba de UI con Selenium', function () {
    

    let driver;

    beforeEach(async function () {
        const chrome = require('selenium-webdriver/chrome');
        const options = new chrome.Options();
        options.addArguments('--headless', '--no-sandbox', '--disable-dev-shm-usage');

        driver = await new Builder().forBrowser('chrome').setChromeOptions(options).build();
    });

    afterEach(async function () {
        if (driver) {
            const screenshotDir = './tests/screenshots';
            if (!fs.existsSync(screenshotDir)) {
                fs.mkdirSync(screenshotDir, { recursive: true });
            }
            const screenshot = await driver.takeScreenshot();
            fs.writeFileSync(`${screenshotDir}/test1.png`, screenshot, 'base64');
            await driver.quit();
        }
    });

    it('Debe ingresar valores en un formulario y hacer clic en un botón', async function () {
        await driver.get("http://localhost:8000/");

        await driver.manage().window().setRect({ width: 1050, height: 652 });

        await driver.findElement(By.id("num1")).sendKeys("5");
        await driver.findElement(By.id("num2")).sendKeys("3");

        await driver.findElement(By.css("button")).click();

        const resultado = await driver.findElement(By.id("result")).getText();
        assert.strictEqual(resultado, "8");
    });
});
