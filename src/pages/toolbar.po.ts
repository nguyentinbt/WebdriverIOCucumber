import { clickElement, selectDropdown } from "src/utils/commands";
import { UIElement } from "src/utils/uielement";

export class PageToolbar extends UIElement {
    get sortDropdown() {
        return $('.a-dropdown-container')
    }
    //
    async clickSortDropdown() {
        await this.sortDropdown.waitForDisplayed();
        await clickElement(this.sortDropdown);
    }

    get listElement() {
        return $$('.a-popover-wrapper li')
    }

    async sortBy(name: string) {
        // let aa = await this.listElement.length;
        await selectDropdown(this.listElement, name)
    }
}
