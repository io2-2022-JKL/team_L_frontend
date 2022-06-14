const { Builder, By, Key, until } = require("selenium-webdriver");
const assert = require("assert");
const { WebElement } = require("selenium-webdriver");
const { time } = require("console");
const randomstring = require("randomstring");

const sleep = (milliseconds) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

function getNexttime(data) {
  var endWindowtimeH = Number(data.substring(0, 2)) + 1;
  console.log(endWindowtimeH);

  var newDate;

  if (endWindowtimeH < 10) {
    newDate = "0" + String(endWindowtimeH) + current[1].substring(2);
  } else {
    newDate = String(endWindowtimeH) + current[1].substring(2);
  }
  console.log(newDate);
  return newDate;
}

function combineDateWithTimeForCheckDate(data) {
  if (!data) return;
  const array = data.Date.split(".");
  const newData = array[0] + "-" + array[1] + "-" + array[2] + "T" + data.Time;
  return newData;
}

function getTimenow() {
  var currTime = new Date().toLocaleTimeString();
  currTime = currTime.slice(0, -3);
  var currDate = new Date().toLocaleDateString({
    year: "4-digit",
    month: "2-digit",
    day: "2-digit",
  });

  return [currDate, currTime];
}

async function doctorTimeSlots() {
  let doctorMail = "robert.b.weide@mail.com";
  let docotrPassword = "test123";

  let nameReg = randomstring.generate(7);
  let surname = randomstring.generate(7);
  let userMail = randomstring.generate(10) + "@gmail.com";
  let date = "01.06.2001";
  let pesel = "54051837122";
  let phone = "123456789";
  let userPassword = "test123";

  let driver = await new Builder().forBrowser("chrome").build();
  try {
    driver.manage().setTimeouts({ implicit: 10 });
    await driver.get("http://localhost:3000/login");
    await driver.findElement(By.id("email")).sendKeys(doctorMail, Key.RETURN);
    await driver
      .findElement(By.id("password"))
      .sendKeys(docotrPassword, Key.RETURN);
    await driver.findElement(By.id("loginButton")).click();

    let expectedUrl = "http://localhost:3000/doctor";
    await sleep(5000);

    let actualUrl = await driver.getCurrentUrl();
    assert.equal(actualUrl, expectedUrl);

    let name = await driver.findElement(By.id("userMail")).getText();
    var realNameSurname = await driver
      .findElement(
        By.xpath("//*[@id='root']/div/div[2]/div/div/div[1]/div/p[1]")
      )
      .getText();
    // correct email check
    assert.equal(doctorMail, name);
    await driver.findElement(By.id("menu")).click();
    await sleep(1000); // 5s wait
    await driver.findElement(By.xpath("//*[text()='Time Slots']")).click();
    await sleep(2000);

    await driver
      .findElement(By.xpath("//*[@id='root']/div/div[2]/div/div/div[1]/button"))
      .click();
    await sleep(2000);

    current = getTimenow();
    nextTime = getNexttime(current[1]);
    console.log(current);
    console.log(nextTime);
    await driver
      .findElement(By.id("windowBegin"))
      .sendKeys(current[0], Key.RETURN);
    await driver.findElement(By.id("windowBegin")).sendKeys(Key.TAB);
    await driver
      .findElement(By.id("windowBegin"))
      .sendKeys(current[1], Key.RETURN);

    await driver
      .findElement(By.id("windowEnd"))
      .sendKeys(current[0], Key.RETURN);
    await driver.findElement(By.id("windowEnd")).sendKeys(Key.TAB, Key.RETURN);
    await driver.findElement(By.id("windowEnd")).sendKeys(nextTime, Key.RETURN);
    await driver.findElement(By.id("timeSlotDurationInMinutes")).sendKeys("50");

    await driver
      .findElement(By.xpath("/html/body/div[3]/div/div/form/div[3]/button[1]"))
      .click();

    await sleep(5000);
    await driver.findElement(By.id("menu")).click();
    await sleep(1000);
    let el = driver.findElement(By.id("logoutButton"));
    await sleep(1000);
    await driver.findElement(By.id("logoutButton")).click();
    await sleep(2000);
    actualUrl = await driver.getCurrentUrl();
    expectedUrl = "http://localhost:3000/login";
    assert.equal(expectedUrl, actualUrl);

    //new user register

    await driver
      .findElement(By.xpath("//*[@id='root']/div/div/div/div/a"))
      .click();
    await sleep(1000);
    await driver.findElement(By.id("names")).sendKeys(nameReg, Key.RETURN);
    await driver.findElement(By.id("surname")).sendKeys(surname, Key.RETURN);
    await driver.findElement(By.id("email")).sendKeys(userMail, Key.RETURN);
    await driver.findElement(By.id("dateOfBirth")).sendKeys(date, Key.RETURN);
    await driver.findElement(By.id("pesel")).sendKeys(pesel, Key.RETURN);
    await driver.findElement(By.id("phone_number")).sendKeys(phone, Key.RETURN);
    await driver
      .findElement(By.id("password"))
      .sendKeys(userPassword, Key.RETURN);
    await sleep(5000);

    expectedUrl = "http://localhost:3000/login";
    actualUrl = await driver.getCurrentUrl();
    assert.equal(actualUrl, expectedUrl);

    await driver.findElement(By.id("email")).sendKeys(userMail, Key.RETURN);
    await driver
      .findElement(By.id("password"))
      .sendKeys(userPassword, Key.RETURN);
    await driver.findElement(By.id("loginButton")).click();
    await sleep(5000);

    await driver.findElement(By.id("menu")).click();
    await sleep(1000);
    await driver
      .findElement(By.xpath("//*[@id='root']/div/div[1]/nav/ul/li[4]/a"))
      .click();
    await sleep(1000);
    var nextday = new Date();
    nextday = nextday.setDate(nextday.getDate() + 1);

    var nd = new Date(nextday).toLocaleDateString({
      year: "4-digit",
      month: "2-digit",
      day: "2-digit",
    });

    console.log(nd);
    await driver.findElement(By.id("dateFrom")).sendKeys(current[0]);
    await driver.findElement(By.id("dateTo")).sendKeys(nd);
    await sleep(3000);
    await driver
      .findElement(
        By.xpath('//*[@id="root"]/div/div[2]/div[1]/form/div[2]/button')
      )
      .click();
    await sleep(2000);
    var i = 0;
    var end = false;
    var check = current[0] + " " + current[1];
    ta = driver.findElement(By.id("tableID"));
    rows = await ta.findElements(By.css("tr"));
    console.log(rows.length);
    while (i < rows.length - 1 && !end) {
      console.log(i + " " + rows.length);
      tmp = await driver
        .findElement(
          By.xpath(
            "/html/body/div/div/div[2]/div/table/tbody/tr[" +
              (i + 1) +
              "]/td[1]"
          )
        )
        .getAttribute("innerHTML");
      console.log(tmp + "| " + check);
      if (tmp == check) {
        await driver
          .findElement(
            By.xpath(
              "//*[@id='tableID']/tbody/tr[" +
                (i + 1) +
                "]/td[4]/div/div/div[1]/button"
            )
          )
          .click();
        await sleep(1000);

        docName = await driver
          .findElement(By.id("doctorFirstName"))
          .getAttribute("value");
        docSurname = await driver
          .findElement(By.id("doctorLastName"))
          .getAttribute("value");
        if (docName + " " + docSurname == realNameSurname) {
          end = true;
        }
      }
      i++;
    }
    if (!end) {
      assert.fail();
    }
    console.log("Time slot add test passed");
  } catch (error) {
    console.log(error);
    console.log("Time slot add test failed");
  } finally {
    await driver.quit();
  }
}

doctorTimeSlots();
