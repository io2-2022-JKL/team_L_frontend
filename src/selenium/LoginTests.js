const { Builder, By, Key, until } = require("selenium-webdriver");
const assert = require("assert");

const sleep = (milliseconds) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

async function userLogin(mail, password, url) {
  let driver = await new Builder().forBrowser("chrome").build();
  try {
    driver.manage().setTimeouts({ implicit: 10 });
    await driver.get(url + "/login");
    await driver.findElement(By.id("email")).sendKeys(mail, Key.RETURN);
    await driver.findElement(By.id("password")).sendKeys(password, Key.RETURN);
    await driver.findElement(By.id("loginButton")).click();

    let expectedUrl = url + "/patient";
    await sleep(5000);

    let actualUrl = await driver.getCurrentUrl();
    assert.equal(actualUrl, expectedUrl);
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

async function doctorLogin(mail, password, url) {
  let driver = await new Builder().forBrowser("chrome").build();
  try {
    driver.manage().setTimeouts({ implicit: 10 });
    await driver.get(url + "/login");
    await driver.findElement(By.id("email")).sendKeys(mail, Key.RETURN);
    await driver.findElement(By.id("password")).sendKeys(password, Key.RETURN);
    await driver.findElement(By.id("loginButton")).click();

    let expectedUrl = url + "/doctor";
    await sleep(5000);

    let actualUrl = await driver.getCurrentUrl();
    assert.equal(actualUrl, expectedUrl);

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

async function adminLogin(mail, password, url) {
  let driver = await new Builder().forBrowser("chrome").build();
  try {
    driver.manage().setTimeouts({ implicit: 10 });
    await driver.get(url + "/login");
    await driver.findElement(By.id("email")).sendKeys(mail, Key.RETURN);
    await driver.findElement(By.id("password")).sendKeys(password, Key.RETURN);
    await driver.findElement(By.id("loginButton")).click();

    let expectedUrl = url + "/admin";
    await sleep(5000);

    let actualUrl = await driver.getCurrentUrl();
    assert.equal(actualUrl, expectedUrl);
    console.log("Admin login test passed");
  } catch (error) {
    console.log(error);
    console.log("Admin login test failed");
  } finally {
    await driver.quit();
  }
}

async function wrongData(mail, password, url) {
  let driver = await new Builder().forBrowser("chrome").build();
  try {
    driver.manage().setTimeouts({ implicit: 10 });
    await driver.get(url + "/login");
    await driver.findElement(By.id("email")).sendKeys(mail, Key.RETURN);
    await driver.findElement(By.id("password")).sendKeys(password, Key.RETURN);
    await driver.findElement(By.id("loginButton")).click();

    await sleep(5000); //
    let expectedUrl = url + "/login";
    let actualUrl = await driver.getCurrentUrl();
    assert.equal(actualUrl, expectedUrl);
    let error = await driver
      .findElement(By.xpath("//*[@id='root']/div/div/div/p"))
      .getText();

    assert.equal(error, "Bad Request");
    console.log("Wrong login test passed");
  } catch (error) {
    console.log(error);
    console.log("Wrong login test failed");
  } finally {
    driver.quit();
  }
}

userLogin(
  "j.nowak@mail.com",
  "test123",
  "https://teamlvaccinationsystem.surge.sh"
);
doctorLogin(
  "robert.b.weide@mail.com",
  "test123",
  "https://teamlvaccinationsystem.surge.sh"
);
adminLogin(
  "superadmin@mail.com",
  "test123",
  "https://teamlvaccinationsystem.surge.sh"
);
wrongData(
  "wrong@mail.com",
  "wrong@mail.com",
  "https://teamlvaccinationsystem.surge.sh"
);
