package stepDefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;

//import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class LoginStepDefinition {
	
public static WebDriver driver;
	@Given("^User is already on Login Page$")
	public void User_is_already_on_Login_Page() throws Throwable {
		//This step open Firefox and takes user to Free CRM page.
		driver= new FirefoxDriver();
		driver.get("https://www.freecrm.com/index.html");
	    // Express the Regexp above with the code you wish you had
//	    throw new PendingException();
	}

	
	@SuppressWarnings("deprecation")
	@When("^title of login page is Free CRM$")
	public void title_of_login_page_is_Free_CRM() throws Throwable {
		String logintitle = driver.getTitle();
		System.out.println("Page title before login is " + logintitle);
		Assert.assertEquals("#1 Free CRM software in the cloud for sales and service", logintitle);
	    // Express the Regexp above with the code you wish you had
//	    throw new PendingException();
	}

	@Then("^User enter username and password$")
	public void User_enter_username_and_password() throws Throwable {
		WebElement username =driver.findElement(By.name("username"));
				username.sendKeys("naveenk");
		WebElement password =driver.findElement(By.name("password"));
				password.sendKeys("test@123");
	    // Express the Regexp above with the code you wish you had
//	    throw new PendingException();
	}

	@Then("^User clicks on login button$")
	public void User_clicks_on_login_button() throws Throwable {
	    
		WebElement LoginPage =driver.findElement(By.xpath("//*[@id=\"loginForm\"]/div/div/input"));
		LoginPage.click();
		// Express the Regexp above with the code you wish you had
		
//	    throw new PendingException();
	}

	@SuppressWarnings("deprecation")
	@Then("^User is on the home page$")
	public void User_is_on_the_home_page() throws Throwable {
	    // Express the Regexp above with the code you wish you had
		String HomePagetitle = driver.getTitle();
		System.out.println("Home page title " + HomePagetitle);
		Assert.assertEquals("CRMPRO", HomePagetitle);
//	    throw new PendingException();
	}

	@Then("^close the browser$")
	public void close_the_browser() throws Throwable {
		driver.close();
	    // Express the Regexp above with the code you wish you had
//	    throw new PendingException();
	}

	
}
