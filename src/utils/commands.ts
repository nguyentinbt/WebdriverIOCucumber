import { ChainablePromiseElement } from "webdriverio";

export const setText = async (element: ChainablePromiseElement<Promise<WebdriverIO.Element>>, value: string) => {
    await (await element).setValue(value);

}