const { Builder, By, Key, until } = require("selenium-webdriver");
const assert = require("assert");
const randomstring = require("randomstring");

const sleep = (milliseconds) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

async function register() {
  let driver = await new Builder().forBrowser("chrome").build();
  let name = "Adam";
  let surname = "Adamczyk";
  let email = "testSelenium@gmail.com";
  let date = "01.06.2001";
  let pesel = "54051837122";
  let phone = "123456789";
  let password = "test123";
  try {
    driver.manage().setTimeouts({ implicit: 10 });
    await driver.get("http://localhost:3000/login");
    await sleep(1000);
    await driver
      .findElement(By.xpath("//*[@id='root']/div/div/div/div/a"))
      .click();
    await sleep(1000);
    await driver.findElement(By.id("names")).sendKeys(name, Key.RETURN);
    await driver.findElement(By.id("surname")).sendKeys(surname, Key.RETURN);
    await driver.findElement(By.id("email")).sendKeys(email, Key.RETURN);
    await driver.findElement(By.id("dateOfBirth")).sendKeys(date, Key.RETURN);
    await driver.findElement(By.id("pesel")).sendKeys(email, Key.RETURN);
    await driver.findElement(By.id("phone_number")).sendKeys(phone, Key.RETURN);
    await driver.findElement(By.id("password")).sendKeys(password, Key.RETURN);
    await sleep(5000);

    let expectedUrl = "http://localhost:3000/login";
    let actualUrl = await driver.getCurrentUrl();
    assert.equal(actualUrl, expectedUrl);

    await driver.findElement(By.id("email")).sendKeys(mail, Key.RETURN);
    await driver.findElement(By.id("password")).sendKeys("test123", Key.RETURN);
    await driver.findElement(By.id("loginButton")).click();
    sleep(2000);

    expectedUrl = "http://localhost:3000/patient";
    actualUrl = await driver.getCurrentUrl();
    assert.equal(actualUrl, expectedUrl);

    console.log("Register test failed");
  } catch (error) {
    console.log(error);
    console.log("Register test passed");
  } finally {
    await driver.quit();
  }
}

async function registerNewRandom() {
  let driver = await new Builder().forBrowser("chrome").build();
  let name = randomstring.generate(7);
  let surname = randomstring.generate(7);
  let email = randomstring.generate(10) + "@gmail.com";
  let date = "01.06.2001";
  let pesel = "54051837122";
  let phone = "123456789";
  let password = "test123";
  try {
    driver.manage().setTimeouts({ implicit: 10 });
    await driver.get("http://localhost:3000/login");
    await sleep(1000);
    await driver
      .findElement(By.xpath("//*[@id='root']/div/div/div/div/a"))
      .click();
    await sleep(1000);
    await driver.findElement(By.id("names")).sendKeys(name, Key.RETURN);
    await driver.findElement(By.id("surname")).sendKeys(surname, Key.RETURN);
    await driver.findElement(By.id("email")).sendKeys(email, Key.RETURN);
    await driver.findElement(By.id("dateOfBirth")).sendKeys(date, Key.RETURN);
    await driver.findElement(By.id("pesel")).sendKeys(email, Key.RETURN);
    await driver.findElement(By.id("phone_number")).sendKeys(phone, Key.RETURN);
    await driver.findElement(By.id("password")).sendKeys(password, Key.RETURN);
    await sleep(5000);

    let expectedUrl = "http://localhost:3000/login";
    let actualUrl = await driver.getCurrentUrl();
    assert.equal(actualUrl, expectedUrl);

    await driver.findElement(By.id("email")).sendKeys(email, Key.RETURN);
    await driver.findElement(By.id("password")).sendKeys(password, Key.RETURN);
    await driver.findElement(By.id("loginButton")).click();
    await sleep(2000);

    expectedUrl = "http://localhost:3000/patient";
    actualUrl = await driver.getCurrentUrl();
    assert.equal(actualUrl, expectedUrl);

    console.log("Register random test passed");
  } catch (error) {
    console.log(error);
    console.log("Register random test failed");
  } finally {
    await driver.quit();
  }
}

register();
registerNewRandom();
