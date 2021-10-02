Feature: Login

  Scenario Outline: As a user, I can log into Amazon.com with valid cridential

    Given I am on the login page
    When I login with <username> and <password>
    Then I should see <welcomeText> on the header

    Examples:
      | username                 | password   | welcomeText |
      | nguyentin.cnpm@gmail.com | Tin@123456 | Hello, Tin  |

