Feature: As a user I want to check the loading web page 
         using webdriver.io and cucumber

Scenario: Web page load test
Given Browser URL "https://google.com"
When Page loaded with URL
Then Web Page title is "Google"
