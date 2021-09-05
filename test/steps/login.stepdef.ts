import { Given, When, Then } from "@cucumber/cucumber"
import { Login } from "src/pages/login.page"
import { SecureAreaPage } from "src/pages/SecureArea.page"



const loginPage = new Login();
const secureAreaPage = new SecureAreaPage();

Given(/^I am on the login page$/, async () => {
    await loginPage.openPage();
});


When(/^I login with username and password$/, async () => {
    await loginPage.loginToPage("tomsmith", "SuperSecretPassword!");
});


Then(/^I should see a flash message saying <message>$/, async () => {
    return true;
    //expect(secureAreaPage.welcomeTXT).toHaveText('Next-gen browser and mobile automation test framework for Node.js');

});
