class loginPage {

    elements = {

      emailField:() => cy.get('input[name="email"]'),
	  passwordField:() => cy.get('input[name="password"]'),
	  submitButton:() => cy.get('button[type="submit"]'),
	  exceptionError:() => cy.get('form').find('p'),


    };

	enterEmail(email)
	{
		if (email === 'valid email')
		{
			this.elements.emailField().type(Cypress.env('USERNAME'));
		}
		else
		{
		this.elements.emailField().type(email)
		}
	}

	enterPassword(password)
	{
		if (password === 'valid password')
		{
			this.elements.passwordField().type(Cypress.env('PASSWORD'));
		}
		else
		{
			this.elements.passwordField().type(password);
		}	
	}

	clickButton()
	{
		this.elements.submitButton().click({force: true});
	}

	verifyException(exception)
	{
		this.elements.exceptionError().contains(exception);
	}

	emptyEmail()
	{
		this.elements.emailField().focus().blur();
	}

	emptyPassword()
	{
		this.elements.passwordField().focus().blur();
	}
    
	

    // verifyHeader(headerValue:string)
    // {
    //   let a;
    //   if(headerValue==="Applicant Information")
    //   {a=0}
    //   else if(headerValue==="Statement of Intended Use")
    //   {a=1}
    //   else
    //   {throw new Error(headerValue + " - Header Does Not Exist!!");}
    //   this.elements.headerValue().eq(a).contains(headerValue);
    // }

    // verifyTitle(titleValue:string)
    // {
    //   this.elements.titleValue().contains(titleValue);
    // }

}
  
export const loginPageObj = new loginPage();