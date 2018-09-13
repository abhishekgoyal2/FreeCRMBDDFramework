Feature: freeCRM Login 
Scenario: free CRM login Test Scenario 

	Given User is already on Login Page 
	When title of login page is Free CRM 
	Then User enter username and password 
	Then User clicks on login button 
	And User is on the home page 
	Then close the browser