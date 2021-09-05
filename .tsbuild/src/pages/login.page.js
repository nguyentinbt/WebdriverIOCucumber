"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Login = void 0;
const page_1 = require("./page");
class Login extends page_1.default {
    get username() {
        return $('#username');
    }
    get password() {
        return $('#password');
    }
    get submitBtn() {
        return $('form button[type="submit"]');
    }
    get flash() {
        return $('#flash');
    }
    get headerLinks() { return $$('#header a'); }
    async openPage() {
        await super.open('login');
    }
    async loginToPage(username, password) {
        await this.username.setValue(username);
        await this.password.setValue(password);
        this.submit();
    }
    async submit() {
        await this.submitBtn.click();
    }
}
exports.Login = Login;
exports.default = new Login();
