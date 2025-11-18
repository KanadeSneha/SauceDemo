const base = require('@playwright/test');
const { POManager } = require('../PageObjects/POManager');

exports.test = base.test.extend({

    loginPage: async ({page}, use) =>{

    const poManager = new POManager(page);
    const loginPage = poManager.getLoginPage();
    await loginPage.navigate();
    await loginPage.Login('standard_user', 'secret_sauce');
    await use(loginPage); 
   }
})
exports.expect = base.expect;
