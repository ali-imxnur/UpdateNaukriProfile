const {test, expect } = require('@playwright/test');

const testData = JSON.parse(JSON.stringify(require("../testdata.json")));

test("Upload resume and verify success message", async ({page})=>{

await page.goto("https://www.naukri.com/");

await page.click("#login_Layer");
await page.waitForTimeout(3000);
await page.getByPlaceholder("Enter your active Email ID / Username").type(testData.naukri_username ,{delay: 100}); 
await page.getByPlaceholder("Enter your password").type(testData.naukri_password, {delay: 100});
await page.locator("//button[@type='submit']").click();
await page.waitForTimeout(3000);
await page.locator("div[class='view-profile-wrapper'] a").click();
await page.locator("//input[@id='attachCV']").setInputFiles("C:\\Users\\AA\\Downloads\\Imanur_Ali_Resume.pdf");
await page.waitForTimeout(3000);
const successMsg = await page.locator("//p[@class='head']").textContent();
await page.waitForTimeout(3000);
console.log(successMsg);
await page.close();
})
