# Webpay Plus

First for all you need to know how to use async functions in your projects, all the method will be return a promise. so you need to resolve them.

## environment

for each transaction or methods you will need an options object with the current mandatory params:

```javascript
const options = {
  commerceCode: '597055555532',
  apiKey: '579B532A7440BB0C9079DED94D31EA1615BACEB56610332264630D42D0A36B1C',
  test: true,
};
```

| Param        | type    | Description                                                            | Default Value                                                      |
| :----------- | :------ | :--------------------------------------------------------------------- | :----------------------------------------------------------------- |
| commerceCode | String  | Unique commerce code given by transbank                                | 597055555532                                                       |
| apiKey       | String  | Unique api key given to commerce by webpay                             | '579B532A7440BB0C9079DED94D31EA1615BACEB56610332264630D42D0A36B1C' |
| test         | Boolean | validation of environment, if is false your are pointing to production | true                                                               |

## how to use

in your project you can simply call the product like this:

```javascript
const { webpayPlus } = require('transbank-sdk-node').webpay;
```

### create transaction

pass to the function `transaction.create` of webpayPlus two objects, first the mandatory params and then the options object. Remember, if you don't use an options object you will be pointing to test environment, for production read the [environment](#environment) section.

#### Request

```javascript
const { webpayPlus } = require('transbank-sdk-node').webpay;


const payload = {
  buy_order: 'abc123',
  session_id: 'abc123',
  amount: 1000,
  return_url: 'http://localhost/'
};

const create = async () => {
  const result = await webpayPlus.transaction.create(payload, options)
  return result
}
```

**params:**

| Name       | Type   | Max length            | Description                                      |
| :--------- | :----- | --------------------- | ------------------------------------------------ |
| buy_order  | String | 255 chars             | unique order identifier                          |
| session_id | String | 255 chars             | unique session identifier id                     |
| amount     | Number | limit 3.000.000.- CLP | amount charged at this transaction               |
| return_url | String | 255 chars             | url to return after finish the payment in webpay |

**Response**
if the transaction is created without exceptions _some day I will be documenting all the errors_ you will get an object with this two parameters, you can make a form (with the token blocked or hidden) and send with de `POST` method to the url given in the response. Only after that, which is basically the transaction on the webpay platform you can commit the transaction

```json
{
  "token": "abc.....",
  "url": "https://webpay/url/for/testing"
}
```
// TODO: add a couple of screen shot of the payment platform.

### commit transaction

### status transaction

### refund transaction

### deferred capture

# Webpay Plus Mall

## environment

## how to use

### create transaction

### commit transaction

### status transaction

### refund transaction

### deferred capture
