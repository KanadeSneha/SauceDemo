
class LoginPage {

    constructor(page) {
        this.page = page;
        this.username = page.getByRole('textbox', { name: 'Username' });
        this.password = page.getByRole('textbox', { name: 'Password' });
        this.loginBtn = page.getByRole('button', { name: 'Login' });

    }

    async navigate(){
        await this.page.goto('https://www.saucedemo.com/');
    }

    async Login(username, password){
        await this.username.fill(username);
        await this.password.fill(password);
        await this.loginBtn.click();

    }
}
module.exports = { LoginPage };