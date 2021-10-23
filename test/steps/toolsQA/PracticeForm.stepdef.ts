import { Given, Then, When } from "@cucumber/cucumber";
import { AppPage } from "src/app";

const app = new AppPage();
const address = 'This is an address'

Given(/^user is on the Practice Form page$/, async () => {
    await app.practiceFormPage.open(app.practiceFormPage.pageURL);
    await browser.pause(2000)
});

When(/^user input text to Current Address$/, async () => {
    await app.practiceFormPage.inputCurrentAddress(address)
    await app.practiceFormPage.getAttribute();
    await browser.pause(3000)
});

Then(/^I should see the inpputed text on Current Address text area$/, async () => {
    let currentText = await app.practiceFormPage.getInputtedAddess();
    let expectText = address;
    console.log('currentText', currentText);
    console.log('expectText', expectText);
    expect(await app.practiceFormPage.getInputtedAddess()).toEqual(address);
    browser.pause(5000);
});
