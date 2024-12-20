import { test, expect } from "../src/fixtures-extension";

test.describe.parallel('Shadow Dom page tests - Verify page logic', async () => {
    test.beforeEach(async ({ mainPage, baseURL }) => {
        await mainPage.navigateUrl(baseURL + '/shadowdom');
        await mainPage.waitForPageLoad();
    });

    test('Verify shadow dom', async ({ shadowDomPage }) => {
        //Arrange
        const expectedFirstParagraphText = `Let's have some different text!`;
        const expectedSecondParagraphText = [`Let's have some different text!`, `In a list!`]

        //Act
        const firstParagraphText: string = await shadowDomPage.getFirstParagraphText();
        const secondParagraphText: string[] = await shadowDomPage.getSecondParagraphText();

        //Assert
        expect.soft(firstParagraphText).toBe(expectedFirstParagraphText);
        expect.soft(secondParagraphText).toEqual(expectedSecondParagraphText);
    });

});