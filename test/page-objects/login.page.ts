import page from "./page"

export class Login extends page {
    get username() {
        return $('#username')
    }
    get password() {
        return $('#password')
    }
    get submitBtn() {
        return $('form button[type="submit"]')
    }
    get flash() {
        return $('#flash')
    }
    get headerLinks() { return $$('#header a') }

    async openPage() {
        await super.open('login')
    }

    async loginToPage(username: string, password: string) {
        await this.username.setValue(username);
        await this.password.setValue(password)
        this.submit();
    }

    async submit() {
        await this.submitBtn.click()
    }
}

export default new Login();