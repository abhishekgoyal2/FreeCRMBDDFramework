Feature: Free CRM Contact

Scenario Outline: Free CRM Create a New Contact scenario

Given User is already on Login Page 
	When title of login page is Free CRM 
	Then User enter "<username>" and "<password>" 
	Then User clicks on login button 
	Then User is on the home page
	Then User moves to contact page
	Then User enters contact "<firstname>" and "<lastname>"  and "<postion>"
	Then close the browser 
	
	Examples:
	|username|password|firstname|lastname|postion|
	|naveenk|test@123||Tom      |Peter   |Manager|
	|naveenk|test@123||John     |Carry   |Sr Manager|