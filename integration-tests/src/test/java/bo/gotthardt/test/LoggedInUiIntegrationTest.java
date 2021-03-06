package bo.gotthardt.test;

import bo.gotthardt.model.User;
import bo.gotthardt.ui.page.DashboardPage;
import bo.gotthardt.ui.page.LoginPage;
import org.junit.Before;

public class LoggedInUiIntegrationTest extends UiIntegrationTest {
    protected User user;
    protected DashboardPage dashboard;

    @Before
    public void login() {
        user = new User("testuser", "testpassword", "Test Testsen");
        dashboard = LoginPage.go(driver).loginSuccess("testuser", "testpassword");
    }
}
