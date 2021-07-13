const beforeStart = require('./Before-start');
const termAndCondition = require('./../ui/pages/terms-and-conditions-page.js');
const beforeStartComponents = require('./../ui/pages/before-start-page.js');
module.exports = async (page, scenario, vp) => {
    console.log('SCENARIO > ' + scenario.label);
    await beforeStart(page, scenario, vp);
    await page.click(beforeStartComponents.START_BUTTON)
    await page.waitForSelector(termAndCondition.CHECK_TERMS_AND_CONDITIONS,{visible:true})
    await page.click(termAndCondition.CHECK_TERMS_AND_CONDITIONS);
    await page.waitFor(2000);
};
