"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("@cucumber/cucumber");
const login_page_1 = require("src/pages/login.page");
const SecureArea_page_1 = require("src/pages/SecureArea.page");
const loginPage = new login_page_1.Login();
const secureAreaPage = new SecureArea_page_1.SecureAreaPage();
(0, cucumber_1.Given)(/^I am on the login page$/, async () => {
    await loginPage.openPage();
});
(0, cucumber_1.When)(/^I login with username and password$/, async () => {
    await loginPage.loginToPage("tomsmith", "SuperSecretPassword!");
});
(0, cucumber_1.Then)(/^I should see a flash message saying <message>$/, async () => {
    return true;
});
