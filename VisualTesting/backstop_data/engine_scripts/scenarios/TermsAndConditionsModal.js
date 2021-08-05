const termsAndConditions = require('./TermsAndConditions.js');
const termsAndConditionsComponents = require('./../ui/pages/terms-and-conditions-page.js');
const beforeStartComponents = require('./../ui/pages/before-start-page.js');
module.exports = async (page, scenario, vp) => {
    console.log('SCENARIO > ' + scenario.label);
    await termsAndConditions(page, scenario, vp)
    await page.waitForSelector(termsAndConditionsComponents.OPEN_TERMS_AND_CONDITIONS_LINK,{visible:true});
    await page.click(termsAndConditionsComponents.OPEN_TERMS_AND_CONDITIONS_LINK);
    await page.waitFor(1000);
};
