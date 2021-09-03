import { Given, When, Then } from "@cucumber/cucumber"
import { Login } from "../page-objects/login.page"

const loginPage = new Login();


Given(/^I am on the login page$/, async () => {
    await loginPage.openPage();
});



When(/^I login with username and password$/, async () => {
    await loginPage.loginToPage("username", "password");
});


Then(/^I should see a flash message saying <message>$/, () => {
    return true;
});
