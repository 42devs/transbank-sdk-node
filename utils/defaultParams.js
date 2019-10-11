const integrationType = 'TEST';
const webpay = {
  apiKey: '579B532A7440BB0C9079DED94D31EA1615BACEB56610332264630D42D0A36B1C',
  headers: {
    commerceCodeNameHeader: '',
    apiKeyNameHeader: '',
  },
  integrationTypeUrl: {
    LIVE: 'https://webpay3g.transbank.cl/',
    TEST: 'https://webpay3gint.transbank.cl/',
  },
  normal: {
    commerceCode: '597055555532',
  },
  mall: {
    commerceCode: '597055555535',
    childCommerceCodes: [
      '597055555536',
      '597055555537',
    ],
  },
  patpassByWebpay: {
    commerceCode: '597055555550',
  },
};


module.exports = {
  integrationType,
  webpay,
};
