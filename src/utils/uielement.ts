import { ChainablePromiseElement, Selector } from 'webdriverio';
import allureReporter from '@wdio/allure-reporter';
import { SMALL_TIMEOUT } from './TIMEOUT_CONSTS';

enum ExpectationError {
    not_clickable = 'is still clickable',
    clickable = 'is not clickable',
    not_present = 'is still present',
    present = 'is not present',
    visible = 'is not visible',
    not_visible = 'is still visible',
    contain_text = 'does not contain text'
}

export class UIElement {
    element: ChainablePromiseElement<Promise<WebdriverIO.Element>>;
    selector: Selector;

    constructor(selector: Selector) {
        this.selector = selector;
        allureReporter.addStep(`Find Element: '${selector}'`);
        this.element = $(this.selector);
    }

    async expectPresence(timeout = SMALL_TIMEOUT): Promise<void> {
        const message = await this.getContextInfo(ExpectationError.present, timeout);
        await this.element.waitForDisplayed({ timeout, timeoutMsg: message });
    }

    async expectNotPresence(timeout = SMALL_TIMEOUT): Promise<void> {
        const message = await this.getContextInfo(ExpectationError.present, timeout);
        await this.element.waitForDisplayed({ timeout, reverse: true, timeoutMsg: message });
    }

    async expectVisible(timeout: number = SMALL_TIMEOUT): Promise<void> {
        const message = await this.getContextInfo(ExpectationError.visible, timeout);
        await this.element.waitForExist({ timeout, timeoutMsg: message });
        await this.element.waitForDisplayed({ timeout, timeoutMsg: message });
    }

    async expectNotVisible(timeout: number = SMALL_TIMEOUT): Promise<void> {
        const message = await this.getContextInfo(ExpectationError.not_visible);
        await this.element.waitForExist({ timeout, reverse: true, timeoutMsg: message });
        await this.element.waitForDisplayed({ timeout, reverse: true, timeoutMsg: message });
    }

    async expectClickable(timeout: number = SMALL_TIMEOUT): Promise<void> {
        const message = await this.getContextInfo(ExpectationError.clickable, timeout);
        await this.element.waitForClickable({ timeout: timeout, timeoutMsg: message });
    }

    async expectNotClickable(timeout: number = SMALL_TIMEOUT): Promise<void> {
        const message = await this.getContextInfo(ExpectationError.not_clickable, timeout);
        await this.element.waitForClickable({ timeout: timeout, reverse: true, timeoutMsg: message });

    }

    async click(): Promise<void> {
        await this.element.click();
    }

    async hover(): Promise<void> {
        await this.element.moveTo();
        await browser.pause(500);
    }

    async scrollIntoView(): Promise<void> {
        await this.element.scrollIntoView();

        allureReporter.addStep(`Scroll to selector - ${this.selector}`);
    }

    // please use selector that document.querySelectorAll support
    // it must be a valid CSS selector 
    async nativeClick(): Promise<void> {
        await browser.execute(`document.querySelectorAll('${this.selector}')[0].click()`);

        allureReporter.addStep(`Using Native click on selector - ${this.selector}`);
    }

    async clearValue(): Promise<void> {
        await this.click();
        await this.element.clearValue();
        allureReporter.addStep(`Clear Value on selector - ${this.selector}`);
    }

    // Add a value to an object found by given selector. 
    async addValue(val: string): Promise<void> {
        await this.element.addValue(val);
    }

    // Send a sequence of key strokes to an element (clears value before)
    async setValue(val: string): Promise<void> {
        await this.element.setValue(val);
    }

    async getText(): Promise<string> {
        const actualtResult = await this.element.getText();
        allureReporter.addStep(`Get text from selector - ${this.selector}`, { content: actualtResult });

        return actualtResult;
    }

    async isPresent(): Promise<boolean> {
        const statusResult = await this.element.isDisplayed();
        allureReporter.addStep(`Verify that selector - ${this.selector}} is displayed`, { status: statusResult });
        return statusResult;
    }

    findChild(selector: Selector): ChainablePromiseElement<Promise<WebdriverIO.Element>> {

        // allureReporter.addStep(`Find childlement: '${selector}' from ${this.selector}`);
        return this.element.$(selector);
    }

    private async getContextInfo(expectation: ExpectationError, timeout: number = SMALL_TIMEOUT) {
        return `element ${await this.element.getHTML()} ${expectation} after ${timeout / 1000} seconds.
        # Current page: ${await browser.getUrl()}`;
    }
}