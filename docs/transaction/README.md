Transbank SDK NodeJS
---

# Create instance

```javascript
const { Transaction } = require('transbank-sdk-node');

const transaction = new Transaction(
    integrationType, // test, prod, mock
    apiKey,
    commerceCode,
)
```


# Create Transaction

```javascript
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
    // handle errors
  }
}
```

## response

```json
{
    "token": "01abebff182b4126819315cec8c61e3d23996fd51a516fa0c035290a6d72aad7",
    "url": "https://webpay3gint.transbank.cl/webpayserver/initTransaction"
}
```

_With this json you only have to send a form with POST method to the URL in it with the "token_ws" parameter and the value of the received token_

```html
<form method="POST" action="JSON response url">
    <input name="token_ws" value="JSON repsonse token" />

    <button type="submit">Send Data</button>
</form>
```

# Commit Transaction

```javascript
const commitTransaction = async (token) => {
  try {
    const response = await transaction.commit(token);

    return response;
  } catch (e) {
    // handle errors
  }
}
```

## response

```JSON
{
  "vci": "TSY",
  "amount": 1000,
  "status": "AUTHORIZED",
  "buyOrder": "123456",
  "sessionId": "session123456",
  "cardDetail": {
    "card_number": 5532
  },
  "accountingDate": 1202,
  "transactionDate": 2020-12-02T15:02:42.748Z,
  "authorizationCode": 195817,
  "paymentTypeCode": "VD",
  "responseCode": 0,
  "installmentsAmount": null,
  "installmentsNumber": null,
  "balance": null
}
```

# Refunds

```javascript
const refund = async (token, amount) => {
  try {
    const response = await transaction.refund(token, amount);

    return response;
  } catch (e) {
    //handle errors
  }
}
```

## response

### full reverse amount
```json
{
    "type": "REVERSED",
    "authorizationCode": null,
    "authorizationDate": null,
    "nullifiedAmount": null,
    "balance": null,
    "responseCode": null,
}
```

# Get Status
