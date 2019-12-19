module.exports = {
  dummyInfo: {
    id: '11.111.111-1',
    pass: 123,
  },
  testCards: [
    {
      name: 'Visa Credit',
      type: 'VISA',
      number: 4051885600446623,
      cvv: 123,
      transactions: true,
    },
    {
      name: 'Visa Debit',
      type: 'VISA',
      number: 4051884239937763,
      cvv: 123,
      transactions: true,
    },
    {
      name: 'MasterCard Credit',
      type: 'MasterCard',
      number: 5186059559590568,
      cvv: 123,
      transactions: false,
    },
    {
      name: 'MasterCard Debit',
      type: 'MasterCard',
      number: 5186008541233829,
      cvv: 123,
      transactions: false,
    },
  ],
  webpayPlus: {
    commerceCode: '597055555532',
    apiKey: '579B532A7440BB0C9079DED94D31EA1615BACEB56610332264630D42D0A36B1C',
    baseURL: {
      test: 'https://webpay3gint.transbank.cl',
      prod: 'https://webpay3.transbank.cl',
    },
  },
};
