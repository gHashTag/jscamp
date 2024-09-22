---
id: neurobot08
title: Телеграм бот с dall-e 3
sidebar_label: Телеграм бот с dall-e 3
---

import YouTube from 'react-youtube'

# Добавление генерации изображений с помощью DALL-E 3 в Telegram-бота

![neurocoder](/img/neurobots/neuro8.png)

В этой статье мы рассмотрим, как расширить функциональность нашего Telegram-бота, добавив возможность генерации изображений с помощью DALL-E 3. Мы будем использовать библиотеку grammY для работы с Telegram API и OpenAI для генерации изображений. Следуя приведенной инструкции, вы сможете интегрировать эту функцию в вашего бота.

<YouTube videoId='BJ5y4278YAE' />

## Шаг 1: Обновление кода бота

Для начала откройте файл index.ts вашего бота и добавьте следующий код:

```typescript
import { Context } from "https://deno.land/x/grammy@v1.8.3/mod.ts";

bot.on("message:text", async (ctx: Context) => {
  if (ctx.message?.text?.startsWith("/")) return;
  await ctx.replyWithChatAction("typing");
  
  const inviter = ctx?.message?.text;
  const message = ctx.update.message;
  const language_code = message?.from?.language_code;
  const username = message?.from?.username;
  const telegram_id = message?.from?.id.toString();

  if (!ctx.from) throw new Error("User not found");

  // Проверяем, является ли сообщение ответом на другое сообщение
  if (ctx?.message?.reply_to_message) {
    // Получаем текст оригинального сообщения
    const query = ctx.message.text;
    const originalMessageText = ctx?.message?.reply_to_message?.caption
      ? ctx?.message?.reply_to_message?.caption
      : ctx?.message?.reply_to_message?.text;
      
    console.log(originalMessageText);
    
    if (originalMessageText?.includes('Что вы хотите создать?')) {
      await ctx.reply(originalMessageText);
      console.log('vkclip'); 
      await ctx.replyWithChatAction('typing');
      
      if (!ctx.from) throw new Error('User not found');

      // Генерация изображения с помощью OpenAI
      const response = await openai.images.generate({ 
        model: 'dall-e-3', 
        prompt: originalMessageText, 
        n: 1, 
        size: '1024x1792', 
      });
      
      console.log(response, 'response');
      const image_url = response.data[0].url;

      if (!image_url) throw new Error('Image URL not found');
      await ctx.replyWithPhoto(image_url); 
      
      return; 
    }
  } 
});
```

## Пояснение к коду

1.	Импортируем Context: Мы импортируем Context из библиотеки grammY, чтобы иметь доступ к контексту сообщения.
2.	Обработка текстового сообщения: Мы добавляем обработчик для текстовых сообщений, который будет реагировать на сообщения, не начинающиеся с /.
3.	Отображение действия "печатает": При получении сообщения бот показывает, что он "печатает" ответ.
4.	Проверка на ответ: Если сообщение является ответом на другое сообщение, мы получаем текст оригинального сообщения.
5.	Генерация изображения: Если текст оригинального сообщения содержит фразу "Что вы хотите создать?", бот отправляет запрос к OpenAI для генерации изображения с использованием DALL-E 3. Мы передаем оригинальный текст как prompt.
6.	Отправка изображения: После получения URL сгенерированного изображения, бот отправляет его пользователю.

## Шаг 2: Импорт необходимых библиотек
Не забудьте импортировать необходимые библиотеки в начале вашего файла index.ts, если вы этого еще не сделали:

```typescript
import { Context } from "https://deno.land/x/grammy@v1.8.3/mod.ts";
import { openai } from "./path/to/openai/client.ts"; // Убедитесь, что путь к клиенту OpenAI правильный
```

## Заключение

Теперь ваш Telegram-бот способен генерировать изображения с помощью DALL-E 3 на основе текстовых запросов пользователей. Это расширяет функциональность бота и делает его более интерактивным и интересным для пользователей. Вы можете продолжать улучшать его, добавляя новые команды и функции. Удачи в разработке!
