import page from "./page"

export class SecureAreaPage extends page {
    get welcomeTXT() {
        return $('#content > div > h4')
    }
}

export default new SecureAreaPage();