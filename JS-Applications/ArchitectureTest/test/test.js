// const {
//     chromium
// } = require('playwright-chromium');
// (async () => {
//     const browser = await chromium.launch();
//     const page = await browser.newPage();
//     await page.goto('https://google.com/');
//     await page.screenshot({
//         path: `example.png`
//     });
//     await browser.close();
// })();

const {
    chromium
} = require('playwright-chromium');
const {
    expect
} = require('chai');
const exp = require('constants');

let browser, page; // Declare reusable variables

describe('E2E tests', function () {
    this.timeout(6000)
    before(async () => {
        browser = await chromium.launch();
    });
    after(async () => {
        await browser.close();
    });
    beforeEach(async () => {
        page = await browser.newPage();
    });
    afterEach(async () => {
        await page.close();
    });

    it('loads static page', async () => {
        await page.goto('http://localhost:3000');
        // await page.screenshot({ path: 'index.png'});

        // const content = await page.content();
        // expect(content).to.contains('Scalable Vector Graphics');
        // expect(content).to.contains('Open standard');
        // expect(content).to.contains('Unix');
        // expect(content).to.contains('ALGOL');

        const content = await page.textContent('.accordion .head span');
        expect(content).to.contains('Scalable Vector Graphics');

    });

    it('toggles content', async () => {
        await page.goto('http://localhost:3000');

        const content = await page.click('text=More');

        const visible = await page.isVisible('.extra p');
        expect(visible).to.be.true;
    });
});