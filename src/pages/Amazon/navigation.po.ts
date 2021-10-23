import page from "./page"
import { clickElement, getElementText, selectDropdown, setText } from "src/utils/commands"
import { ChainablePromiseArray, ElementArray, Selector } from "webdriverio";
import { UIElement } from "src/utils/uielement";

// Selectors
const appRootComponent = '#navbar-main';
const userNameHint = '#nav-link-accountList-nav-line-1'
const searchTXT = '#twotabsearchtextbox'
const searchBTN = '#nav-search-submit-button'
const resultInfo = '[data-component-type="s-result-info-bar"]'
const departmentLST = '#searchDropdownBox'
const listOption = '#searchDropdownBox option'

export class PageNavigation extends UIElement {

    private get userName() {
        return $(userNameHint);
    }
    private get searchBox() {
        return $(searchTXT);
    }

    private get searchButton() {
        return $(searchBTN);
    }

    private get searchResultInfo() {
        return $(resultInfo);
    }

    private get department(): ChainablePromiseArray<ElementArray> {
        return $$(listOption);
    }


    async getUserName() {
        return await getElementText(this.userName);
    }
    async selectDropdown(dpt: string) {
        //  await $(departmentLST).waitForDisplayed()
        await $(departmentLST).selectByVisibleText(dpt)
        browser.pause(3000)
    }

    async selectDepartment(value: string) {
        selectDropdown(this.department, value)
    }


    async seachProduct(key?: string, department?: string) {
        if (key != undefined) {
            await setText(this.searchBox, key);
        }
        if (department != undefined) {
            await this.selectDepartment(department);
        }
        await clickElement(this.searchButton);
        await this.searchResultInfo.isDisplayed();
    }



    async seachProductByKey(key: string) {
        await setText(this.searchBox, key);
        await clickElement(this.searchButton);
        await this.searchResultInfo.isDisplayed();
    }

    async seachProductByDepartment(key: string) {
        await setText(this.searchBox, key);
        await clickElement(this.searchButton);
        await this.searchResultInfo.isDisplayed();
    }

    async seachProductByDepartmentAndKey(key: string,) {
        await setText(this.searchBox, key);
        await clickElement(this.searchButton);
        await this.searchResultInfo.isDisplayed();
    }
}

//export default new PageNavigation();