import page from "../page";

// Selectors
const searchResult = '[data-component-type="s-search-result"]'

export class MainPage extends page {
    Approot = '.s-main-slot.s-result-list.s-search-results.sg-row';

    get resultItem() {
        return $$(searchResult)
    }

    async getListSearchResult() {
        return await this.resultItem;
    }

    async isSearchResultsortedBy(sortType: string) {
        if (sortType == 'Publication Date') {
            const listResult = await this.resultItem;
            for (let i = 0; i < listResult.length; i++)
                for (let j = i + 1; j < listResult.length; j++) {
                    const di = await listResult[i].$('.a-size-base.a-color-secondary.a-text-normal').getText();
                    const dj = await listResult[i].$('.a-size-base.a-color-secondary.a-text-normal').getText();
                    const initDate = new Date(di);
                    const compareDate = new Date(dj);
                    if (initDate < compareDate) {
                        return false;
                    }
                }
            return true;
        }
    }

}

export default new MainPage();