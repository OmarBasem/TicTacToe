describe('Example', () => {
    beforeAll(async () => {
        await device.launchApp();
    });

    it('should render HomeScreen and 9 boxes', async () => {
        await expect(element(by.id('HomeScreen'))).toBeVisible()
        await expect(element(by.id('00'))).toBeVisible()
        await expect(element(by.id('01'))).toBeVisible()
        await expect(element(by.id('02'))).toBeVisible()
        await expect(element(by.id('10'))).toBeVisible()
        await expect(element(by.id('11'))).toBeVisible()
        await expect(element(by.id('12'))).toBeVisible()
        await expect(element(by.id('20'))).toBeVisible()
        await expect(element(by.id('21'))).toBeVisible()
        await expect(element(by.id('22'))).toBeVisible()
    });

    it('should X win by completing ROW 0', async () => {
        await element(by.id('00')).tap()
        await element(by.id('10')).tap()
        await element(by.id('01')).tap()
        await element(by.id('11')).tap()
        await element(by.id('02')).tap()
        await expect(element(by.text('X WIN'))).toBeVisible()

    })

    it('should be able to play again, and update score', async () => {
        await element(by.text('Play Again')).tap()
        await expect(element(by.text('1 : 0'))).toBeVisible()
    })

    it('should O win by completing COL 1', async () => {
        await element(by.id('02')).tap()
        await element(by.id('01')).tap()
        await element(by.id('00')).tap()
        await element(by.id('11')).tap()
        await element(by.id('10')).tap()
        await element(by.id('21')).tap()
        await expect(element(by.text('O WIN'))).toBeVisible()
        await element(by.text('Play Again')).tap()
        await expect(element(by.text('1 : 1'))).toBeVisible()
    })

    it('should X win by completing Diagonal line', async () => {
        await element(by.id('00')).tap()
        await element(by.id('10')).tap()
        await element(by.id('11')).tap()
        await element(by.id('02')).tap()
        await element(by.id('22')).tap()
        await expect(element(by.text('X WIN'))).toBeVisible()
        await element(by.text('Play Again')).tap()
        await expect(element(by.text('2 : 1'))).toBeVisible()
    })

    it('should draw', async () => {
        await element(by.id('00')).tap()
        await element(by.id('01')).tap()
        await element(by.id('02')).tap()
        await element(by.id('11')).tap()
        await element(by.id('10')).tap()
        await element(by.id('12')).tap()
        await element(by.id('22')).tap()
        await element(by.id('20')).tap()
        await element(by.id('21')).tap()
        await expect(element(by.text('DRAW'))).toBeVisible()
        await element(by.text('Play Again')).tap()
        await expect(element(by.text('2 : 1'))).toBeVisible()
    })
});
