Feature: Try API getAttributes

    Scenario Outline: As a user, I can input address to address text area
        Given user is on the Challenging DOM page
        When user try to get text
        And  user try to get value
        Then user should see the corresponding data

        Examples:
            | Header 1 | Header 2 | ChallengingDOM  |
            | Value 1  | Value 2  | Challenging DOM |




