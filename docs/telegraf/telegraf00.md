---
id: telegraf00
title: Payment in Telegram bot
sidebar_label: Payment in Telegram bot
---

Payments 2.0 - The Telegram messenger now has the ability to accept payments in any chat, including groups and channels. You can connect your store to the platform on your own, without agreement with Telegram.


![Платежи 2.0](/img/telegraf/Cover.jpg)

And in this tutorial we will create a simple bot with [Node.js](https://nodejs.org/en/) on the [Telegraf.js](https://telegraf.js.org/) framework  that can accept money from the client and send them to your account through Sberbank.

![Платежи 2.0](https://telegram.org/file/464001036/3/9ZnITFnkib4.283442/5dc5b1f30fa97ec631)

## Payments 2.0

Payment bots have existed on Telegram since 2017. With their help, you can safely pay for goods and services like pizza delivery without leaving the app.

From now on, merchants can accept credit card payments using 8 built-in payment systems in any chat, including groups and channels.

At the moment, payments from more than 200 countries are supported through the following payment systems:

![payments](/img/telegraf/payments.jpg)

Telegram does not process payments from users and instead relies on different payment providers around the world. It is the payment providers that process and store all confidential information, such as credit card information. Neither Telegram nor bot developers have access to it.

You can use any application for payment, including Telegram for computers. A customer can also leave a tip to support a favorite author, cafe or store.


## Создаём бота в Telegram

Telegram bot is created using another bot called [@BotFather](http://telegram.me/BotFather). We send him the command `/ newbot`, select the name that will be displayed in the contact list, and the address. For example, `Payment in Telegram bot` with the address `sber_pay_test_bot`.

![newBot](/img/telegraf/newBot.jpg)

If the address is not busy, and the name is entered correctly, BotFather will send in response a message with a token - "key" to access the created bot.

:::caution Attention
It must be preserved and not shown to anyone.
:::

## Create a Node.js project

Next, let's create a new project. We create a folder.

Enter in the console:

```bash
mkdir sber_pay_test_bot && cd sber_pay_test_bot
```
Then:

```bash npm2yarn
npm init 
```

The program asks you different questions and creates a `package.json` that defines the project settings, dependencies, scripts, name, and more. For example, you can press `enter` everywhere

and add the file `index.js` in which our bot will be developed.

```bash
touch index.js    
```

## Telegraf.js

We install [telegraf.js](https://telegraf.js.org) - this is one of the popular frameworks for creating telegram bots.

```bash npm2yarn
npm install telegraf@3.38 
```

We put the `dotenv` library - this is a module that loads environment variables from the `.env` file into `process.env.`, and also we put `nodemon` - a tool that helps to develop applications based on node.js by automatically restarting the application `node` when it detects file changes in a directory.

```bash npm2yarn
npm install dotenv nodemon
```

Add the startup script to `package.json`

```json
"scripts": {
    "start": "nodemon index"
}
```

From the [telegraf.js](https://telegraf.js.org) documentation, copy the initial bot setup into our project.

```js
const { Telegraf } = require('telegraf')
require('dotenv').config()

const bot = new Telegraf(process.env.BOT_TOKEN) // this is where the token given by botFather is placed

bot.start((ctx) => ctx.reply('Welcome')) // the bot's response to the /start command
bot.help((ctx) => ctx.reply('Send me a sticker')) // the bot's response to the / help command
bot.on('sticker', (ctx) => ctx.reply('')) // bot.on is a handler for a user-entered message, in this case it tracks a sticker, you can use a text or voice message handler
bot.hears('hi', (ctx) => ctx.reply('Hey there')) // bot.hears is a handler for a specific text, in this case it is "hi"
bot.launch() // bot launch
```

Create a file `.env` where in the variable `BOT_TOKEN` we put the token that was given to us earlier by [@BotFather](http://telegram.me/BotFather) 

```js
BOT_TOKEN='сюда'
```

Create a file `.env` where in the variable BOT_TOKEN` we put the token that was given to us earlier by [@BotFather]

```bash npm2yarn
npm run start
```

Checking the bot's work

![chekBot](/img/telegraf/checkBot.jpg)


## We get PROVIDER_TOKEN from @SberbankPaymentBot

To get `PROVIDER_TOKEN` you need to get `merchantLogin` from Sberbank. To do this, you need to connect [the Internet acquiring service at Sberbank](https://www.sberbank.ru/ru/s_m_business/bankingservice/acquiring_total).

After you have received it, go to [@BotFather](http://telegram.me/BotFather) and call the command `/ mybots`, where we select your bot.

Next `Payments`

![Payments](/img/telegraf/selectPayments.jpg)

Where we choose Sberbank

![Payments](/img/telegraf/selectSber.jpg)

Choose `Connect Sberbank Live`

![Payments](/img/telegraf/SberLive.jpg)

After that you will be redirected to `@SberbankPaymentBot`, where you need to enter your `merchantLogin`, which must be entered without any `-api` or `-operator` prefixes. For example: `P71XXXXXXX21`. Due to the fact that I did not know this, it took me a week to correspond with the technical support of Sberbank.

![SberbankPaymentBot](/img/telegraf/SberPaymentBot.jpg)

After [@BotFather](http://telegram.me/BotFather) will give you a token that you need to insert into the variable `PROVIDER_TOKEN` in the file `.env`

```json
PROVIDER_TOKEN='41018XXXX:LIVE:XXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
```

![SberbankPaymentBot](/img/telegraf/token.jpg)

## We connect payment in the application

We write the following code in `index.js`:

```javascript title="index.js"
const { Telegraf, Markup } = require('telegraf')
require('dotenv').config()

const bot = new Telegraf(process.env.BOT_TOKEN) // this is where the token that botFather gave

const getInvoice = (id) => {
  const invoice = {
    chat_id: id, // Unique identifier of the target chat or username of the target channel
    provider_token: process.env.PROVIDER_TOKEN, // token issued via bot @SberbankPaymentBot
    start_parameter: 'get_access', // Unique parameter for deep links. If you leave this field blank, forwarded copies of the forwarded message will have a Pay button that allows multiple users to pay directly from the forwarded message using the same account. If not empty, redirected copies of the sent message will have a URL button with a deep link to the bot (instead of a payment button) with a value used as an initial parameter.
    title: 'InvoiceTitle', // Product name, 1-32 characters
    description: 'InvoiceDescription', // Product description, 1-255 characters
    currency: 'RUB', // ISO 4217 Three-Letter Currency Code
    prices: [{ label: 'Invoice Title', amount: 100 * 100 }], // Price breakdown, serialized list of components in JSON format 100 kopecks * 100 = 100 rubles
    payload: { // The payload of the invoice, as determined by the bot, 1-128 bytes. This will not be visible to the user, use it for your internal processes.
      unique_id: `${id}_${Number(new Date())}`,
      provider_token: process.env.PROVIDER_TOKEN 
    }
  }

  return invoice
}

bot.use(Telegraf.log())

bot.hears('pay', (ctx) => { . // this is a handler for a specific text, in this case it is "pay"
  return ctx.replyWithInvoice(getInvoice(ctx.from.id)) //  replyWithInvoice method for invoicing 
})

bot.on('pre_checkout_query', (ctx) => ctx.answerPreCheckoutQuery(true)) // response to a preliminary request for payment

bot.on('successful_payment', async (ctx, next) => { // reply in case of positive payment
  await ctx.reply('SuccessfulPayment')
})

bot.launch()
```

The Telegraf method [replyWithInvoice](http://49.213.81.43/static/tool/thuocbot/node_modules/telegraf/docs/#/) is the [telegram.sendInvoice](https://core.telegram.org/bots/api#sendinvoice) method .

Use this method to send invoices. If successful, the message sent is returned.


We launch the bot with the command `yarn start` and check if the payment is completed.

You can check how payment works in our telegram bots [JavaScript Bot](https://t.me/javascriptcamp_bot) - this is a bot with test questions for our JavaScript, React Native, TypeScript courses, and you can also check payments in a bot for learning English words by emoji [Englishmoji](https://t.me/englishmoji_bot)

## Problems or questions?

Ask them in the telegram community [Bots on Telegraf](https://t.me/telegraf_ru)

Subscribe to our [news] (https://t.me/javascriptapp) and social networks.


![JavaScript Camp](/img/bandlink.png)