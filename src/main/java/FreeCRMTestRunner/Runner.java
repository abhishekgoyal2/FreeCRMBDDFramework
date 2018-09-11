package FreeCRMTestRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "C:\\Users\\abhishek.goyal2\\workspace\\FreeCRMBDDFramework\\src\\main\\java\\Features"
		,glue={"stepDefinition"},
		format= {"pretty","html:test-output"}
		)
public class Runner {

}
