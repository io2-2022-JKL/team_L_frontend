const { Builder, By, Key, until } = require("selenium-webdriver");
const assert = require("assert");

const sleep = (milliseconds) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

async function logoutTest() {
  let driver = await new Builder().forBrowser("chrome").build();
  try {
    let mail = "j.nowak@mail.com";
    driver.manage().setTimeouts({ implicit: 10 });
    await driver.get("http://localhost:3000/login");
    await driver.findElement(By.id("email")).sendKeys(mail, Key.RETURN);
    await driver.findElement(By.id("password")).sendKeys("test123", Key.RETURN);
    await driver.findElement(By.id("loginButton")).click();

    let expectedUrl = "http://localhost:3000/patient";
    await sleep(5000); // 5s wait

    let actualUrl = await driver.getCurrentUrl();
    assert.equal(actualUrl, expectedUrl);
    console.log("\nPatient login passed\n");

    let name = await driver.findElement(By.id("userMail")).getText();

    // correct email check
    assert.equal(mail, name);
    console.log("\nCorrect patient logged\n");
    let el = driver.findElement(By.id("logoutButton"));
    await driver.findElement(By.id("menu")).click();
    await sleep(1000); // 5s wait
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

logoutTest();
