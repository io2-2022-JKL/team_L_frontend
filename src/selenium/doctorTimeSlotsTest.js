const { Builder, By, Key, until } = require("selenium-webdriver");
const assert = require("assert");
const { WebElement } = require("selenium-webdriver");

const sleep = (milliseconds) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

async function doctorTimeSlots() {
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
    await sleep(5000); // 5s wait

    let actualUrl = await driver.getCurrentUrl();
    assert.equal(actualUrl, expectedUrl);
    console.log("Doctor login passed\n");

    let name = await driver.findElement(By.id("userMail")).getText();

    // correct email check
    assert.equal(mail, name);
    console.log("\nCorrect doctor logged\n");
    let el = driver.findElement(By.id("logoutButton"));
    await driver.findElement(By.id("menu")).click();
    await sleep(1000); // 5s wait
    await driver.findElement(By.xpath("//*[text()='Time Slots']")).click();
    await sleep(2000);

    await driver
      .findElement(By.xpath("//*[@id='root']/div/div[2]/div/div/div[1]/button"))
      .click();
    await sleep(2000);
    await driver
      .findElement(By.id("windowBegin"))
      .sendKeys("01.01.2023 11:30", Key.RETURN);
    await driver
      .findElement(By.id("windowEnd"))
      .sendKeys("01.01.2023   12:30", Key.RETURN);
    //await driver
    //  .findElement(By.id("timeSlotDurationInMinutes"))
    //  .sendKeys("30", Key.RETURN);
    await sleep(2000);

    console.log("Time slot add test passed");
  } catch (error) {
    console.log(error);
    console.log("Time slot add test failed");
  } finally {
    await driver.quit();
  }
}

doctorTimeSlots();
