const { Builder, By, Key, until } = require("selenium-webdriver");
const assert = require("assert");

const sleep = (milliseconds) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

async function userLogin() {
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
  } catch (error) {
    console.log(error);
    console.log("\nPatient login test failed\n");
  } finally {
    await driver.quit();
  }
}

async function doctorLogin() {
  let driver = await new Builder().forBrowser("chrome").build();
  try {
    let mail = "robert.b.weide@mail.com";
    driver.manage().setTimeouts({ implicit: 10 });
    await driver.get("http://localhost:3000/login");
    await driver.findElement(By.id("email")).sendKeys(mail, Key.RETURN);
    await driver.findElement(By.id("password")).sendKeys("test123", Key.RETURN);
    await driver.findElement(By.id("loginButton")).click();

    let expectedUrl = "http://localhost:3000/doctor";
    await sleep(5000); // 5s wait

    let actualUrl = await driver.getCurrentUrl();
    assert.equal(actualUrl, expectedUrl);
    console.log("\nDoctor login passed\n");

    let name = await driver.findElement(By.id("userMail")).getText();

    // correct email check
    assert.equal(mail, name);
    console.log("\nCorrect doctor logged\n");
  } catch (error) {
    console.log(error);
    console.log("\nDoctor login test failed\n");
  } finally {
    await driver.quit();
  }
}

async function adminLogin() {
  let driver = await new Builder().forBrowser("chrome").build();
  try {
    let mail = "superadmin@mail.com";
    driver.manage().setTimeouts({ implicit: 10 });
    await driver.get("http://localhost:3000/login");
    await driver.findElement(By.id("email")).sendKeys(mail, Key.RETURN);
    await driver.findElement(By.id("password")).sendKeys("test123", Key.RETURN);
    await driver.findElement(By.id("loginButton")).click();

    let expectedUrl = "http://localhost:3000/admin";
    await sleep(5000); // 5s wait

    let actualUrl = await driver.getCurrentUrl();
    assert.equal(actualUrl, expectedUrl);
    console.log("\nAdmin login test passed\n");
  } catch (error) {
    console.log(error);
    console.log("\nAdmin login test failed\n");
  } finally {
    await driver.quit();
  }
}

async function wrongData() {
  let driver = await new Builder().forBrowser("chrome").build();
  try {
    let mail = "wrong@mail.com";

    driver.manage().setTimeouts({ implicit: 10 });
    await driver.get("http://localhost:3000/login");
    await driver.findElement(By.id("email")).sendKeys(mail, Key.RETURN);
    await driver
      .findElement(By.id("password"))
      .sendKeys("wrongPassword", Key.RETURN);
    await driver.findElement(By.id("loginButton")).click();

    let expectedUrl = "http://localhost:3000/patient";
    await sleep(5000); // 5s wait

    let actualUrl = await driver.getCurrentUrl();
    assert.equal(actualUrl, expectedUrl);
    console.log("\nWrong login test failed\n");
  } catch (error) {
    console.log(error);
    console.log("\nWrong login test passed\n");
  } finally {
    driver.quit();
  }
}

userLogin();
doctorLogin();
adminLogin();
wrongData();
