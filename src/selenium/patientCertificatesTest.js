const { Builder, By, Key, until } = require("selenium-webdriver");
const assert = require("assert");
const { WebElement } = require("selenium-webdriver");

const sleep = (milliseconds) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

async function Certyficates(mail, password) {
  let driver = await new Builder().forBrowser("chrome").build();
  try {
    driver.manage().setTimeouts({ implicit: 10 });
    await driver.get("http://localhost:3000/login");
    await driver.findElement(By.id("email")).sendKeys(mail, Key.RETURN);
    await driver.findElement(By.id("password")).sendKeys(password, Key.RETURN);
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
    await sleep(1000); // 1s wait
    await driver.findElement(By.xpath("//*[text()='Certificates']")).click();
    await sleep(2000);

    ta = await driver.findElement(By.id("tableID"));
    rows = await ta.findElements(By.css("tr"));
    if (rows.length > 1) {
      driver
        .findElement(
          By.xpath("//*[@id='tableID']/tbody/tr/td[4]/div/div/div/button")
        )
        .click();

      await sleep(2000);

      var inList = ["url", "vaccineName", "vaccineCompany", "virusType"];

      for (var i = 0; i < inList.length; i++) {
        tmp = await driver.findElement(By.id(inList[i])).getAttribute("value");

        console.log("Checking: " + tmp);
        if (tmp.trim() == "") {
          assert.fail("inList[i] is empty");
        }
        await sleep(1000);
      }

      actualUrl = await driver.getCurrentUrl();
      expectedUrl = "http://localhost:3000/patient/certificates";
      assert.equal(expectedUrl, actualUrl);
    } else {
      let error = await driver
        .findElement(By.xpath("//*[@id='root']/div/div[2]/section/p"))
        .getText();
      if (error != "Not Found") {
        assert.fail();
      }
    }
    console.log("Certificates info test passed");
  } catch (error) {
    console.log(error);
    console.log("Certificates info test failed");
  } finally {
    await driver.quit();
  }
}

Certyficates("j.nowak@mail.com", "test123");
