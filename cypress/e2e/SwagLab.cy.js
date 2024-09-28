import LoginPage from "./Pages/SwagLab Web App/LoginPage.cy"
import HomePage from "./Pages/SwagLab Web App/HomePage.cy"
import CartPage from "./Pages/SwagLab Web App/CartPage.cy"
import Logout from "./Pages/SwagLab Web App/Logout.cy"
import CheckoutPage from "./Pages/SwagLab Web App/CheckoutPage.cy"
import CheckoutOverviewPage from "./Pages/SwagLab Web App/CheckoutOverviewPage.cy"
import CheckoutCompletePage from "./Pages/SwagLab Web App/CheckoutCompletePage.cy"

describe('Test suite', () => {
    
    it( "Test", () => {

        //Open Swag
        LoginPage.visit()

        //login to Swag
        LoginPage.swagLabLogin()

        //HomePage
        HomePage.swagLabHomePage()

        //Cart
        CartPage.cart()

        //Checkout
        CheckoutPage.checkout()

        //Checkout Overview
        CheckoutOverviewPage.checkoutOverview()

        //Checkout Complete
        CheckoutCompletePage.checkoutComplete()

        //log out from Swag
        Logout.swagLabLogout()
    })

})