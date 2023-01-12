import { expect, test } from '@playwright/test';

test('home', async ({ page }) => {
	await page.goto('/');
	const cards = page.locator('.card');
	await test.step('card amount', async () => {
		expect(await cards.count()).toBe(4);
	});
	await test.step('title card', async () => {
		expect(await cards.nth(0).locator('h1').textContent()).toBe("Hello, I'm Julian");
	});
	await test.step('contacts card', async () => {
		expect(await cards.nth(1).locator('h2').textContent()).toBe('Contacts');
		expect(await cards.nth(1).locator('.links>.link').count()).toBe(3);
	});
	await test.step('projects card', async () => {
		expect(await cards.nth(2).locator('h1').textContent()).toBe('Projects');
		expect(await cards.nth(2).locator('p').textContent()).toBe('Things that I have created');
	});
	await test.step('skills card', async () => {
		expect(await cards.nth(3).locator('h1').textContent()).toBe('Skills');
		expect(await cards.nth(3).locator('p').textContent()).toBe('Stuff that I have learned');
	});
});
