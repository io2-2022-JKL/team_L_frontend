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
    await sleep(5000);

    let actualUrl = await driver.getCurrentUrl();
    assert.equal(actualUrl, expectedUrl);
    console.log("Patient login passed");

    let name = await driver.findElement(By.id("userMail")).getText();

    // correct email check
    assert.equal(mail, name);
    console.log("Patient login test passed");
  } catch (error) {
    console.log(error);
    console.log("Patient login test failed");
  } finally {
    await driver.quit();
  }
}

async function doctorLogin() {
  let mail = "robert.b.weide@mail.com";
  let password = "test123";
  let driver = await new Builder().forBrowser("chrome").build();
  try {
    driver.manage().setTimeouts({ implicit: 10 });
    await driver.get("http://localhost:3000/login");
    await driver.findElement(By.id("email")).sendKeys(mail, Key.RETURN);
    await driver.findElement(By.id("password")).sendKeys(password, Key.RETURN);
    await driver.findElement(By.id("loginButton")).click();

    let expectedUrl = "http://localhost:3000/doctor";
    await sleep(5000);

    let actualUrl = await driver.getCurrentUrl();
    assert.equal(actualUrl, expectedUrl);
    console.log("Doctor login passed");

    let name = await driver.findElement(By.id("userMail")).getText();

    // correct email check
    assert.equal(mail, name);
    console.log("Doctor login test passed");
  } catch (error) {
    console.log(error);
    console.log("Doctor login test failed");
  } finally {
    await driver.quit();
  }
}

async function adminLogin() {
  let mail = "superadmin@mail.com";
  let password = "test123";
  let driver = await new Builder().forBrowser("chrome").build();
  try {
    driver.manage().setTimeouts({ implicit: 10 });
    await driver.get("http://localhost:3000/login");
    await driver.findElement(By.id("email")).sendKeys(mail, Key.RETURN);
    await driver.findElement(By.id("password")).sendKeys(password, Key.RETURN);
    await driver.findElement(By.id("loginButton")).click();

    let expectedUrl = "http://localhost:3000/admin";
    await sleep(5000);

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
  let mail = "wrong@mail.com";
  let password = "wrong@mail.com";
  let driver = await new Builder().forBrowser("chrome").build();
  try {
    driver.manage().setTimeouts({ implicit: 10 });
    await driver.get("http://localhost:3000/login");
    await driver.findElement(By.id("email")).sendKeys(mail, Key.RETURN);
    await driver.findElement(By.id("password")).sendKeys(password, Key.RETURN);
    await driver.findElement(By.id("loginButton")).click();

    let expectedUrlpatient = "http://localhost:3000/patient";
    let expectedUrldoctor = "http://localhost:3000/doctor";
    let expectedUrladmin = "http://localhost:3000/admin";
    await sleep(5000); //
    let expectedUrl = "http://localhost:3000/login";
    let actualUrl = await driver.getCurrentUrl();
    assert.equal(actualUrl, expectedUrl);
    let error = await driver
      .findElement(By.xpath("//*[@id='root']/div/div/div/p"))
      .getText();

    assert.equal(error, "Bad Request");
    console.log("\nWrong login test passed\n");
  } catch (error) {
    console.log(error);
    console.log("\nWrong login test failed\n");
  } finally {
    driver.quit();
  }
}

userLogin();
doctorLogin();
adminLogin();
wrongData();
