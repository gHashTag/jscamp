---
id: neurobot01
title: Чат-боты
sidebar_label: Чат-боты
---

import YouTube from 'react-youtube'

# Создание ВК чат-бота с ИИ через senler.

![neurocoder](/img/neurobots/neuro1.png)

Создание чат-бота для вашего сообщества ВКонтакте с использованием сервиса Senler может быть выполнено в несколько шагов. Ниже представлена пошаговая инструкция по созданию бота, который будет взаимодействовать с пользователями через режимы "чистый" и "учитель".

<YouTube videoId='xpEy-Llex5k' />

## Шаг 1: Создание чат-бота

1.	Зайдите в личный кабинет на сайте Senler и выберите ваше сообщество.
2.	Перейдите в раздел "Чат-боты" и нажмите на кнопку "Новый бот".
3.	Введите название бота и сохраните. Система автоматически сгенерирует ключ бота.
## Шаг 2: Настройка первого блока

1.	Создайте первый блок, который отправит сообщение пользователю с текстом: «Привет, выбери режим».
2.	Добавьте две кнопки:
-	Первая кнопка: название «чистый», тип: текст.
-	Вторая кнопка: название «учитель», тип: текст.
-	Цвет кнопок можно выбрать произвольно.

![neurocoder](/img/neurobots/image1.1.png)

## Шаг 3: Создание пользовательских переменных

#### 1.	Создайте два блока действий и добавьте пользовательскую переменную mode.
#### 2.	Для первого действия установите значение clean, для второго — learn.
![neurocoder](/img/neurobots/image1.21.png)
![neurocoder](/img/neurobots/image1.22.png)

#### 3.  Добавьте сообщение "напиши вопрос", и поставьте галочку на "Ожидание ответа"
#### 4.  Создайте Действие, в котором ответ на сообщение, сохраняется в пользовательской переменной question.
![neurocoder](/img/neurobots/image1.3.png)


## Шаг 4: Группа условий

1.	Создайте блок «Группа условий» с двумя условиями:
-	Первое условие: mode = clean.
-	Второе условие: mode = learn.

![neurocoder](/img/neurobots/image1.4.png)


## Шаг 5: Интеграция с ChatGPT

1.	Создайте два блока интеграции с ChatGPT, один для каждого режима.
2.	Настройте ChatGPT для режима clean:
-	Вставьте API ключ от OpenAI.
-	Выберите тип Chat и модель.
-	Установите инструкцию: "Reply to the user in their language".

![neurocoder](/img/neurobots/image1.5.png)


## Шаг 6: Настройка ChatGPT для режима learn

1.	Повторите настройки, как для режима clean, но измените инструкцию на: "Reply to the user in their language. You are well versed in JavaScript, TypeScript, React Native and similar languages".

## Шаг 7: Завершение настройки

#### 1.	Добавьте сообщение с переменной chat_gpt_answer ((%chat_gpt_answer%)).
#### 2.	Добавьте кнопку с названием «Поменять режим» и отметьте «Ожидание ответа».
![neurocoder](/img/neurobots/image1.6.png)
#### 3.	Соедините все блоки, чтобы завершить цепочку взаимодействия.
![neurocoder](/img/neurobots/image1.7.png)


## Тестирование бота

## Создание чат-бота с ChatGPT для Telegram на платформе Make.com

Создание чат-бота с интеграцией ChatGPT для Telegram можно реализовать с помощью платформы автоматизации Make.com (ранее Integromat). Это позволит быстро и легко настроить бота без необходимости писать код. Рассмотрим пошаговую инструкцию по созданию такого бота.

## Шаг 1. Создание нового бота в Telegram

1.	В Telegram найдите бота @BotFather и начните с ним диалог.
2.	Отправьте команду /newbot, чтобы создать нового бота.
3.	Следуйте инструкциям BotFather, введите имя бота и уникальный username.
4.	Скопируйте API-токен, который предоставит BotFather - он понадобится для настройки бота.

## Шаг 2. Создание сценария в Make.com

1.	Зарегистрируйтесь на платформе Make.com и создайте новый сценарий.
2.	Выберите модуль Telegram Bot и действие Watch for updates.
3.	Вставьте HTTP API-токен вашего бота в поле Create a webhook. 

## Шаг 3. Интеграция с OpenAI

#### 1.	Создайте новый модуль OpenAI и выберите действие Create a completion.
#### 2.	Вставьте API-ключ OpenAI, который вы получили при регистрации.
#### 3.	Выберите модель ChatGPT по своему усмотрению.
#### 4.	Добавьте сообщение 1 с ролью System и содержимым "Reply to the user in their language".
#### 5.	Добавьте сообщение 2 с ролью User и содержимым "1. Message: Text"(OpenAi).
#### 6.	Установите значение Max tokens в зависимости от выбранной модели.
![neurocoder](/img/neurobots/image1.8.png)
![neurocoder](/img/neurobots/image1.9.png)

## Шаг 4. Отправка ответа в Telegram

1.	Создайте новый модуль Telegram Bot и выберите действие Send a Text Message or a Reply.
2.	В поле Chat ID вставьте "1. Message: Chat: ID"(Telegram Bot).
3.	В текст сообщения вставьте "1: Message.Content"(OpenAI).
4.	Выберите режим MarkDown в поле Parse Mode.

![neurocoder](/img/neurobots/image1.10.png)
![neurocoder](/img/neurobots/image1.11.png)


## Шаг 5. Настройка webhook

1.	Скопируйте URL-адрес вебхука из сценария Make.com.
2.	Привяжите вебхук к боту по шаблону:
https://api.telegram.org/bot<ТОКЕН>/setWebhook?url=<ССЫЛКАНАМЕЙК>
Замените <ТОКЕН> на API-токен вашего бота, а <ССЫЛКАНАМЕЙК> на URL-адрес вебхука из Make.com.
3.	Вставьте полученную ссылку в браузере.

## Шаг 6. Тестирование бота

Теперь вы можете протестировать своего бота, отправив ему сообщение. Бот должен ответить, используя возможности ChatGPT.Таким образом, используя платформу Make.com, вы можете быстро создать чат-бота для Telegram с интеграцией ChatGPT без необходимости писать код. Это позволяет легко автоматизировать взаимодействие с пользователями и предоставлять им интеллектуальные ответы, основанные на возможностях ChatGPT.
