import page from "./page"
import { setText } from "src/utils/commands"

// Selectors
const emailTXT = '#ap_email'
const passwordTXT = '#ap_password'
const conttinueBTN = '#continue'
const signInSubmitBTN = '#signInSubmit'

export class LoginPage extends page {
    pageURL = "ap/signin?openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.com%2F%3Fref_%3Dnav_custrec_signin&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=usflex&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&"

    private get emailTextField() {
        return $(emailTXT);
    }

    private get passwordField() {
        return $(passwordTXT)
    }
    private get continueButton() {
        return $(conttinueBTN);
    }

    private get signInSubmitButton() {
        return $(signInSubmitBTN)
    }

    async click_continueButton() {
        await this.continueButton.click()
    }

    async click_signInSubmitButton() {
        await this.signInSubmitButton.click();
    }

    async openPage() {
        await super.open(this.pageURL);
    }

    async inputUserName(username: string) {
        // await this.username.setValue(username);
        await setText(this.emailTextField, username);
    }

    async inputPassword(password: string) {
        await setText(this.passwordField, password)
    }

    async loginToPage(username: string, password: string) {
        await this.inputUserName(username);
        await this.click_continueButton();
        await this.inputPassword(password)
        await this.click_signInSubmitButton();
    }
}

export default new LoginPage();