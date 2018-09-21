package stepDefinition;

import cucumber.api.PendingException;


import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
//import junit.framework.Assert;
import junit.framework.Assert;

public class DealStepDefnition {

	public static WebDriver driver;

	@Given("^user is already on Login Page$")
	public void user_is_already_on_Login_Page() throws Throwable {
	    // Express the Regexp above with the code you wish you had
		System.setProperty("webdriver.chrome.driver","D:\\Projects\\chromedriver_win32 (1)\\chromedriver.exe");
		driver =new ChromeDriver();
		
//		driver= new FirefoxDriver();
		driver.get("https://www.freecrm.com/index.html");
//	    throw new PendingException();
	}

	@SuppressWarnings("deprecation")
	@When("^the title of login page is Free CRM$")
	public void the_title_of_login_page_is_Free_CRM() throws Throwable {
	    // Express the Regexp above with the code you wish you had
		String logintitle = driver.getTitle();
		System.out.println("Page title before login is " + logintitle);
		Assert.assertEquals("#1 Free CRM software in the cloud for sales and service", logintitle);
//	    throw new PendingException();
	}

	@Then("^user enters username and password$")
	public void user_enters_username_and_password(DataTable credentials) throws Throwable {
	    // Express the Regexp above with the code you wish you had
	    // For automatic conversion, change DataTable to List<YourType>
		List<List<String>> data=credentials.raw();
		WebElement username1 =driver.findElement(By.name("username"));
		username1.sendKeys(data.get(0).get(0));
WebElement password1 =driver.findElement(By.name("password"));
		password1.sendKeys(data.get(0).get(1));
//	    throw new PendingException();
	}

	@Then("^user clicks on login button$")
	public void user_clicks_on_login_button() throws Throwable {
	    // Express the Regexp above with the code you wish you had
		 WebElement loginBtn =
				 driver.findElement(By.xpath("//input[@type='submit']"));
				 JavascriptExecutor js = (JavascriptExecutor)driver;
				 js.executeScript("arguments[0].click();", loginBtn);
//	    throw new PendingException();
	}

	@Then("^user is on home page$")
	public void user_is_on_home_page() throws Throwable {
	    // Express the Regexp above with the code you wish you had
		String HomePagetitle = driver.getTitle();
		System.out.println("Home page title " + HomePagetitle);
//	    throw new PendingException();
	}

	@Then("^user moves to new deal page$")
	public void user_moves_to_new_deal_page() throws Throwable {
	    // Express the Regexp above with the code you wish you had
		driver.switchTo().frame("mainpanel");
		Actions action = new Actions(driver);
		new WebDriverWait(driver, 20).until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//a[contains(text(),'Deals')]")));
		action.moveToElement(driver.findElement(By.xpath("//a[contains(text(),'Deals')]"))).build().perform();
		driver.findElement(By.xpath("//a[contains(text(),'New Deal')]")).click();
//	    throw new PendingException();
	}

	@Then("^user enters deal details$")
	public void user_enters_deal_details(DataTable dealData) throws Throwable {
	    // Express the Regexp above with the code you wish you had
	    // For automatic conversion, change DataTable to List<YourType>
		List<List<String>> dealval=dealData.raw();
		new WebDriverWait(driver, 20).until(ExpectedConditions.visibilityOfElementLocated(By.id("title")));
		 driver.findElement(By.id("title")).sendKeys(dealval.get(0).get(0));
		 driver.findElement(By.id("amount")).sendKeys(dealval.get(0).get(1));
		 driver.findElement(By.id("probability")).sendKeys(dealval.get(0).get(2));
		 driver.findElement(By.id("commission")).sendKeys(dealval.get(0).get(3));
//	    throw new PendingException();
	}

	@Then("^Close the browser$")
	public void Close_the_browser() throws Throwable {
	    // Express the Regexp above with the code you wish you had
		driver.close();
//	    throw new PendingException();
	}


}
