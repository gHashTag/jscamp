---
id: neurobot08
title: DALL-E 3 Telegram Bot
sidebar_label: DALL-E 3 TG Bot
---

import YouTube from 'react-youtube'

# Adding Image Generation with DALL-E 3 to a Telegram Bot

![neurocoder](/img/neurobots/neuro8.png)

In this article, we will explore how to extend the functionality of our Telegram bot by adding the ability to generate images using DALL-E 3. We will use the grammY library to work with the Telegram API and OpenAI for image generation. By following the instructions provided, you will be able to integrate this feature into your bot.

<YouTube videoId='BJ5y4278YAE' />

## Step 1: Updating the Bot Code

First, open the `index.ts` file of your bot and add the following code:

```typescript
import { Context } from "https://deno.land/x/grammy@v1.8.3/mod.ts";
bot.on("message:text", async (ctx: Context) => {
    if (ctx.message?.text?.startsWith("/")) return;
    await ctx.replyWithChatAction("typing");
    const message = ctx.update.message;
    
    if (!ctx.from) throw new Error("User not found");
    
    // Check if the message is a reply to another message
    if (ctx?.message?.reply_to_message) {
        const originalMessageText = ctx?.message?.reply_to_message?.caption
            ? ctx?.message?.reply_to_message?.caption
            : ctx?.message?.reply_to_message?.text;

        console.log(originalMessageText);
        
        if (originalMessageText?.includes('What do you want to create?')) {
            await ctx.reply(originalMessageText);
            await ctx.replyWithChatAction('typing');

            // Generate an image using OpenAI
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

## Explanation of the Code

1. **Importing Context**: We import Context from the grammY library to access the message context.
2. **Handling Text Messages**: We add a handler for text messages that will respond to messages not starting with a `/`.
3. **Showing "typing" Action**: Upon receiving a message, the bot shows that it is "typing" a response.
4. **Checking for Replies**: If the message is a reply to another message, we get the text of the original message.
5. **Image Generation**: If the text of the original message contains the phrase "What do you want to create?", the bot sends a request to OpenAI to generate an image using DALL-E 3. We pass the original text as the prompt.
6. **Sending the Image**: After receiving the URL of the generated image, the bot sends it to the user.

## Step 2: Importing Required Libraries

Don't forget to import the necessary libraries at the beginning of your `index.ts` file if you haven't done so already:

```typescript
import { Context } from "https://deno.land/x/grammy@v1.8.3/mod.ts";
import { openai } from "./path/to/openai/client.ts"; // Make sure the path to the OpenAI client is correct
```

## Conclusion

Now your Telegram bot is capable of generating images using DALL-E 3 based on users' text requests. This expands the bot's functionality and makes it more interactive and interesting for users. You can continue to improve it by adding new commands and features. Good luck with your development!

