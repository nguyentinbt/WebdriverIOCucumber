import { ChainablePromiseArray, ChainablePromiseElement } from "webdriverio";

export const setText = async (element: ChainablePromiseElement<Promise<WebdriverIO.Element>>, value: string) => {
    if (await element.isDisplayed() === true) {
        await element.scrollIntoView();
        await element.setValue(value);
    } else {
        try {
            await element.waitForDisplayed();
            await element.setValue(value);
        } catch (error) {
            console.log("Element not found", error);
        }
    }


}

export const selectVisibleText = async (element: ChainablePromiseElement<Promise<WebdriverIO.Element>>, value: string) => {
    await element.selectByVisibleText(value);

}

export const clickElement = async (element: ChainablePromiseElement<Promise<WebdriverIO.Element>>) => {
    if (await element.isClickable()) {
        await element.click();
    }
    else {
        try {
            await element.waitForClickable();
        } catch (error) {
            console.log("Cannot click on button", error);
        }
    }
}

export const getElementText = async (element: ChainablePromiseElement<Promise<WebdriverIO.Element>>) => {
    if (await element.isDisplayed()) {
        element.getText();
    } else {
        try {
            element.waitForDisplayed();
        } catch (error) {
            console.log("Cannot get element's text", error);
        }
    }
}

export const selectDropdown = async (elements: ChainablePromiseArray<WebdriverIO.ElementArray>, value: string) => {
    const listOfelemets = await elements;
    for (let index = 0; index < listOfelemets.length; index++) {
        //const element = await listOfelemets[index].getAttribute(value);
        const element = await listOfelemets[index].getText();
        if (element == value) {
            await listOfelemets[index].click();
        } else {
            try {
                await listOfelemets[index].waitForDisplayed();
            } catch (error) {
                console.log("Cannot select element", error);
            }
        }
    }
}