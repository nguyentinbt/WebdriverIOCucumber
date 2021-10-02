import { Given, When, Then } from "@cucumber/cucumber"
import { AppPage } from "src/app";

const app = new AppPage();

Given(/^I am on the login page$/, async () => {
    //await loginPage.openPage();
    await app.loginPage.openPage();
});


When(/^I login with (.+) and (.+)$/, async (username, password) => {
    await app.loginPage.loginToPage(username, password);
});

Then(/^I should see a flash message saying <message>$/, async () => {
    return true;
    //expect(secureAreaPage.welcomeTXT).toHaveText('Next-gen browser and mobile automation test framework for Node.js');

});

Then(/^I should see (.+) on the header$/, async (welcomeText) => {
    expect(await app.pageNavigation.getUserName()).toHaveText(welcomeText);
});