const defaultData = require('../utils/defaultData');

const acceptedTypes = ['test', 'prod', 'mock'];

class WebpayPlus {
  constructor(integrationType, apiKey, commerceCode) {
    this.setApiKey(apiKey || defaultData.apiKey);
    this.setCommerceCode(commerceCode || defaultData.commerceCode);
    this.setIntegrationType(integrationType || defaultData.integrationType.test);
  }

  setIntegrationType(type) {
    if (!acceptedTypes.includes(type)) {
      throw new Error('Type not accepted');
    }
    this.integrationType = defaultData.integrationType[type];

    return this;
  }

  getIntegrationType() {
    return this.integrationType;
  }

  setApiKey(apiKey) {
    this.apiKey = apiKey;
    return this;
  }

  getApiKey() {
    return this.apiKey;
  }

  setCommerceCode(commerceCode) {
    this.commerceCode = commerceCode;
    return this;
  }

  getCommerceCode() {
    return this.commerceCode;
  }

  getOptions() {
    return this;
  }
}

module.exports = WebpayPlus;
