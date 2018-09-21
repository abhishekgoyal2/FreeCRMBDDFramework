$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("contact.feature");
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
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_login_page_is_Free_CRM()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefinition.User_clicks_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefinition.User_is_on_the_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefinition.User_moves_to_contact_page()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefinition.close_the_browser()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_login_page_is_Free_CRM()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefinition.User_clicks_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefinition.User_is_on_the_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefinition.User_moves_to_contact_page()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefinition.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("deals.feature");
formatter.feature({
  "id": "deal-data-creation",
  "description": "",
  "name": "Deal data creation",
  "keyword": "Feature",
  "line": 1
});
formatter.scenario({
  "id": "deal-data-creation;free-crm-create-a-new-deal-scenario",
  "description": "",
  "name": "Free CRM Create a new deal scenario",
  "keyword": "Scenario",
  "line": 3,
  "type": "scenario"
});
formatter.step({
  "name": "user is already on Login Page",
  "keyword": "Given ",
  "line": 5
});
formatter.step({
  "name": "the title of login page is Free CRM",
  "keyword": "When ",
  "line": 6
});
formatter.step({
  "name": "user enters username and password",
  "keyword": "Then ",
  "line": 7,
  "rows": [
    {
      "cells": [
        "naveenk",
        "test@123"
      ],
      "line": 8
    }
  ]
});
formatter.step({
  "name": "user clicks on login button",
  "keyword": "Then ",
  "line": 10
});
formatter.step({
  "name": "user is on home page",
  "keyword": "Then ",
  "line": 11
});
formatter.step({
  "name": "user moves to new deal page",
  "keyword": "Then ",
  "line": 12
});
formatter.step({
  "name": "user enters deal details",
  "keyword": "Then ",
  "line": 13,
  "rows": [
    {
      "cells": [
        "test deal",
        "1000",
        "50",
        "10"
      ],
      "line": 14
    }
  ]
});
formatter.step({
  "name": "Close the browser",
  "keyword": "Then ",
  "line": 16
});
formatter.match({
  "location": "DealStepDefnition.user_is_already_on_Login_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DealStepDefnition.the_title_of_login_page_is_Free_CRM()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DealStepDefnition.user_enters_username_and_password(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DealStepDefnition.user_clicks_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DealStepDefnition.user_is_on_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DealStepDefnition.user_moves_to_new_deal_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DealStepDefnition.user_enters_deal_details(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DealStepDefnition.Close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("login.feature");
formatter.feature({
  "id": "freecrm-login",
  "description": "",
  "name": "freeCRM Login",
  "keyword": "Feature",
  "line": 1
});
formatter.scenario({
  "id": "freecrm-login;free-crm-login-test-scenario;;2",
  "description": "",
  "name": "free CRM login Test Scenario",
  "keyword": "Scenario Outline",
  "line": 25,
  "type": "scenario"
});
formatter.step({
  "name": "User is already on Login Page",
  "keyword": "Given ",
  "line": 15
});
formatter.step({
  "name": "title of login page is Free CRM",
  "keyword": "When ",
  "line": 16
});
formatter.step({
  "name": "User enter \"naveenk\" and \"test@123\"",
  "keyword": "Then ",
  "line": 17,
  "matchedColumns": [
    0,
    2
  ]
});
formatter.step({
  "name": "User clicks on login button",
  "keyword": "Then ",
  "line": 18
});
formatter.step({
  "name": "User is on the home page",
  "keyword": "And ",
  "line": 19
});
formatter.step({
  "name": "close the browser",
  "keyword": "Then ",
  "line": 20
});
formatter.match({
  "location": "LoginStepDefinition.User_is_already_on_Login_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_login_page_is_Free_CRM()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefinition.User_clicks_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefinition.User_is_on_the_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefinition.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
});