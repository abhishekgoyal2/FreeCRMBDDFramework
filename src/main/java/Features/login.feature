Feature: freeCRM Login 

#this was without example keyword
#Scenario: free CRM login Test Scenario
#
#	Given User is already on Login Page 
#	When title of login page is Free CRM 
#	Then User enter "naveenk" and "test@123" 
#	Then User clicks on login button 
#	And User is on the home page 
# Then close the browser

	#this was with example keyword
Scenario Outline: free CRM login Test Scenario
	Given User is already on Login Page 
	When title of login page is Free CRM 
	Then User enter "<username>" and "<password>" 
	Then User clicks on login button 
	And User is on the home page 
	Then close the browser 
	
	Examples: 
	
	|username| |password|
	|naveenk | |test@123|
	