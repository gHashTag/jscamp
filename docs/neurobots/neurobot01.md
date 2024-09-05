---
id: neurobot01
title: Chatbots
sidebar_label: Chatbots
---

import YouTube from 'react-youtube'

# Creating an AI Chatbot for VKontakte through Senler

![neurocoder](/img/neurobots/neuro1.png)

Creating a chatbot for your VKontakte community using the Senler service can be done in several steps. Below is a step-by-step guide to creating a bot that will interact with users in "clean" and "teacher" modes.

<YouTube videoId='xpEy-Llex5k' />

## Step 1: Creating the Chatbot

1. Log into your personal account on the Senler website and select your community.
2. Go to the "Chatbots" section and click the "New Bot" button.
3. Enter the bot's name and save it. The system will automatically generate a bot key.

## Step 2: Setting Up the First Block

1. Create the first block that will send a message to the user with the text: "Hello, choose a mode."
2. Add two buttons:
   - First button: name "clean", type: text.
   - Second button: name "teacher", type: text.
   - The button colors can be chosen arbitrarily.

## Step 3: Creating User Variables

1. Create two action blocks with a user variable mode.
2. For the first action, set the value to clean, and for the second — learn.

## Step 4: Group Conditions

1. Create a "Group Conditions" block with two conditions:
   - First condition: mode = clean.
   - Second condition: mode = learn.

## Step 5: Integration with ChatGPT

1. Create two integration blocks with ChatGPT, one for each mode.
2. Set up ChatGPT for the clean mode:
   - Insert the OpenAI API key.
   - Choose the chat type and model.
   - Set the instruction: "Reply to the user in their language."
   - Add a message to the user: "Write a question" and mark "Waiting for response."
3. Create a variable question to store the user's response.

## Step 6: Setting Up ChatGPT for the Learn Mode

1. Repeat the settings as for the clean mode, but change the instruction to: "Reply to the user in their language. You are well versed in JavaScript, TypeScript, React Native, and similar languages."

## Step 7: Completing the Setup

1. Add a message with the variable chat_gpt_answer ((%chat_gpt_answer%)).
2. Add a button with the name "Change mode" and mark "Waiting for response."
3. Connect all blocks to complete the interaction chain.

![neurocoder](/img/neurobots/image1.png)

## Testing the Bot

# Creating a Chatbot with ChatGPT for Telegram on the Make.com Platform

Creating a chatbot with ChatGPT integration for Telegram can be implemented using the automation platform Make.com (formerly Integromat). This allows you to quickly and easily set up the bot without the need to write code. Let's look at a step-by-step guide to creating such a bot.

## Step 1: Creating a New Bot in Telegram

1. In Telegram, find the bot @BotFather and start a conversation with it.
2. Send the command /newbot to create a new bot.
3. Follow the instructions from BotFather, enter the bot's name and a unique username.
4. Copy the API token provided by BotFather - it will be needed for bot setup.

## Step 2: Creating a Scenario in Make.com

1. Register on the Make.com platform and create a new scenario.
2. Select the Telegram Bot module and the action Watch for updates.
3. Insert your bot's HTTP API token in the Create a webhook field.

## Step 3: Integration with OpenAI

1. Create a new OpenAI module and select the action Create a completion.
2. Insert the OpenAI API key you received during registration.
3. Choose the ChatGPT model of your choice.
4. Add message 1 with the role of System and content "Reply to the user in their language."
5. Add message 2 with the role of User and content "1. Message: Text" (OpenAI).
6. Set the Max tokens value depending on the chosen model.

## Step 4: Sending a Response in Telegram

1. Create a new Telegram Bot module and select the action Send a Text Message or a Reply.
2. In the Chat ID field, insert "1. Message: Chat: ID" (Telegram Bot).
3. In the message text, insert "1: Message.Content" (OpenAI).
4. Choose the MarkDown mode in the Parse Mode field.

![neurocoder](/img/neurobots/image2.png)

## Step 5: Setting Up the Webhook

1. Copy the webhook URL from the Make.com scenario.
2. Bind the webhook to the bot using the template:
   https://api.telegram.org/bot"token"/setWebhook?url="makeurl"
   Replace "token" with your bot's API token and "makеurl" with the webhook URL from Make.com.
3. Paste the resulting link into your browser.

## Step 6: Testing the Bot

Now you can test your bot by sending it a message. The bot should respond using the capabilities of ChatGPT. Thus, using the Make.com platform, you can quickly create a Telegram chatbot with ChatGPT integration without the need to write code. This allows you to easily automate interactions with users and provide them with intelligent responses based on the capabilities of ChatGPT.

