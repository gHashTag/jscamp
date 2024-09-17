---
id: neurobot01
title: Chatbots
sidebar_label: Chatbots
---

import YouTube from 'react-youtube'

# Creating a VK Chatbot with AI via Senler

![neurocoder](/img/neurobots/neuro1.png)

Creating a chatbot for your VKontakte community using the Senler service can be done in several steps. Below is a step-by-step guide to creating a bot that will interact with users through "clean" and "teacher" modes.

<YouTube videoId='xpEy-Llex5k' />

## Step 1: Creating a Chatbot

1. Log in to your personal account on the Senler website and select your community.
2. Go to the "Chatbots" section and click the "New Bot" button.
3. Enter the bot's name and save it. The system will automatically generate a bot key.

## Step 2: Setting Up the First Block

1. Create the first block that will send a message to the user with the text: "Hello, choose a mode".
2. Add two buttons:
- First button: name "clean", type: text.
- Second button: name "teacher", type: text.
- The color of the buttons can be chosen arbitrarily.

![neurocoder](/img/neurobots/image1.1.png)

## Step 3: Creating User Variables

#### 1. Create two action blocks and add the user variable mode.
#### 2. For the first action, set the value to clean, for the second — learn.
![neurocoder](/img/neurobots/image1.21.png)
![neurocoder](/img/neurobots/image1.22.png)

#### 3. Add the message "write a question", and check the "Wait for response" box.
#### 4. Create an Action where the response to the message is saved in the user variable question.
![neurocoder](/img/neurobots/image1.3.png)

## Step 4: Condition Group

1. Create a "Condition Group" block with two conditions:
- First condition: mode = clean.
- Second condition: mode = learn.

![neurocoder](/img/neurobots/image1.4.png)

## Step 5: Integration with ChatGPT

1. Create two ChatGPT integration blocks, one for each mode.
2. Set up ChatGPT for clean mode:
- Insert the OpenAI API key.
- Select the Chat type and model.
- Set the instruction: "Reply to the user in their language".

![neurocoder](/img/neurobots/image1.5.png)

## Step 6: Setting Up ChatGPT for Learn Mode

1. Repeat the settings as for clean mode, but change the instruction to: "Reply to the user in their language. You are well versed in JavaScript, TypeScript, React Native and similar languages".

## Step 7: Completing the Setup

#### 1. Add a message with the variable chat_gpt_answer ((%chat_gpt_answer%)).
#### 2. Add a button named "Change mode" and check the "Wait for response" box.
![neurocoder](/img/neurobots/image1.6.png)
#### 3. Connect all the blocks to complete the interaction chain.
![neurocoder](/img/neurobots/image1.7.png)

## Testing the Bot

## Creating a Chatbot with ChatGPT for Telegram on the Make.com Platform

Creating a chatbot with ChatGPT integration for Telegram can be implemented using the Make.com automation platform (formerly Integromat). This allows you to quickly and easily set up a bot without writing code. Let's look at a step-by-step guide to creating such a bot.

## Step 1. Creating a New Bot in Telegram

1. In Telegram, find the @BotFather bot and start a conversation with it.
2. Send the command /newbot to create a new bot.
3. Follow BotFather's instructions, enter the bot's name and unique username.
4. Copy the API token provided by BotFather - it will be needed to set up the bot.

## Step 2. Creating a Scenario in Make.com

1. Register on the Make.com platform and create a new scenario.
2. Select the Telegram Bot module and the Watch for updates action.
3. Insert your bot's HTTP API token in the Create a webhook field.

## Step 3. Integration with OpenAI

#### 1. Create a new OpenAI module and select the Create a completion action.
#### 2. Insert the OpenAI API key you received upon registration.
#### 3. Select the ChatGPT model of your choice.
#### 4. Add message 1 with the role System and content "Reply to the user in their language".
#### 5. Add message 2 with the role User and content "1. Message: Text"(OpenAi).
#### 6. Set the Max tokens value depending on the selected model.
![neurocoder](/img/neurobots/image1.8.png)
![neurocoder](/img/neurobots/image1.9.png)

## Step 4. Sending a Response to Telegram

1. Create a new Telegram Bot module and select the Send a Text Message or a Reply action.
2. In the Chat ID field, insert "1. Message: Chat: ID"(Telegram Bot).
3. In the message text, insert "1: Message.Content"(OpenAI).
4. Select the MarkDown mode in the Parse Mode field.

![neurocoder](/img/neurobots/image1.10.png)
![neurocoder](/img/neurobots/image1.11.png)

## Step 5. Setting Up the Webhook

1. Copy the webhook URL from the Make.com scenario.
2. Bind the webhook to the bot using the template:
https://api.telegram.org/bot'TOKEN'/setWebhook?url='MAKEURL'
Replace 'TOKEN' with your bot's API token, and 'MAKEURL' with the webhook URL from Make.com.
3. Paste the resulting link into the browser.

## Step 6. Testing the Bot

Now you can test your bot by sending it a message. The bot should respond using ChatGPT capabilities. Thus, using the Make.com platform, you can quickly create a chatbot for Telegram with ChatGPT integration without writing code. This allows you to easily automate user interactions and provide them with intelligent responses based on ChatGPT capabilities.