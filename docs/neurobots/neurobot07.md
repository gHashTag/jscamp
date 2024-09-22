---
id: neurobot07
title: Telegram payments
sidebar_label: Telegram payments
---

import YouTube from 'react-youtube'

# Payment Processing in a Telegram Bot Using Stars

![neurocoder](/img/neurobots/neuro7.png)

In this guide, we will explore how to implement a payment system in a Telegram bot using Stars. We will use the code provided in the `index.ts` file, which already contains the main commands and message handlers.

<YouTube videoId='qHd2KiCI1Ic' />

## 1. Setting Up the Bot

First, make sure you have a Telegram bot created through BotFather. Obtain your bot's token and add it to your project.

## 2. Command Handling

The code already implements commands such as `/start` and `/buy`. The `/buy` command initiates the purchasing process, prompting the user to choose one of the available products:

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

## 3. Payment Processing

When the user selects a product, the bot processes the corresponding `callback_query`. Depending on the selected product, the bot sends the user an invoice for payment:

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
				[{ label: "Price", amount: 40 }]
			)
			return 
		}
		// Аналогично для других товаров...
	}
})
```

## 4. Pre-checkout Handling

The bot also handles pre-checkout to confirm that the user is ready to make a payment:

```typescript
bot.on("pre_checkout_query", (ctx) => {
	ctx.answerPreCheckoutQuery(true);
	return;
});
```

## 5. Server Setup

At the end of the file, we set up the server to handle incoming requests:

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

## Conclusion

Now you have a basic structure for implementing payments in a Telegram bot using Stars. You can expand functionality by adding more products or improving error handling. Make sure to test the bot in a safe environment before deploying it to production.
