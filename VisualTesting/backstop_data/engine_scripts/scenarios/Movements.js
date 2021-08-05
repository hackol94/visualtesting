const login = require('./shared/Login.js');
const onboardingComponents = require('./../ui/pages/onboarding-page.js');
module.exports = async (page, scenario, vp) => {
  console.log('SCENARIO > ' + scenario.label);
  await login(page, scenario, vp);
  await page.waitFor(1000)
  await page.waitForSelector(".ng-tns-c5-13 > div#cards-wrapper div#spc-prod-num",{visible:true});
  await page.click(".ng-tns-c5-13 > div#cards-wrapper div#spc-prod-num");
  await page.waitForSelector("[ng-reflect-nowrap]",{visible:true})  
  await page.waitFor(500)
};
