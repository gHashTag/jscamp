---
id: neurobot06
title: Телеграм бот
sidebar_label: Телеграм бот
---

import YouTube from 'react-youtube'

# Создание Telegram-бота с использованием Deno, Supabase Edge Functions, OpenAI и grammY

![neurocoder](/img/neurobots/neuro6.png)

В этой статье мы рассмотрим, как создать Telegram-бота, используя Deno для серверной части, Supabase Edge Functions для обработки запросов, OpenAI для генерации ответов и библиотеку grammY для взаимодействия с Telegram API. Следуя пошаговым инструкциям, вы сможете создать функционального бота, который будет отвечать на сообщения пользователей.

<YouTube videoId='WTMMBT5hgeQ' />

## Шаг 1: Установка необходимых инструментов

Для начала вам нужно установить несколько инструментов:
1.	Supabase: Установите Supabase CLI, следуя официальным инструкциям.
2.	Docker Desktop: Установите Docker Desktop с официального сайта.
3.	ngrok: Установите ngrok с помощью Chocolatey:

```bash
choco install ngrok
``` 

## Шаг 2: Создание бота в BotFather

1.	Перейдите в Telegram и найдите бота @BotFather.
2.	Отправьте команду /newbot и следуйте инструкциям, чтобы создать нового бота.
3.	Сохраните токен вашего бота, который будет использоваться в коде.

## Шаг 3: Инициализация проекта
Создайте новую папку для вашего проекта и перейдите в нее. Затем выполните следующую команду в терминале:

```bash
supabase init
```

Эта команда создаст структуру проекта Supabase.

## Шаг 4: Установка Deno

Убедитесь, что у вас установлен Deno. Вы можете скачать его с официального сайта.

## Шаг 5: Создание функции

Создайте новую функцию, выполнив команду в терминале:

```bash
supabase functions new telegram-bot
```

Это создаст новую папку с шаблоном функции.

## Шаг 6: Создание структуры проекта

В папке functions создайте новую папку _shared. В этой папке создайте папку telegram, а в ней создайте файл bots.ts. Вставьте в bots.ts следующий код:

```typescript
import { Bot, webhookCallback } from "https://deno.land/x/grammy@v1.8.3/mod.ts";

if (!Deno.env.get("TELEGRAM_BOT_TOKEN")) throw new Error("TELEGRAM_BOT_TOKEN is not set");

export const bot = new Bot(Deno.env.get("TELEGRAM_BOT_TOKEN") || "");
export const handleUpdate = webhookCallback(bot, 'std/http');
Пояснение к коду:
•	Мы импортируем необходимые модули из библиотеки grammY.
•	Проверяем, установлен ли токен бота в переменных окружения.
•	Создаем экземпляр бота и функцию для обработки обновлений.
Шаг 7: Настройка OpenAI
В папке _shared создайте папку openai, и в ней два файла: index.ts и client.ts.
```
В client.ts вставьте следующий код:

```typescript
import OpenAI from "https://deno.land/x/openai@v4.28.0/mod.ts";

if (!Deno.env.get("OPENAI_API_KEY")) throw new Error("OpenAI API key not set");

export const apiKey = Deno.env.get("OPENAI_API_KEY");
export const openai = new OpenAI({ apiKey });
```

Пояснение к коду:
•	Импортируем библиотеку OpenAI.
•	Проверяем, установлен ли API-ключ OpenAI в переменных окружения.
•	Создаем экземпляр OpenAI с использованием API-ключа.
В index.ts вставьте следующий код:

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

Пояснение к коду:
•	Функция answerAi принимает текст запроса и код языка.
•	Формирует системный промпт и отправляет запрос к OpenAI.
•	Возвращает ответ от OpenAI.

## Шаг 8: Основная логика функции

Откройте файл index.ts в папке вашей функции и вставьте следующий код:

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

Пояснение к коду:
•	Импортируем функции и объекты из других файлов.
•	Обрабатываем команду /start, отправляя приветственное сообщение.
•	Обрабатываем текстовые сообщения, отправляя запрос к OpenAI и отвечая пользователю.

## Шаг 9: Настройка переменных окружения

В корне проекта создайте файл .env и вставьте следующий код:

```text
TELEGRAM_BOT_TOKEN=
OPENAI_API_KEY=
FUNCTION_SECRET=
```

Заполните переменные значениями вашего токена Telegram, API-ключа OpenAI и создайте секрет для функции. Секрет можно задать произвольно, например, MY_SECRET.

## Шаг 10: Запуск и тестирование

1.	Запустите ngrok, чтобы создать туннель:

```bash
ngrok http 54321
```

2.	В другом терминале запустите Supabase функции:

```bash
supabase functions serve --env-file .env --no-verify-jwt
```

## Шаг 11: Настройка вебхука

Скопируйте ссылку, полученную от ngrok (она будет отображаться после слова "forwarding" и до "ngrok-free.app" включительно).Установите вебхук для вашего бота, выполнив следующий запрос:

```bash
curl -X POST https://api.telegram.org/bot<YOUR_BOT_TOKEN>/setWebhook?url=<ВАШАССЫЛКА>?secret=<YOUR_FUNCTION_SECRET>
```

Замените <YOUR_BOT_TOKEN> на токен вашего бота и <YOUR_FUNCTION_SECRET> на секрет вашей функции.

## Заключение

Теперь ваш Telegram-бот готов к работе! Он использует Deno для выполнения серверной логики, Supabase Edge Functions для обработки запросов и OpenAI для генерации ответов на сообщения пользователей. Вы можете расширять функциональность бота, добавляя новые команды и улучшая взаимодействие с пользователями. Удачи в разработке!
