import { setText } from "src/utils/commands";
import page from "../page";

export class PracticeFormPage extends page {
    pageURL = "automation-practice-form"

    private get CurrentAddress() {
        return $('#currentAddress');
    }

    async getAttribute() {
        console.log('placeholder: ', await this.CurrentAddress.getAttribute('placeholder'));
        console.log('rows: ', await this.CurrentAddress.getAttribute('rows'));
        console.log('Cols: ', await this.CurrentAddress.getAttribute('cols'));
        console.log('id: ', await this.CurrentAddress.getAttribute('id'));
        console.log('class: ', await this.CurrentAddress.getAttribute('class'));
    }

    async inputCurrentAddress(address: string) {
        await setText(this.CurrentAddress, address);
        await browser.pause(5000);
    }
    async getInputtedAddess() {
        return await this.CurrentAddress.getValue();
    }
}

export default new PracticeFormPage();