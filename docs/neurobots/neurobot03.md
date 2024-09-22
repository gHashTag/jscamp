---
id: neurobot03
title: VK Mini-App
sidebar_label: VK Mini-App
---

import YouTube from 'react-youtube'

# Creating a VK Mini-App Using Node.js: Englishmoji Mini App

![neurocoder](/img/neurobots/neuro3.png)

In this article, we will explore the process of creating a mini-app for VKontakte using Node.js. We will use the Englishmoji Mini App project, which is available on GitHub. By following the steps provided, you will be able to quickly deploy your application and test it.

<YouTube videoId='P033rWHG1y8' />

## Step 1: Installing Node.js

First, you need to install Node.js on your computer. You can do this by downloading the installer from the official Node.js website and following the installation instructions.

## Step 2: Cloning the Repository

After installing Node.js, open the terminal and run the following command to clone the project repository:

```bash
git clone https://github.com/katsuhira02/englishmoji-mini-app
```
This command will create a local copy of the project on your computer.

## Step 3: Installing Dependencies

Navigate to the project directory and install all necessary dependencies by running the command:

```bash
npm install
```

This command will download all libraries and modules specified in the package.json file.

## Step 4: Running the Application

Now you are ready to run the application. To do this, execute the command:

```bash
npm run start
```

This will start the server for your mini-app.

## Step 5: Setting Up the Tunnel

Open a second terminal and run the command:

```bash
npm run tunnel
```

This command will create a tunnel that allows your application to be accessible via HTTPS. In the terminal, you will receive an HTTPS link that you need to save for future use.

## Step 6: Creating a Mini-App on dev.vk.com

1. Go to the dev.vk.com website and log into your account.
2. Create a new mini-app by selecting the appropriate option in the menu.
3. Go to the "Hosting" section and paste the HTTPS link obtained in the terminal into the field for the desktop version development mode.
4. Save the changes.

## Step 7: Testing the Application

Now click on the name of your application located on the right side of the page. If you have done everything correctly, you will be redirected to your created application and can test its functionality.

## Conclusion

Creating a mini-app for VKontakte using Node.js is a simple and engaging process. By following the steps provided, you will be able to quickly deploy your application and start using it. The Englishmoji Mini App is a great example to get started with VKontakte mini-apps. Good luck with your development!

# Creating a Mini-App in Telegram Using ngrok and Vite

In this article, we will discuss how to create a mini-app for Telegram using ngrok for tunneling and Vite for development. By following simple steps, you will be able to deploy your application and test it in Telegram.

## Step 1: Installing ngrok

First, you need to install ngrok, which will allow you to create a secure tunnel to your local server. If you have Chocolatey installed, you can install ngrok using the following command:

```bash
choco install ngrok
```

If you do not have Chocolatey, download ngrok from the official website and follow the installation instructions.

## Step 2: Setting Up the Vite Project

After installing ngrok, create a new project using Vite or open an existing one. In the package.json file, you need to add scripts to run the application. Open package.json and add the following lines to the scripts section:

```jsx
"scripts": {
  "start": "vite",
  "start80": "vite --port 80"
}
```

These commands will allow you to run the application on port 80.

## Шаг 3: Установка gsudo

gsudo — это утилита, которая позволяет запускать команды с повышенными правами в Windows. Установите gsudo, если он у вас еще не установлен. Вы можете установить его с помощью Chocolatey:

```bash
choco install gsudo
```

## Step 4: Running the Application

Now you are ready to run the application. To do this, execute the following command in the terminal:

```bash
gsudo npm run start80
```

This command will start your application on port 80 with elevated privileges.

## Step 5: Starting ngrok

Now open a new terminal and navigate to the root folder of your project. Start ngrok by executing the following command:

```bash
ngrok http 80
```

ngrok will create a secure tunnel to your local server and provide you with a public URL that you can use to access your application from Telegram.

## Step 6: Setting Up Telegram

1. Go to Telegram and create a new bot using @BotFather.
2. Get your bot token and save it.
3. Set up a webhook for your bot using the URL provided by ngrok. Enter the following command in the terminal:

```bash
curl -X POST https://api.telegram.org/bot<YOUR_BOT_TOKEN>/setWebhook?url=<NGROK_URL>
```

Replace <YOUR_BOT_TOKEN> with your bot token and <NGROK_URL> with the URL obtained from ngrok.

## Conclusion

Creating a mini-app in Telegram using ngrok and Vite is a simple and effective way to quickly deploy and test your application. By following the steps provided, you will be able to set up the environment and run your bot in just a few minutes. Good luck with your development!
