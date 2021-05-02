---
id: telegraf00
title: Оплата в Telegram боте 
sidebar_label: Оплата в Telegram боте 
---

Платежи 2.0 — В мессенджере Telegram появилась возможность принимать платежи в любом чате, включая группы и каналы. Подключить свой магазин к платформе можно самостоятельно, без согласования с Telegram.

![Платежи 2.0](/img/telegraf/Cover.jpg)

И в этом туториале мы создадим простого бота с [Node.js](https://nodejs.org/en/) на фреймворке [Telegraf.js](https://telegraf.js.org/), который сможет принимать деньги с клиента и отправлять их на ваш счет через Сбербанк.

![Платежи 2.0](https://telegram.org/file/464001036/3/9ZnITFnkib4.283442/5dc5b1f30fa97ec631)

## Платежи 2.0

Платёжные боты существуют в Telegram с 2017 года. С их помощью можно безопасно оплачивать товары и услуги вроде доставки пиццы, не покидая приложения.

С сегодняшнего дня продавцы могут принимать платежи кредитными картами с помощью 8-ми встроенных платёжных систем в любом чате, включая группы и каналы.

На данный момент поддерживаются платежи из более чем 200 стран через следующие платежные системы:

![payments](/img/telegraf/payments.jpg)

Telegram не обрабатывает платежи от пользователей и вместо этого полагается на разных поставщиков платежей по всему миру. Именно провайдеры платежей обрабатывают и хранят всю конфиденциальную информацию, например данные кредитной карты. Ни Telegram, ни разработчики ботов не имеют к нему доступа.

Для оплаты можно использовать любое приложение – в том числе Telegram для компьютеров. Покупатель также может оставить чаевые, чтобы поддержать любимого автора, кафе или магазин.


## Создаём бота в Telegram

Бот в Telegram создается при помощи другого бота под названием [@BotFather](http://telegram.me/BotFather). Отправляем ему команду `/newbot`, выбираем имя, которое будет отображаться в списке контактов, и адрес. Например, `Оплата в Telegram боте` с адресом `sber_pay_test_bot`.

![newBot](/img/telegraf/newBot.jpg)

Если адрес не занят, а имя введено правильно, BotFather пришлет в ответ сообщение с токеном — «ключом» для доступа к созданному боту. 

:::caution Внимание
Его нужно сохранить и никому не показывать.
:::

## Создаем проект Node.js

Далее создадим новый проект. Создаем папку. 

Вводим в консоле:

```bash
mkdir sber_pay_test_bot && cd sber_pay_test_bot
```
Затем:

```bash npm2yarn
npm init 
```

Программа задаёт вам разные вопросы и создает `package.json`, который определяет настройки проекта, зависимости, скрипты, название и прочее. Для примера можно везде нажать `enter`

и добавим файл `index.js` в котором будет разрабатываться наш бот. 

```bash
touch index.js    
```

## Telegraf.js

Cтавим [telegraf.js](https://telegraf.js.org) — это один из популярных фреймворков для создания телеграм бота. 

```bash npm2yarn
npm install telegraf@3.38 
```

Ставим библиотеку `dotenv` - это модуль, который загружает переменные среды из файла `.env` в `process.env.`, а также заодно поставим `nodemon` - инструмент, который помогает разрабатывать приложения на основе node.js путем автоматического перезапуска приложения `node` при обнаружении изменений файлов в каталоге.

```bash npm2yarn
npm install dotenv nodemon
```

Добавляем скрипт запуска в `package.json`

```json
"scripts": {
    "start": "nodemon index"
}
```

Из документации [telegraf.js](https://telegraf.js.org), копируем в наш проект первоначальную настройку бота.

```js
const { Telegraf } = require('telegraf')
require('dotenv').config()

const bot = new Telegraf(process.env.BOT_TOKEN) //сюда помещается токен, который дал botFather

bot.start((ctx) => ctx.reply('Welcome')) //ответ бота на команду /start
bot.help((ctx) => ctx.reply('Send me a sticker')) //ответ бота на команду /help
bot.on('sticker', (ctx) => ctx.reply('')) //bot.on это обработчик введенного юзером сообщения, в данном случае он отслеживает стикер, можно использовать обработчик текста или голосового сообщения
bot.hears('hi', (ctx) => ctx.reply('Hey there')) // bot.hears это обработчик конкретного текста, данном случае это - "hi"
bot.launch() // запуск бота
```

Создаем файл `.env` куда в переменную `BOT_TOKEN` кладем токен, который ранее нам выдал [@BotFather](http://telegram.me/BotFather) 

```js
BOT_TOKEN='сюда'
```

Запускаем бот командой

```bash npm2yarn
npm run start
```

Проверяем работу бота

![chekBot](/img/telegraf/checkBot.jpg)


## Получаем PROVIDER_TOKEN от @SberbankPaymentBot

Для получения `PROVIDER_TOKEN` вам необходимо получить `merchantLogin` в Сбербанке. Для этого необходимо подключить [услугу интерент-эквайринг в Сбербанке](https://www.sberbank.ru/ru/s_m_business/bankingservice/acquiring_total).

После того как вы его получили переходим в [@BotFather](http://telegram.me/BotFather) и вызываем команду `/mybots`, где выбираем вашего бота.

Далее `Payments`

![Payments](/img/telegraf/selectPayments.jpg)

Где выбираем Сбербанк 

![Payments](/img/telegraf/selectSber.jpg)

Выбираем `Connect Сбербанк Live`

![Payments](/img/telegraf/SberLive.jpg)

После этого вас перекинет на `@SberbankPaymentBot`, где нужно ввести ваш `merchantLogin`, который необходимо вводить без всяких префиксов `-api` или `-operator`. Например так: `P71XXXXXXX21`. Из-за того что я этого не знал, у меня ушло на переписку с техподдержкой Сбербанка неделя времени. 

![SberbankPaymentBot](/img/telegraf/SberPaymentBot.jpg)

После [@BotFather](http://telegram.me/BotFather) выдаст вам токен, который нужно вставить в переменную `PROVIDER_TOKEN` файла `.env`

```json
PROVIDER_TOKEN='41018XXXX:LIVE:XXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
```

![SberbankPaymentBot](/img/telegraf/token.jpg)

## Подключаем оплату в приложении

Пишем в `index.js` следующий код:

```javascript title="index.js"
const { Telegraf, Markup } = require('telegraf')
require('dotenv').config()

const bot = new Telegraf(process.env.BOT_TOKEN) //сюда помещается токен, который дал botFather

const getInvoice = (id) => {
  const invoice = {
    chat_id: id, // Уникальный идентификатор целевого чата или имя пользователя целевого канала
    provider_token: process.env.PROVIDER_TOKEN, // токен выданный через бот @SberbankPaymentBot 
    start_parameter: 'get_access', //Уникальный параметр глубинных ссылок. Если оставить поле пустым, переадресованные копии отправленного сообщения будут иметь кнопку «Оплатить», позволяющую нескольким пользователям производить оплату непосредственно из пересылаемого сообщения, используя один и тот же счет. Если не пусто, перенаправленные копии отправленного сообщения будут иметь кнопку URL с глубокой ссылкой на бота (вместо кнопки оплаты) со значением, используемым в качестве начального параметра.
    title: 'InvoiceTitle', // Название продукта, 1-32 символа
    description: 'InvoiceDescription', // Описание продукта, 1-255 знаков
    currency: 'RUB', // Трехбуквенный код валюты ISO 4217
    prices: [{ label: 'Invoice Title', amount: 100 * 100 }], // Разбивка цен, сериализованный список компонентов в формате JSON 100 копеек * 100 = 100 рублей
    payload: { // Полезные данные счета-фактуры, определенные ботом, 1–128 байт. Это не будет отображаться пользователю, используйте его для своих внутренних процессов.
      unique_id: `${id}_${Number(new Date())}`,
      provider_token: process.env.PROVIDER_TOKEN 
    }
  }

  return invoice
}

bot.use(Telegraf.log())

bot.hears('pay', (ctx) => { . // это обработчик конкретного текста, данном случае это - "pay"
  return ctx.replyWithInvoice(getInvoice(ctx.from.id)) //  метод replyWithInvoice для выставления счета  
})

bot.on('pre_checkout_query', (ctx) => ctx.answerPreCheckoutQuery(true)) // ответ на предварительный запрос по оплате

bot.on('successful_payment', async (ctx, next) => { // ответ в случае положительной оплаты
  await ctx.reply('SuccessfulPayment')
})

bot.launch()
```

Метод Telegraf [replyWithInvoice](http://49.213.81.43/static/tool/thuocbot/node_modules/telegraf/docs/#/) это метод [telegram.sendInvoice](https://core.telegram.org/bots/api#sendinvoice).

Используйте этот метод для отправки счетов. В случае успеха отправленное сообщение возвращается.


Запускаем бот командой `yarn start` и проверяем проходит ли оплата.

Проверить как работает оплата можно в наших телеграм ботах [JavaScript Bot](https://t.me/javascriptcamp_bot) - это бот с тестовыми вопросами по нашим курсам JavaScript, React Native, TypeScript, а также проверить платежи можно боте по изучению английских слов по эмодзи [Englishmoji](https://t.me/englishmoji_bot)

## Проблемы или вопросы?

Задавайте их в телеграм сообществе [Боты на Telegraf](https://t.me/telegraf_ru)

Подписывайтесь на наши [новости](https://t.me/javascriptapp) и социальные сети.

![JavaScript Camp](/img/bandlink.png)