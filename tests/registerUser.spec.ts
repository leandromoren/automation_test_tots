import { test, expect } from "@playwright/test";

test.describe("Register Form", () => {

    const URL_BASE: string = "https://pushing-it.vercel.app";
    
    test.beforeEach(async ({ page }) => {
        await page.goto(URL_BASE);
    });

    test("Register new user", async ({ page }) => {
        const USER: string = generateRandomString(5);
        const PASS: string = generateRandomString(10)+"$$";
        const RADIOS_BUTTONS: Array<string> = [
            ".chakra-radio__control.css-vtg3j9[data-cy='Male']",
            ".chakra-radio__control.css-vtg3j9[data-cy='Female']",
            ".chakra-radio__control.css-vtg3j9[data-cy='Other']",
        ];

        // Completa el formulario de registro.
        await page.fill('input[name="user"]', USER);
        await page.fill('input[name="pass"]', PASS);
        await page.locator(RADIOS_BUTTONS[0]).check();
        await page.selectOption('select[name="day"]', { label: "18" });
        await page.selectOption('select[name="month"]', { label: "January" });
        await page.selectOption('select[name="year"]', { label: "2000" });
        await page.click('button[type="submit"]');
        await page.waitForURL(URL_BASE + '/home');

        expect(page.getByRole("heading", { name: "Welcome " + USER })).toBeVisible();
        expect(page.url()).toContain("/home");
    });
});

const generateRandomString = (length: number) => {
    let result = "";
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
};
