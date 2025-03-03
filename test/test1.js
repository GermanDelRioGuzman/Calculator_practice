const { Builder, By, until } = require('selenium-webdriver');
const assert = require('assert');
const fs = require('fs');

describe('Pruebas de Resta en la Calculadora', function () {
    
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
            fs.writeFileSync(`${screenshotDir}/test_${Date.now()}.png`, screenshot, 'base64');
            await driver.quit();
        }
    });

    // 🔹 1️⃣ Resta de dos números positivos
    it('Resta de dos números positivos', async function () {
        await driver.get("http://localhost:8000/");
        await driver.wait(until.elementLocated(By.id("num1")), 5000);

        await driver.findElement(By.id("num1")).sendKeys("8");
        await driver.findElement(By.id("num2")).sendKeys("3");

        await driver.findElement(By.css(".button_substract")).click();

        const resultado = await driver.findElement(By.id("result")).getText();
        assert.strictEqual(resultado.trim(), "5");
    });

    // 🔹 2️⃣ Resta de dos números negativos
    it('Resta de dos números negativos', async function () {
        await driver.get("http://localhost:8000/");
        await driver.wait(until.elementLocated(By.id("num1")), 5000);

        await driver.findElement(By.id("num1")).sendKeys("-8");
        await driver.findElement(By.id("num2")).sendKeys("-3");

        await driver.findElement(By.css(".button_substract")).click();

        const resultado = await driver.findElement(By.id("result")).getText();
        assert.strictEqual(resultado.trim(), "-5");
    });

    // 🔹 3️⃣ Resta con cero como minuendo
    it('Resta con cero como minuendo', async function () {
        await driver.get("http://localhost:8000/");
        await driver.wait(until.elementLocated(By.id("num1")), 5000);

        await driver.findElement(By.id("num1")).sendKeys("0");
        await driver.findElement(By.id("num2")).sendKeys("5");

        await driver.findElement(By.css(".button_substract")).click();

        const resultado = await driver.findElement(By.id("result")).getText();
        assert.strictEqual(resultado.trim(), "-5");
    });

    // 🔹 4️⃣ Resta con cero como sustraendo
    it('Resta con cero como sustraendo', async function () {
        await driver.get("http://localhost:8000/");
        await driver.wait(until.elementLocated(By.id("num1")), 5000);

        await driver.findElement(By.id("num1")).sendKeys("5");
        await driver.findElement(By.id("num2")).sendKeys("0");

        await driver.findElement(By.css(".button_substract")).click();

        const resultado = await driver.findElement(By.id("result")).getText();
        assert.strictEqual(resultado.trim(), "5");
    });

    // 🔹 5️⃣ Resta de dos ceros
    it('Resta de dos ceros', async function () {
        await driver.get("http://localhost:8000/");
        await driver.wait(until.elementLocated(By.id("num1")), 5000);

        await driver.findElement(By.id("num1")).sendKeys("0");
        await driver.findElement(By.id("num2")).sendKeys("0");

        await driver.findElement(By.css(".button_substract")).click();

        const resultado = await driver.findElement(By.id("result")).getText();
        assert.strictEqual(resultado.trim(), "0");
    });

    // 🔹 6️⃣ Resta con números decimales
    it('Resta con números decimales', async function () {
        await driver.get("http://localhost:8000/");
        await driver.wait(until.elementLocated(By.id("num1")), 5000);

        await driver.findElement(By.id("num1")).sendKeys("5.5");
        await driver.findElement(By.id("num2")).sendKeys("2.2");

        await driver.findElement(By.css(".button_substract")).click();

        const resultado = await driver.findElement(By.id("result")).getText();
        assert.strictEqual(resultado.trim(), "3.3");
    });

    // 🔹 7️⃣ Resta con un número negativo y un número positivo
    it('Resta con un número negativo y un número positivo', async function () {
        await driver.get("http://localhost:8000/");
        await driver.wait(until.elementLocated(By.id("num1")), 5000);

        await driver.findElement(By.id("num1")).sendKeys("-5");
        await driver.findElement(By.id("num2")).sendKeys("3");

        await driver.findElement(By.css(".button_substract")).click();

        const resultado = await driver.findElement(By.id("result")).getText();
        assert.strictEqual(resultado.trim(), "-8");
    });

});
