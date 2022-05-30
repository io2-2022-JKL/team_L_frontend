const { Builder, By, Key, until } = require("selenium-webdriver");
const assert = require("assert");
const { WebElement } = require("selenium-webdriver");

const sleep = (milliseconds) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

async function IncApp() {
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
    await driver
      .findElement(By.xpath("//*[text()='Incoming Appointments']"))
      .click();
    await sleep(2000);

    var table = await driver.findElement(By.id("tableID"));
    var list = await table.findElements(By.css("tr"));

    console.log("\nTable found\n");

    // Iterowanie tabeli
    // for (var i = 0; i < list.length; i++) {
    //   //var cells = await list[i].findElements(By.css("td"));
    //   var cells = await list[i].findElements(By.css("td"));
    //   for (var j = 0; j < cells.length; j++) {
    //     var tmp = await cells[j].getText();

    //     console.log(tmp + "\n");
    //   }
    // }

    driver
      .findElement(
        By.xpath("//*[@id='tableID']/tbody/tr[1]/td[7]/div/div/div/button")
      )
      .click();

    await sleep(2000);

    //vaccine name
    let tmp = await driver
      .findElement(By.id("vaccineName"))
      .getAttribute("value");

    console.log("X " + tmp + " X");
    if (tmp.trim() == "") {
      assert.fail("vaccineName is empty");
    }
    await sleep(1000);

    var inList = [
      "vaccineName",
      "vaccineCompany",
      "vaccineVirus",
      "whichVaccineDose",
      "vaccinationCenterName",
      "vaccinationCenterCity",
      "vaccinationCenterStreet",
      "windowBegin",
      "windowEnd",
      "doctorFirstName",
      "doctorLastName",
    ];

    for (var i = 0; i < inList.length; i++) {
      tmp = await driver.findElement(By.id(inList[i])).getAttribute("value");

      console.log("Checking: " + tmp);
      if (tmp.trim() == "") {
        assert.fail("inList[i] is empty");
      }
      await sleep(1000);
    }

    //
    actualUrl = await driver.getCurrentUrl();
    expectedUrl = "http://localhost:3000/patient/incomingAppointments";
    assert.equal(expectedUrl, actualUrl);
    console.log("Incoming Appointments info test passed");
  } catch (error) {
    console.log(error);
    console.log("Incoming Appointments info test failed");
  } finally {
    await driver.quit();
  }
}

IncApp();
