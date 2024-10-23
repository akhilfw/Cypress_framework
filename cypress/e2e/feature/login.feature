Feature: Login to Application

Scenario: User enters invalid email and invalid password
Given A user visits foundry login page
When user enters email "abcdef@com"
And user enters password "11122233"
And user clicks on submit button
Then user prompted with "Some fields contain incorrect or incomplete data. Please check your entries and try again" exception

Scenario: User enters empty email and invalid password
Given A user visits foundry login page
When user enters empty email
And user enters password "11122222"
And user clicks on submit button
Then user prompted with "CredentialsSignin" exception

Scenario: User enters invalid email and empty password
Given A user visits foundry login page
When user enters email "abcdef@com"
And user enters empty password
And user clicks on submit button
Then user prompted with "CredentialsSignin" exception

Scenario: User enters valid email and valid password
Given A user visits foundry login page
When user enters email "valid email"
And user enters password "valid password"
And user clicks on submit button

