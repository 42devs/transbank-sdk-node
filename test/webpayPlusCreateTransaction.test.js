const expect = require('chai').expect;
const webpayPlus = require('../lib/webpayPlus');


describe('Webpay Plus Rest SDK', () => {
    describe("Webpay plus normal transaction", async () => {
        await it('should get token and url for test', async () => {
            const res =  await webpayPlus.create('abc123', 'abc123', 1000, 'http://localhosts.cl/home');
            expect(res).to.be.an('object');
        });
    });
});
