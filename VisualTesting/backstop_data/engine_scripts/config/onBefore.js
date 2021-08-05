module.exports = async (page, scenario, vp) => {
  await page.setDefaultNavigationTimeout(120000);
  await require('./cookies/loadCookies')(page, scenario);
  require('./ignoreCSP')(page, scenario);
};
