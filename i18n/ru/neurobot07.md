---
id: neurobot07
title: telegram payments
sidebar_label: telegram
---

import YouTube from 'react-youtube'

# Оплата платежей в Telegram боте с использованием Stars

![neurocoder](/img/neurobots/neuro7.png)

В этом руководстве мы рассмотрим, как реализовать систему оплаты в Telegram боте, используя Stars. Мы будем использовать код, представленный в файле `index.ts`, который уже содержит основные команды и обработчики сообщений.

<YouTube videoId='qHd2KiCI1Ic' />

## 1. Настройка бота

Для начала, убедитесь, что у вас есть Telegram бот, созданный через BotFather. Получите токен вашего бота и добавьте его в ваш проект.

## 2. Обработка команд

В коде уже реализованы команды, такие как `/start` и `/buy`. Команда `/buy` инициирует процесс покупки, предлагая пользователю выбрать один из доступных товаров:

```typescript
bot.command('buy', async (ctx) => {
	await ctx.replyWithChatAction('typing')
	await ctx.reply("Choose the option", {
		reply_markup: {
			inline_keyboard: [
				[{text:"Buy me coffee", callback_data: "buy_coffee"}, {text:"Buy me a book", callback_data: "buy_book"}, {text:"Buy me a juice", callback_data: "buy_juice"}],
				[{text:"Buy me a course", callback_data: "buy_course"}],
			]
		}
	})
})
```

## 3. Обработка платежей

Когда пользователь выбирает товар, бот обрабатывает соответствующий `callback_query`. В зависимости от выбранного товара, бот отправляет пользователю счет на оплату:

```typescript
bot.on('callback_query:data', async (ctx) => {
	await ctx.replyWithChatAction("typing")
	const callbackData = ctx.callbackQuery.data
	if (callbackData.startsWith("buy")) {
		if (callbackData.endsWith("coffee")) {
			await ctx.replyWithInvoice(
				"Buy me a coffee",
				"Hot coffee",
				"Coffee",
				"",
				"XTR",
				[{ label: "Цена", amount: 40}]
			)
			return 
		}
		// Аналогично для других товаров...
	}
})
```

## 4. Обработка предзаказа

Бот также обрабатывает предзаказ, чтобы подтвердить, что пользователь готов к оплате:

```typescript
bot.on("pre_checkout_query", (ctx) => {
	ctx.answerPreCheckoutQuery(true);
	return;
});
```

## 5. Запуск сервера

В конце файла мы настраиваем сервер для обработки входящих запросов:

```typescript
Deno.serve(async (req) => {
	try {
	const url = new URL(req.url);
	if (url.searchParams.get('secret') !== Deno.env.get('FUNCTION_SECRET')) {
	return new Response('not allowed', { status: 405 });
	}
	return await handleUpdate(req);
	} catch (err) {
	console.error(err);
	}
});
```

## Заключение

Теперь у вас есть базовая структура для реализации платежей в Telegram боте с использованием Stars. Вы можете расширить функциональность, добавив больше товаров или улучшив обработку ошибок. Убедитесь, что вы тестируете бота в безопасной среде, прежде чем запускать его в продакшн.
