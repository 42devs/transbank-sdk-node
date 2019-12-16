Awesome NodeJs Transbank SDK
----
<!-- TOC depthFrom:1 depthTo:6 withLinks:1 updateOnSave:1 orderedList:0 -->

	- [Why](#why)
	- [What do I need?](#what-do-i-need)
		- [Technically?](#technically)
			- [.env](#env)
		- [Commercially?](#commercially)
	- [Products](#products)

<!-- /TOC -->
## Why
I've to do a work in [vueJS](https://vuejs.org/) to a client who need to use `transbank webpay` and trying to get a payment method. The people doesn't have time neither money to use other payment gateway. So I've to use the endpoint, now I'm making the full sdk for you to use.

## What do I need?
### Technically?
  you need a `.env` file to use it with the next mandatory params to use it in production, if you are using this for testing or develop, you can just use the SDK without them.

#### .env
```bash
TRANSBANK_WEBPAY_COMMERCE_CODE=56000000
TRANSBANK_WEBPAY_API_KEY=aqwerty123456987
```
*this is only a test, in all examples there're gonna be the necesary params*

### Commercially?
You need to contact to transbank -and pray- to register your commerce and wait for the params to use in production. Sometimes is slow to get, but when you have it you can use the commerce without any problem.


## Products

In this SDK we focus only in the `REST` solutions and trying to follow the correct form in nodejs. Using ES6 and following the Airbnb code style to have a functional, nice and clean code.
Sadly because this is a payment gateway we can't make automated test because you have to have a live environment to parse return URLs, but in this [link](#) *todo: put the correct live test* you have a live test working, it will have google analytics and hotjar to follow how is working (by the end of January is schedule to be ready)

The following products are available in this SDK

[WEBPAY PLUS](./webpay)
