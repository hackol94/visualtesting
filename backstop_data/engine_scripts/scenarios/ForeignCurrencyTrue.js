const onboarding = require('./Onboarding.js');
const onboardingComponents = require('./../ui/pages/onboarding-page.js');
const beforeStartComponents = require('./../ui/pages/before-start-page.js');
const CITY_TEXT = "bogot"
module.exports = async (page, scenario, vp) => {
    console.log('SCENARIO > ' + scenario.label);
    await onboarding(page, scenario, vp);
    await page.click(onboardingComponents.BUTTON_NEXT)
    await page.waitForSelector(beforeStartComponents.RADIO_BUTTON_YES,{visible:true});
    console.log(beforeStartComponents.RADIO_BUTTON_YES,{visible:true})
    await page.click(beforeStartComponents.RADIO_BUTTON_YES);
    await page.waitForSelector(beforeStartComponents.CITY_INPUT,{visible:true});
    await page.type(beforeStartComponents.CITY_INPUT, CITY_TEXT);
    await page.waitForSelector(beforeStartComponents.AUTO_COMPLETE_FIRST_CARD,{visible:true});
    await page.click(beforeStartComponents.AUTO_COMPLETE_FIRST_CARD);
    await page.click(beforeStartComponents.START_BUTTON)
    await page.waitFor(500);
};
