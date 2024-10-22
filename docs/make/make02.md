---
id: make02
title: Скрипт вирусных роликов со скрапингом в Instagram
sidebar_label: Viral Reels
---

![Viral Reels](/img/make/make01.png)

## Преобразование видео Reels в аудио и текст для генерации аналогичного видео с использованием Make.com

В этом руководстве мы рассмотрим, как автоматизировать процесс преобразования видео Reels в аудио и текст, а затем использовать эти данные для создания аналогичного видео. Мы будем использовать Make.com для автоматизации и Google Sheets для хранения данных.

### Шаг 1: Настройка Google Sheets

1. Создайте новый лист в Google Sheets с названием "You Generated Content".
2. Добавьте следующие столбцы:
   - Source ID
   - Source Post
   - Source Image
   - Source Video
   - Ready? (Type GO to Generate)
   - Generated Post
   - Generated Hashtags
   - Generated Video Script
   - Generated Image

3. Добавьте следующие формулы для автоматического заполнения данных:

- **Source Post**
  ```excel
  =ВПР(A2,Posts!A:K,2, ЛОЖЬ)
  ```
- **Source Image**
  ```excel
  =ВПР(A2,Posts!A:K,10, ЛОЖЬ)
  ```
- **Source Video**
  ```excel
  =ВПР(A2,Posts!A:K,11, ЛОЖЬ)
  ```

### Шаг 2: Настройка Make.com

1. В Make.com выберите приложение Google Sheets и настройте триггер "Watch Changes".
2. Добавьте связь с вашей таблицей "You Generated Content".
3. В Google Sheets установите расширение Make for Google Sheets. Для этого выберите Add-Ons и найдите Make в поиске.
4. В настройках расширения Make for Google Sheets скопируйте адрес вебхука и вставьте его в поле Webhook.
5. В поле Sheet вставьте "You Generated Content".
6. В поле Range укажите "E2:E100".
7. Сохраните настройки.

### Шаг 3: Получение данных из Google Sheets

1. В Make.com выберите приложение Google Sheets и настройте действие "Get Range value".
2. Укажите:
   - Sheet name: "Prompts"
   - Range: "A2:F2"
   - Table contains headers: "yes"
   - A1:F1


![Get Range Value](/img/make/make02.png)

### Шаг 4: Настройка CloudConvert

1. Подключите приложение CloudConvert.
2. Получите ключи доступа по адресу [CloudConvert API Keys](https://cloudconvert.com/dashboard/api/v2/keys).
3. Нажмите "Create New API Key".
4. Выберите действие "Import file from URL".
5. В поле URL вставьте `{{1.rowValues[].`3`}}`.
6. В поле ConvertOptions укажите:
   - Format: "i don't know the input format"
   - Output format: "mp3"
   - Download file: "yes"

![CloudConvert](/img/make/make03.png)

### Шаг 5: Преобразование аудио в текст с помощью OpenAI Whisper

1. В Make.com выберите приложение OpenAI Whisper и настройте действие "Create transcription".
2. В поле File укажите файл из CloudConvert.
3. Укажите формат ответа: "json".

![OpenAI Whisper](/img/make/make04.png)

### Шаг 6: Создание нового видео с помощью OpenAI Whisper

1. В Make.com выберите приложение OpenAI Whisper и настройте действие "Create competition".
2. Добавьте SYSTEM промпт:

```markdown
You are a social media expert. You've come across a successful Instagram reel by a competitor. 

I want you to analyze this reel to understand what makes it successful and then draft a new reel for our own Instagram page. 

Post content: {{1.rowValues[].`1`}}

The new reel should be different from the competitor. You can take inspiration from the competitor's post but be original and create a unique angle.
The new reel should be different from the competitor. You can take inspiration fr om the competitor's post but be original and create a unique angle. Here are some details of our own Instagram page
###
{{2.`0`}}
###

Also, don't start with a welcome - jump straight into the topic.

An image prompt will be sent to an image generator to create an image to reflect the reel.

The output should be in the following JSON format.

{
"postContent": "'',
"hashtagsList": "",
"videoReelScript: "",
"imagePrompt":""
}
```
3. Добавьте пользовательский USER промпт:

```markdown
######
POST
######
{{1.rowValues[].`1`}}

######
VIDEO TRANSCRIPT
######
{{7.text}}
```

![OpenAI Whisper](/img/make/make05.png)

4. Укажите формат ответа: "json".

### Шаг 7: Обработка JSON ответа

1. В Make.com выберите приложение "Parse JSON" и добавьте `{{8.result}}`.

![Parse JSON](/img/make/make06.png)

### Шаг 8: Обновление строки в Google Sheets

1. В Make.com выберите приложение Google Sheets и настройте действие "Update row".
2. Укажите:
   - Row number: `{{1.range.rowStart}}`
   - Table contains headers: "yes"
   - Values:
     - Generated Post (F): `{{9.postContent}}`
     - Generated Hashtags (G): `{{9.hashtagsList}}`
     - Generated Video Script (H): `{{9.videoReelScript}}`
     - Generated Image (I): `{{9.imagePrompt}}`

![Update Row](/img/make/make07.png)

![Update Row](/img/make/make08.png)

Теперь у вас есть автоматизированный процесс для преобразования видео Reels в аудио и текст, а также для создания аналогичных видео на основе полученных данных.






[![EnglishMoji!](/img/logo/NeuroCoder.png)](https://vk.com/neurocoder)

## Проблемы?

![Problem](https://media.giphy.com/media/xTiTnGeUsWOEwsGoG4/giphy.gif)

Пишите в [Telegram](https://t.me/neuro_coder_group) или [ВКонтакте](https://vk.com/neurocoder), а также подписывайтесь на наши [новости](https://t.me/neuro_coder_ai)

<!-- ![JavaScript Camp](/img/bandlink.png) -->
