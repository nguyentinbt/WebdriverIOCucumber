import { When, Then } from "@cucumber/cucumber"
import { AppPage } from "src/app";
import { DEMO_ACCOUNTS } from "src/utils/constants";

const app = new AppPage();

When(/^I login with (.+) profile$/, async (account) => {
    const { username, password } = DEMO_ACCOUNTS[account];
    await app.loginPage.loginToPage(username, password);
});

When(/^I select (.+) as Department$/, async (department: string) => {
    await app.pageNavigation.selectDropdown(department);
});

When(/^I input (.+) as search Keyword$/, async (keyword) => {
    await app.pageNavigation.seachProduct(keyword);
});

When(/^I select (.+) as Book language$/, async (booklanguage) => {
    await app.sideBar.filterByLanguage(booklanguage)
});

When(/^I change sort option to Publication date$/, async () => {
    await app.pageToolbar.clickSortDropdown();
    await app.pageToolbar.sortBy('Publication Date')
});


Then(/^search result returns (.+) items on each page$/, async (expectItem) => {
    expect((await app.mainPage.getListSearchResult()).length.toString()).toEqual(expectItem);
});

Then(/^The Result is sorted by (.+)$/, async (expectItem) => {
    expect(await app.mainPage.isSearchResultsortedBy(expectItem))
});
