About the tools and framework:
    # Test framework: WebdriverIO - https://webdriver.io/docs/gettingstarted
    # Test solution: Behavior Driven Development (BDD) with cucumber
    # Test Model: Page object model
    # Coding language: TypeScript 
    # Server: Nodejs 


About this project, The ideas is to break the existing pages into separate components.
- There are some main component such as:
    + List of pages: 
        . Login
        . main
    + List of page objects (The partial element on page and may appear on multiple page]):
        . navigation
        . side bar
        . tool bar
- Test implementation idea:
 + All page has to start from an object called as App page. It means every page or object have to have its owner to control. This aims to make sure the test script follow the workflow as a real user thinking.     
 + Each feature file contains test scenarios
 + Each steps file is the implementation for the correspoding feature.

- How to run:
1. Please install Nodejs latest version
2. Run comman: npm install to init the needed libaries 
3. Run comman: npm run test to trigger test script

Have a great day!!!!!



