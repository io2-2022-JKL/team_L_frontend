const { Builder, By, Key, until } = require("selenium-webdriver");
const assert = require("assert");
const { WebElement } = require("selenium-webdriver");

const sleep = (milliseconds) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

async function doctorFormerAppInfo(mail, password, url) {
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
    let el = driver.findElement(By.id("logoutButton"));
    await driver.findElement(By.id("menu")).click();
    await sleep(2000);

    await driver
      .findElement(By.xpath("//*[text()='Former Appointments']"))
      .click();
    await sleep(2000);

    ta = await driver.findElement(By.id("tableID"));
    rows = await ta.findElements(By.css("tr"));
    if (rows.length > 1) {
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
      expectedUrl = url + "/doctor/formerAppointments";
      assert.equal(expectedUrl, actualUrl);
    } else {
      let error = await driver
        .findElement(By.xpath("//*[@id='root']/div/div[2]/section/p"))
        .getText();
      if (error != "Not Found") {
        assert.fail();
      }
    }
    console.log("Doctor Former Appointments info test passed");
  } catch (error) {
    console.log(error);
    console.log("Doctor Former Appointments info test failed");
  } finally {
    await driver.quit();
  }
}

doctorFormerAppInfo(
  "robert.b.weide@mail.com",
  "test123",
  "https://teamlvaccinationsystem.surge.sh"
);
