const { Builder, By, Key, until } = require("selenium-webdriver");
const assert = require("assert");

const sleep = (milliseconds) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

async function logoutTest(mail, password) {
  let driver = await new Builder().forBrowser("chrome").build();
  try {
    driver.manage().setTimeouts({ implicit: 10 });
    await driver.get("http://localhost:3000/login");
    await driver.findElement(By.id("email")).sendKeys(mail, Key.RETURN);
    await driver.findElement(By.id("password")).sendKeys(password, Key.RETURN);
    await driver.findElement(By.id("loginButton")).click();

    let expectedUrl = "http://localhost:3000/patient";
    await sleep(5000);

    let actualUrl = await driver.getCurrentUrl();
    assert.equal(actualUrl, expectedUrl);

    let name = await driver.findElement(By.id("userMail")).getText();

    // correct email check
    assert.equal(mail, name);
    let el = driver.findElement(By.id("logoutButton"));
    await driver.findElement(By.id("menu")).click();
    await sleep(1000);
    await driver.findElement(By.id("logoutButton")).click();
    await sleep(2000);
    actualUrl = await driver.getCurrentUrl();
    expectedUrl = "http://localhost:3000/login";
    assert.equal(expectedUrl, actualUrl);

    console.log("\nLogout test passed\n");
  } catch (error) {
    console.log(error);
    console.log("\nLogout test failed\n");
  } finally {
    await driver.quit();
  }
}

logoutTest("j.nowak@mail.com", "test123");
