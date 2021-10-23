import { appList } from "src/utils/constants";

/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    async open(path: string, App?: string) {
        //https://www.amazon.com/
        //
        if (App !== undefined) {
            switch (App) {
                case 'Amazon':
                    await browser.url(appList[App].BasedRUL + path);
                    break;
                case 'herokuapp':
                    await browser.url(appList[App].BasedRUL + path);
                    break;
                case 'toolsQA':
                    await browser.url(appList[App].BasedRUL + path);
                    break;
                default:
                    break;
            }
        }
        else {
            await browser.url(`https://the-internet.herokuapp.com/${path}`)
        }
    }
}
