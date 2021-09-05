import page from "./page"
import { setText } from "src/utils/commands"
const userNameTXT = '#username';
const passwordTXT = '#password';
const submitBTN = 'form button[type="submit"]';

export class Login extends page {
    private get username() {
        return $(userNameTXT);
    }

    private get password() {
        return $(passwordTXT)
    }
    private get submitBtn() {
        return $(submitBTN)
    }
    private get flash() {
        return $('#flash')
    }
    private get headerLinks() {
        return $$('#header a')
    }

    async openPage() {
        await super.open('login')
    }

    async inputUserName(username: string) {
        // await this.username.setValue(username);
        await setText(this.username, username);
    }

    async inputPassword(password: string) {
        await setText(this.password, password)
    }

    async loginToPage(username: string, password: string) {
        await this.inputUserName(username);
        await this.inputPassword(password)
        this.submit();
    }

    async submit() {
        await this.submitBtn.click()
    }
}

export default new Login();