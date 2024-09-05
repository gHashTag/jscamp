---
id: neurobot06
title: Creating a Telegram Bot Using Deno, Supabase Edge Functions, OpenAI, and grammY
sidebar_label: Telegram Bot
---

import YouTube from 'react-youtube'

# Creating a Telegram Bot Using Deno, Supabase Edge Functions, OpenAI, and grammY

![neurocoder](/img/neurobots/neuro6.png)

In this article, we will discuss how to create a Telegram bot using Deno for the backend, Supabase Edge Functions for handling requests, OpenAI for generating responses, and the grammY library for interacting with the Telegram API. By following the step-by-step instructions, you will be able to create a functional bot that responds to user messages.

<YouTube videoId='WTMMBT5hgeQ' />

## Step 1: Installing Required Tools

First, you need to install several tools:
1. Supabase: Install the Supabase CLI by following the official instructions.
2. Docker Desktop: Install Docker Desktop from the official website.
3. ngrok: Install ngrok using Chocolatey:

```bash
choco install ngrok
```

## Step 2: Creating a Bot in BotFather

1. Go to Telegram and find the bot @BotFather.
2. Send the command /newbot and follow the instructions to create a new bot.
3. Save your bot token, which will be used in the code.

## Step 3: Initializing the Project

Create a new folder for your project and navigate to it. Then run the following command in the terminal:

```bash
supabase init
```

This command will create the Supabase project structure.

## Step 4: Installing Deno

Make sure you have Deno installed. You can download it from the official website.

## Step 5: Creating a Function

Create a new function by running the command in the terminal:

```bash
supabase functions new telegram-bot
```

This will create a new folder with a function template.

## Step 6: Creating the Project Structure

In the functions folder, create a new folder called _shared. Inside this folder, create a folder named telegram, and within it, create a file called bots.ts. Insert the following code into bots.ts:

```typescript
import { Bot, webhookCallback } from "https://deno.land/x/grammy@v1.8.3/mod.ts";

if (!Deno.env.get("TELEGRAM_BOT_TOKEN")) throw new Error("TELEGRAM_BOT_TOKEN is not set");

export const bot = new Bot(Deno.env.get("TELEGRAM_BOT_TOKEN") || "");
export const handleUpdate = webhookCallback(bot, 'std/http');
```

### Explanation of the Code:
- We import the necessary modules from the grammY library.
- We check if the bot token is set in the environment variables.
- We create an instance of the bot and a function to handle updates.

## Step 7: Setting Up OpenAI

In the _shared folder, create a folder named openai, and within it, create two files: index.ts and client.ts. Insert the following code into client.ts:

```typescript
import OpenAI from "https://deno.land/x/openai@v4.28.0/mod.ts";

if (!Deno.env.get("OPENAI_API_KEY")) throw new Error("OpenAI API key not set");

export const apiKey = Deno.env.get("OPENAI_API_KEY");
export const openai = new OpenAI({ apiKey });
```

### Explanation of the Code:
- We import the OpenAI library.
- We check if the OpenAI API key is set in the environment variables.
- We create an instance of OpenAI using the API key.

In index.ts, insert the following code:

```typescript
import { model_ai } from "../constants.ts";
import { openai } from "./client.ts";

export async function answerAi(prompt: string, language_code: string) {
  try {
    const systemPrompt = `Reply to the user in language: ${language_code}`;

    const chatCompletion = await openai.chat.completions.create({
      messages: [
        { role: "user", content: prompt },
        { role: "system", content: systemPrompt },
      ],
      model: model_ai,
      stream: false,
      temperature: 0.1,
    });

    console.log(chatCompletion);
    return chatCompletion.choices[0].message.content; 
  } catch (e) {
    throw new Error("Error_answerAi", e);
  } 
}
```

### Explanation of the Code:
- The function answerAi takes a text prompt and a language code.
- It forms a system prompt and sends a request to OpenAI.
- It returns the response from OpenAI.

## Step 8: Main Logic of the Function

Open the index.ts file in your function folder and insert the following code:

```typescript
import { bot, handleUpdate } from "../_shared/telegram/bots.ts";
import { answerAi } from "../_shared/openai/index.ts";

console.log(`Function "telegram-bot" up and running!`);

bot.command('start', (ctx) => ctx.reply('Welcome! Up and running.'));

bot.on('message', async (ctx) => {
  console.log(ctx.message);
  await ctx.replyWithChatAction("typing");
  const answer = await answerAi(ctx.message.text || '', ctx.message.from.language_code || '');
  await ctx.reply(answer || '');
});

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

### Explanation of the Code:
- We import functions and objects from other files.
- We handle the /start command by sending a welcome message.
- We handle text messages by sending a request to OpenAI and replying to the user.

## Step 9: Setting Up Environment Variables

In the root of the project, create a .env file and insert the following code:

```text
TELEGRAM_BOT_TOKEN=
OPENAI_API_KEY=
FUNCTION_SECRET=
```

Fill in the variables with your Telegram token, OpenAI API key, and create a secret for the function. The secret can be set arbitrarily, for example, MY_SECRET.

## Step 10: Running and Testing

1. Run ngrok to create a tunnel:

```bash
ngrok http 54321
```

2. In another terminal, run Supabase functions:

```bash
supabase functions serve --env-file .env --no-verify-jwt
```

## Step 11: Setting Up the Webhook

Copy the link obtained from ngrok (it will be displayed after the word "forwarding" and before "ngrok-free.app"). Set the webhook for your bot by executing the following request:

```bash
curl -X POST https://api.telegram.org/bot<YOUR_BOT_TOKEN>/setWebhook?url=<YOUR_URL>?secret=<YOUR_FUNCTION_SECRET>
```

Replace <YOUR_BOT_TOKEN> with your bot token and <YOUR_FUNCTION_SECRET> with your function secret.

## Conclusion

Now your Telegram bot is ready to work! It uses Deno to perform server logic, Supabase Edge Functions to handle requests, and OpenAI to generate responses to user messages. You can expand the bot's functionality by adding new commands and improving user interaction. Good luck with your development!
