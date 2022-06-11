const { Builder, By, Key, until } = require("selenium-webdriver");
const assert = require("assert");
const { WebElement } = require("selenium-webdriver");

const sleep = (milliseconds) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

async function doctorFormerAppInfo() {
  let driver = await new Builder().forBrowser("chrome").build();
  let mail = "robert.b.weide@mail.com";
  let password = "test123";
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
    console.log("Doctor login passed\n");

    let name = await driver.findElement(By.id("userMail")).getText();

    // correct email check
    assert.equal(mail, name);
    console.log("\nCorrect doctor logged\n");
    let el = driver.findElement(By.id("logoutButton"));
    await driver.findElement(By.id("menu")).click();
    await sleep(1000);
    await driver
      .findElement(By.xpath("//*[text()='Former Appointments']"))
      .click();
    await sleep(2000);

    var table = await driver.findElement(By.id("tableID"));
    var list = await table.findElements(By.css("tr"));

    console.log("\nTable found\n");
    driver
      .findElement(
        By.xpath("//*[@id='tableID']/tbody/tr[1]/td[6]/div/div/div/button")
      )
      .click();

    await sleep(2000);

    var inList = [
      "vaccineName",
      "vaccineCompany",
      "vaccineVirus",
      "whichVaccineDose",
      "appointmentId",
      "patientFirstName",
      "patientLastName",
      "PESEL",
      "state",
      "batchNumber",
      "from",
      "to",
    ];

    for (var i = 0; i < inList.length; i++) {
      tmp = await driver.findElement(By.id(inList[i])).getAttribute("value");

      console.log("Checking: " + tmp);
      if (inList[i] == "batchNumber") continue;
      if (tmp.trim() == "") {
        assert.fail(inList[i] + "is empty");
      }
      await sleep(1000);
    }

    //
    actualUrl = await driver.getCurrentUrl();
    expectedUrl = "http://localhost:3000/doctor/formerAppointments";
    assert.equal(expectedUrl, actualUrl);
    console.log("Doctor Former Appointments info test passed");
  } catch (error) {
    console.log(error);
    console.log("Doctor Former Appointments info test failed");
  } finally {
    await driver.quit();
  }
}

doctorFormerAppInfo();