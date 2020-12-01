module.exports = {
  integrationType: {
    test: 'https://webpay3gint.transbank.cl', //Remove https:// if you get Error: getaddrinfo ENOTFOUND
    prod: 'https://webpay3g.transbank.cl', //Remove https:// if you get Error: getaddrinfo ENOTFOUND
    mock: '',
  },
  commerceCode: '597055555532',
  apiKey: '579B532A7440BB0C9079DED94D31EA1615BACEB56610332264630D42D0A36B1C',
  mallCommerceCode: '597055555535',
  mallChildCommerceCode: [
    '597055555536',
    '597055555537',
  ],
  deferredCommerceCode: '597055555540',
  oneClickMallCommerceCode: '597055555541',
  oneClickChildCommerceCode: [
    '597055555542',
    '597055555543',
  ],
  patpassCommerceCode: '597055555550',
};
