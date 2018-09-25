package FreeCRMTestRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "C:\\Users\\abhishek.goyal2\\workspace\\FreeCRMBDDFramework\\src\\main\\java\\Features\\taggedhooks.feature"
		,glue={"stepDefinition"},
		format= {"pretty","html:test-output","json:test-output/cucumber.json","junit:junitxml/cucumber.xml"},
		monochrome=true,
		dryRun=false,
		strict=true
		
//				tags = {"@End2End,@RegressionTest,@Smoke" }	
		)
public class Runner {

}
