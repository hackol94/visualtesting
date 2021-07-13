const login = require('./shared/Login.js');
const dashboardComponents = require('./../ui/pages/dashboard-page.js');
const onboardingComponents = require('./../ui/pages/onboarding-page.js');
module.exports = async (page, scenario, vp) => {
    console.log('SCENARIO > ' + scenario.labºel);
    await login(page, scenario, vp);
    await page.waitForSelector(".dashboard-content__first-col  #cs-title")
    
    await page.evaluate(scrollToSelector => {
        document.querySelectorAll(scrollToSelector).forEach(card=>{
          console.log("sasa3:",card.innerText )
          if(card.innerText=="Fondo de Inversión"){
            card.scrollIntoView();
            card.click();
          }
        });
      }, dashboardComponents.FIDU_CARD);
    
      try{
      await page.waitForSelector(onboardingComponents.TEXT_LOG,{visible:true, timeout:7000})
    }catch(error){
      console.log("No carga pantalla de onboarding")
    }
    await page.waitFor(1000);
   
};
