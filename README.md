Transbank SDK nodejs
---
[![NPM](https://nodei.co/npm/transbank-sdk-node.png)](https://nodei.co/npm/transbank-sdk-node/)

![size](https://img.shields.io/github/languages/code-size/themakunga/transbank-sdk-node)
![npm](https://img.shields.io/npm/dw/transbank-sdk-node)
![release deploy](https://github.com/themakunga/transbank-sdk-node/workflows/release%20deploy/badge.svg)

# Requirements

- nodejs lts

## Dependencies:

- **No external libs dependencies!!!**

## Dev Dependencies:

- Eslint
- eslint-config-airbnb-base

# Getting Started

install using `npm` or `yarn`

```bash
npm install transbank-sdk-node
yarn add transbank-sdk-node
```

## Transacción Normal

```javascript
const NormalTransaction = require('transbank-sdk-node');

const transaction = new NormalTransaction.Transaction(
    integrationType, // test, prod, mock
    apiKey,
    commerceCode,
)
const transaction = new NormalTransaction(

);

const createTransaction = async (buyOrder, sessionId, amount, returnUrl) => {
  try {
    const response = await transaction.create(
      buyOrder,
      sessionId,
      amount,
      returnUrl
    );

    return response;
  } catch (e) {
    // handle http errors
  }
}
```


## Roadmap

- [ ] Mall Transaction
- [ ] One Click
  - [ ] One Click Mall
- [ ] Full transaction
  - [ ] Full transaction Mall
- [ ] One Pay
- [ ] PatPass
  - [ ] Patpass Comercio
  - [ ] Patpass by Webpay
- [ ] Update docs
