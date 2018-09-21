$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/abhishek.goyal2/workspace/FreeCRMBDDFramework/src/main/java/Features/dealsmap.feature");
formatter.feature({
  "id": "deal-data-creation-with-map",
  "description": "",
  "name": "Deal data creation with map",
  "keyword": "Feature",
  "line": 1
});
formatter.scenario({
  "id": "deal-data-creation-with-map;free-crm-create-a-new-deal-scenario",
  "description": "",
  "name": "Free CRM Create a new deal scenario",
  "keyword": "Scenario",
  "line": 3,
  "type": "scenario"
});
formatter.step({
  "name": "user is already on the Login Page",
  "keyword": "Given ",
  "line": 5
});
formatter.step({
  "name": "title of login page is Free CRM",
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
        "username",
        "password"
      ],
      "line": 8
    },
    {
      "cells": [
        "naveenk",
        "test@123"
      ],
      "line": 9
    }
  ]
});
formatter.step({
  "name": "user clicks on login button",
  "keyword": "Then ",
  "line": 11
});
formatter.step({
  "name": "user is on home page",
  "keyword": "Then ",
  "line": 12
});
formatter.step({
  "name": "user moves to new deal page",
  "keyword": "Then ",
  "line": 13
});
formatter.step({
  "name": "user enters deal details",
  "keyword": "Then ",
  "line": 14,
  "rows": [
    {
      "cells": [
        "title",
        "amount",
        "probability",
        "commission"
      ],
      "line": 15
    },
    {
      "cells": [
        "test deal1",
        "1000",
        "50",
        "10"
      ],
      "line": 16
    },
    {
      "cells": [
        "test deal2",
        "2000",
        "60",
        "20"
      ],
      "line": 17
    },
    {
      "cells": [
        "test deal3",
        "3000",
        "70",
        "30"
      ],
      "line": 18
    }
  ]
});
formatter.step({
  "name": "Close the browser",
  "keyword": "Then ",
  "line": 20
});
formatter.match({
  "location": "DealsStepWithMapDefinition.user_is_already_on_Login_Page()"
});
formatter.result({
  "duration": 11602119314,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepWithMapDefinition.the_title_of_login_page_is_Free_CRM()"
});
formatter.result({
  "duration": 28788003,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepWithMapDefinition.user_enters_username_and_password(DataTable)"
});
formatter.result({
  "duration": 277010147,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepWithMapDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 6162806730,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepWithMapDefinition.user_is_on_home_page()"
});
formatter.result({
  "duration": 7881020,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepWithMapDefinition.user_moves_to_new_deal_page()"
});
formatter.result({
  "duration": 335205933,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepWithMapDefinition.user_enters_deal_details(DataTable)"
});
formatter.result({
  "duration": 2197383195,
  "status": "failed",
  "error_message": "java.lang.IllegalMonitorStateException\r\n\tat java.lang.Object.wait(Native Method)\r\n\tat stepDefinition.DealsStepWithMapDefinition.user_enters_deal_details(DealsStepWithMapDefinition.java:106)\r\n\tat ✽.Then user enters deal details(C:/Users/abhishek.goyal2/workspace/FreeCRMBDDFramework/src/main/java/Features/dealsmap.feature:14)\r\n"
});
formatter.match({
  "location": "DealsStepWithMapDefinition.Close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
});