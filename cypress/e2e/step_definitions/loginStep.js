const { Given,Then } = require("cypress-cucumber-preprocessor/steps");
import { loginPageObj } from "../pages/loginPage";

Given(/^A user visits foundry login page$/, () => {
	cy.visit('https://youth-foundry-virtual-stg.foundrybc.ca/account/login');
});

When(/^user enters email "([^"]*)"$/, (email) => {
	loginPageObj.enterEmail(email);
});

When(/^user enters password "([^"]*)"$/, (password) => {
	loginPageObj.enterPassword(password);
});

// Then(/^user prompted with "([^"]*)" exception$/, (args1) => {
// 	console.log(args1);
// 	return true;
// });

When(/^user clicks on submit button$/, () => {
	loginPageObj.clickButton();
});

Then(/^user prompted with "([^"]*)" exception$/, (exception) => {
	loginPageObj.verifyException(exception);
});

When(/^user enters empty email$/, () => {
	loginPageObj.emptyEmail();
});

When(/^user enters empty password$/, () => {
	loginPageObj.emptyEmail();
});
