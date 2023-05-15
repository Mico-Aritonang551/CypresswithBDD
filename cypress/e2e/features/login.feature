Feature: Login to application

    As a valid user
    I want to Login into application

    Scenario: Valid Login
    Given I open login page
    When I submit login
    Then I should see homepage