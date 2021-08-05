const termsAndConditions = require('./TermsAndConditions.js');
const openFundPage=require('./../ui/pages/openFund-page.js')
const termAndCondition = require('./../ui/pages/terms-and-conditions-page.js');

module.exports = async (page, scenario, vp) => {
    console.log('SCENARIO > ' + scenario.label);
    await termsAndConditions(page, scenario, vp);
    await page.click(termAndCondition.CONTINUE_BUTTON)
    await page.waitFor(3000);
};
