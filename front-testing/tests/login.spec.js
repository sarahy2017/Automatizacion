import { test, expect } from '@playwright/test';

test.describe('SauceDemo ', () => {
  const selectores = {
    usernameInput: '[data-test="username"]',
    passwordInput: '[data-test="password"]',
    loginButton: '[data-test="login-button"]',
    errorMessage: '[data-test="error"]',
    inventoryTitle: '.title'
  };  

  
  test.beforeEach(async ({ page }) => {

    await page.goto('https://www.saucedemo.com/');
  });

  test('Login exitoso', async ({ page }) => {
    
    await page.locator(selectores.usernameInput).fill('standard_user');
    await page.locator(selectores.passwordInput).fill('secret_sauce');

    await page.locator(selectores.loginButton).click();
    
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    
  });

  test('Login fallido', async ({ page }) => {
    
    await page.locator(selectores.usernameInput).fill('standard_user');
    await page.locator(selectores.passwordInput).fill('incorrect_sauce');
    
    await page.locator(selectores.loginButton).click();
        
    const errorMessage = page.locator(selectores.errorMessage);
    await expect(errorMessage).toBeVisible();
    const textoDelError = await errorMessage.textContent();
    
    await expect(page).toHaveURL('https://www.saucedemo.com/');
    
  });

  test('Login obligatorios', async ({ page }) => {

    await page.locator(selectores.usernameInput).fill('');
    await page.locator(selectores.passwordInput).fill('');

    await page.locator(selectores.loginButton).click();
  
    const errorMessage = page.locator(selectores.errorMessage);
    await expect(errorMessage).toBeVisible();
    const textoDelError = await errorMessage.textContent();
  
    await expect(page).toHaveURL('https://www.saucedemo.com/');
    
  });

});