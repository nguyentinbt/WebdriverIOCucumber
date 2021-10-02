import page from "./page"
import { clickElement, getElementText, selectDropdown, setText } from "src/utils/commands"
import { ChainablePromiseArray, ChainablePromiseElement, ElementArray } from "webdriverio";
import { UIElement } from "src/utils/uielement";

// Selectors
const filtersBar = '#filters';
const EnglishCBX = '#filters [aria-label=English] [dir="auto"]'


export class SideBar extends UIElement {

    private get FiltersBar() {
        return $$(filtersBar);
    }
    getItemByText(itemName: string) {
        return $(`#filters [aria-label=${itemName}] [dir="auto"]`);
    }

    private get EnghishCBX() {
        return $(EnglishCBX)
    }

    async filterByLanguage(language: string) {
        // await this.EnghishCBX.click();
        await this.getItemByText(language).scrollIntoView();
        let cb = await this.getItemByText(language).getText();
        await this.getItemByText(language).waitForClickable();
        await this.getItemByText(language).click();
    }
}
//export default new SideBar();