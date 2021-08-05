const loginComponents = require('./../../ui/pages/login-page.js')
const dashboardComponents = require('./../../ui/pages/dashboard-page.js')
const generalErrorComponents = require('./../../ui/modals/general-error.js')
const utils = require('./../../util/utils.js')
const USER_ID = "1014998238";
const USER_ID_TYPE = "C";
const USER_SP = "1111";

module.exports = async(page, scenario, vp) => {
    console.log('Login for SCENARIO > ' + scenario.label);

    await page.waitForSelector(loginComponents.ID_INPUT, { visible: true });
    await page.waitForSelector(loginComponents.PASS_INPUT, { visible: true });
    await page.type(loginComponents.ID_INPUT, USER_ID /*+ utils.rand(532, 631)*/ );
    await page.type(loginComponents.PASS_INPUT, USER_SP);
    //  await page.select(loginComponents.DROPDOWN_INPUT, USER_ID_TYPE);

    await Promise.all([
        page.click(loginComponents.SUBMIT_BUTTON),
    ]);
    await page.waitFor(2000)
    try {

        await page.waitForSelector(loginComponents.LOGIN, { hidden: true })
        await page.waitForSelector(dashboardComponents.LOADING_CARD, { hidden: true })
    } catch (error) {
        console.log("button Quedate en casa")
    }
    try {
        await page.waitForSelector(generalErrorComponents.CLOSE_ERROR_PRODUCT_BUTTON, { visible: true, timeout: 4000 });
        console.log("producto falla")

        await page.click(generalErrorComponents.CLOSE_ERROR_PRODUCT_BUTTON);
        console.log("producto falla 1")
        await page.waitForSelector(generalErrorComponents.CLOSE_ERROR_PRODUCT_BUTTON, { hidden: true });
        console.log("producto falla 2")
        await page.waitForSelector(dashboardComponents.CARD_NAME, { visible: true });
    } catch (error) {
        console.log("no error loading products")
    }
};