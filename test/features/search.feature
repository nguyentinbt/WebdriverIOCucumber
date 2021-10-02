
Feature: Product Search
    # 1. Verify result list is paginated if there are more than 16 items
    # --a. Perform a search with:
    # ------i. Department: Books
    # ------ii. Keyword: apple
    # ------iii. Book Language:
    # --b. The Result displays exactly 16 items on each page.
    Scenario Outline: Verify result list is paginated if there are more than 16 items

        Given I am on the login page
        And I login with demoAccount profile
        When I select <Department> as Department
        And I input <Keyword> as search Keyword
        And I select <BookLanguage> as Book language
        Then search result returns <ReturnItem> items on each page
        Examples:
            | Department | Keyword | BookLanguage | ReturnItem |
            | Books      | apple   | English      | 16         |


    # 2. Verify result list can be sorted on demand
    # --a. Perform a search with:
    # -----i. Department: Books
    # -----ii. Keyword: apple
    # -----iii. Book Language: English
    # -----iv. Change sort option to Publication date
    # ---b. The Result is sorted by Publication date
    Scenario Outline: Verify result list when sorted by Publication date

        Given I am on the login page
        And I login with demoAccount profile
        When I select <Department> as Department
        And I input <Keyword> as search Keyword
        And I select <BookLanguage> as Book language
        And I change sort option to Publication date
        Then The Result is sorted by <sortOption>
        Examples:
            | Department | Keyword | BookLanguage | sortOption       |
            | Books      | apple   | English      | Publication date |

