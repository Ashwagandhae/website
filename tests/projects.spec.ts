import { expect, test } from '@playwright/test';
import { base } from '../site-base-path.js';

test('projects', async ({ page }) => {
	await page.goto(`${base}/projects`);

	// card 1
	await test.step('title card', async () => {
		// print body
		expect(await page.locator('.card h1').nth(0).textContent()).toBe('Projects');
		expect(await page.locator('.card p').nth(0).textContent()).toBe("Things that I've created");
	});

	await test.step('projects', async () => {
		const projects = page.locator('.content .card.square');
		expect(await projects.count()).toBeGreaterThan(4);
		for (const project of await projects.all()) {
			// match [anything]/projects/[anything] or
			expect(await project.locator('a').getAttribute('href')).toMatch(/.+\/projects\/.+/);
		}
	});
});
