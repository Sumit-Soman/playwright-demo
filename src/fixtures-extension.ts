import { test as base } from '@playwright/test';
import ShadowDomPage from './pages/shadow-dom-page';
import MainPage from './pages/main-page';

type Pages = {
    mainPage: MainPage;
    shadowDomPage: ShadowDomPage;
}

export const test = base.extend<Pages>({
    mainPage: async ({page}, use) => {
        await use(new MainPage(page));
    },
    shadowDomPage: async ({page}, use) => {
        await use(new ShadowDomPage(page));
    }
});

export { expect } from '@playwright/test';