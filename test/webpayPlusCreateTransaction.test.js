/* eslint-disable no-undef */
const { expect } = require('chai');
const webpayPlus = require('../lib/webpayPlus');
const form = require('./webpayplusProcessForm');

let token = '';
let url = '';

describe('Webpay Plus Rest SDK', () => {
  describe('Webpay plus normal transaction', () => {
    it('should get token and url for test', async () => {
      const data = await webpayPlus.create(
        '321cba',
        'abc123',
        1000,
        'http://localhosts.cl/home',
      );
      token = await data.token;
      url = await data.url;
      expect(token).to.be.a('string');
      expect(url).to.be.a('string');
    });
    it('should process token', async () => {
      const webpage = await form(token, url);
    });
    it('should get status transaction', async () => {
      const data = await webpayPlus.status(token);
      const obj = await data;
    });
  });
});
