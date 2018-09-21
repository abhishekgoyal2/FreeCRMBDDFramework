$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/abhishek.goyal2/workspace/FreeCRMBDDFramework/src/main/java/Features/contact.feature");
formatter.feature({
  "id": "free-crm-contact",
  "description": "",
  "name": "Free CRM Contact",
  "keyword": "Feature",
  "line": 1
});
formatter.scenario({
  "id": "free-crm-contact;free-crm-create-a-new-contact-scenario;;2",
  "description": "",
  "name": "Free CRM Create a New Contact scenario",
  "keyword": "Scenario Outline",
  "line": 16,
  "type": "scenario"
});
formatter.step({
  "name": "User is already on Login Page",
  "keyword": "Given ",
  "line": 5
});
formatter.step({
  "name": "title of login page is Free CRM",
  "keyword": "When ",
  "line": 6
});
formatter.step({
  "name": "User enter \"naveenk\" and \"test@123\"",
  "keyword": "Then ",
  "line": 7,
  "matchedColumns": [
    0,
    1
  ]
});
formatter.step({
  "name": "User clicks on login button",
  "keyword": "Then ",
  "line": 8
});
formatter.step({
  "name": "User is on the home page",
  "keyword": "Then ",
  "line": 9
});
formatter.step({
  "name": "User moves to contact page",
  "keyword": "Then ",
  "line": 10
});
formatter.step({
  "name": "User enters contact \"\" and \"Tom\"  and \"Peter\"",
  "keyword": "Then ",
  "line": 11,
  "matchedColumns": [
    2,
    3,
    4
  ]
});
formatter.step({
  "name": "close the browser",
  "keyword": "Then ",
  "line": 12
});
formatter.match({
  "location": "LoginStepDefinition.User_is_already_on_Login_Page()"
});
formatter.result({
  "duration": 11929375254,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_login_page_is_Free_CRM()"
});
formatter.result({
  "duration": 27195246,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "naveenk",
      "offset": 12
    },
    {
      "val": "test@123",
      "offset": 26
    }
  ],
  "location": "LoginStepDefinition.User_enter_username_and_password(String,String)"
});
formatter.result({
  "duration": 1379616751,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.User_clicks_on_login_button()"
});
formatter.result({
  "duration": 6194796929,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.User_is_on_the_home_page()"
});
formatter.result({
  "duration": 5966504,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.User_moves_to_contact_page()"
});
formatter.result({
  "duration": 484808657,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 21
    },
    {
      "val": "Tom",
      "offset": 28
    },
    {
      "val": "Peter",
      "offset": 39
    }
  ],
  "location": "LoginStepDefinition.User_enters_and_and(String,String,String)"
});
formatter.result({
  "duration": 1776299260,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 2125429387,
  "status": "passed"
});
formatter.scenario({
  "id": "free-crm-contact;free-crm-create-a-new-contact-scenario;;3",
  "description": "",
  "name": "Free CRM Create a New Contact scenario",
  "keyword": "Scenario Outline",
  "line": 17,
  "type": "scenario"
});
formatter.step({
  "name": "User is already on Login Page",
  "keyword": "Given ",
  "line": 5
});
formatter.step({
  "name": "title of login page is Free CRM",
  "keyword": "When ",
  "line": 6
});
formatter.step({
  "name": "User enter \"naveenk\" and \"test@123\"",
  "keyword": "Then ",
  "line": 7,
  "matchedColumns": [
    0,
    1
  ]
});
formatter.step({
  "name": "User clicks on login button",
  "keyword": "Then ",
  "line": 8
});
formatter.step({
  "name": "User is on the home page",
  "keyword": "Then ",
  "line": 9
});
formatter.step({
  "name": "User moves to contact page",
  "keyword": "Then ",
  "line": 10
});
formatter.step({
  "name": "User enters contact \"\" and \"John\"  and \"Carry\"",
  "keyword": "Then ",
  "line": 11,
  "matchedColumns": [
    2,
    3,
    4
  ]
});
formatter.step({
  "name": "close the browser",
  "keyword": "Then ",
  "line": 12
});
formatter.match({
  "location": "LoginStepDefinition.User_is_already_on_Login_Page()"
});
formatter.result({
  "duration": 10242533770,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_login_page_is_Free_CRM()"
});
formatter.result({
  "duration": 39580256,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "naveenk",
      "offset": 12
    },
    {
      "val": "test@123",
      "offset": 26
    }
  ],
  "location": "LoginStepDefinition.User_enter_username_and_password(String,String)"
});
formatter.result({
  "duration": 317112660,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.User_clicks_on_login_button()"
});
formatter.result({
  "duration": 5736017100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.User_is_on_the_home_page()"
});
formatter.result({
  "duration": 6676428,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.User_moves_to_contact_page()"
});
formatter.result({
  "duration": 337408204,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 21
    },
    {
      "val": "John",
      "offset": 28
    },
    {
      "val": "Carry",
      "offset": 40
    }
  ],
  "location": "LoginStepDefinition.User_enters_and_and(String,String,String)"
});
formatter.result({
  "duration": 1700889827,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 2118587428,
  "status": "passed"
});
});