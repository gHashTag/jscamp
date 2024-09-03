---
id: javascript27
title: Fetch API
sidebar_label: Fetch API
---

import YouTube from 'react-youtube'

![@serverSerrverlesskiy](/img/javascript/headers/28.jpg)

**Fetch API** позволяет JavaScript обмениваться данными с сервером с помощью HTTP-запросов и является более совершенной заменой классу `XMLHttpRequest`. Выполнение запросов осуществляется методом `fetch()`, который возвращает [Promise](https://jscamp.app/docs/javascript24).

![Exchange](https://media.giphy.com/media/OPQiZUC381IJ8Sh7UY/giphy.gif)

## Синтаксис

![Book](https://media.giphy.com/media/l0HlOBZcl7sbV6LnO/giphy.gif)

```jsx
fetch(url, { options })
```

- `url` - URL для отправки запроса;
- `options` - параметры запроса.

Задав метод `fetch()` без `options` вы получите GET-запрос, скачивающий данные по адресу `URL`.

## Видео

<YouTube videoId="ZvUMvV_YZKg" />

## Параметры запроса

![Option](https://media.giphy.com/media/AazZSBdhIdH9K/giphy.gif)

Вторым аргументом `{options}` принимаются параметры запроса. Список параметров:

1. `method` - метод запроса (GET, POST, PUT, DELETE, HEAD);
2. `headers` - HTTP-заголовки;
3. `body` - тело запроса (используется при method: POST / PUT);
4. `cache` - режим кэширования (default, reload, no-cache);
5. `mode` - режим запроса (cors, no-cors, same-origin);
6. `redirect` - указывает, как обрабатывать перенаправления(follow, error, manual);
7. `referrer` - реферер запроса;
8. `signal` - AbortSignal, прерывание запроса;
9. `credentials` - отправка cookies вместе с запросом - mit, same-origin.

```jsx
fetch('https://jsonplaceholder.typicode.com/users', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  },
  mode: 'no-cors'
})
```

## Получение ответа

![Bascketball](https://media.giphy.com/media/l0MYwdebx8o0XI56E/giphy.gif)

Метод `fetch()` возвращает [Promise](https://jscamp.app/docs/javascript24) объект класса `Response`, который имеет следующие свойства:

1. `status` - код ответа;
2. `statusText` - текстовое  сообщение, соответствующее коду ответа;
3. `ok` - логическое значение, указывающее на успешность кода ответа (true: 200-299);
4. `headers` - объект с заголовками ответа, в котором ключ - наименование заголовка, а значение ключа - значение соответствующего ключу заголовка;
5. `url` - URL, на который был отправлен запрос;
6. `body` - данные ответа в формате `ReadableStream`
7. `bodyUsed` - логическое значение, указывающее на чтение данных.

```javascript
fetch('https://jsonplaceholder.typicode.com/users').then(response => console.log(response))
```

## Обработка ответа

![Download](https://media.giphy.com/media/ECoFRCrMgVoQg/giphy.gif)

Переданные данные находятся в формате `ReadableStream`. Для изменения формата можно использовать следующие методы:

1. `text()` - преобразует ответ в строку;
2. `json()` - преобразует ответ в формате JSON;
3. `blob()` - преобразует ответ в объект Blob;
4. `formData()` - конвертируется ответ в экземпляр FormData;
5. `arrayBuffer()` - преобразует ответ в объект ArrayBuffer.

Пример преобразование ответа в формат JSON.

```jsx
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => console.log(data))
```

## Обработка ошибок

![Error](https://media.giphy.com/media/DHBGehJ3FSZEygszX3/giphy.gif)

Узнать завершился ли `fetch()` с ошибкой мы можем с помощью свойств: "status" и "ok".

```jsx
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => {
    if (!response.ok) {
      console.log('Что-то пошло не так... Статус: ' + response.status)
    } else {
      return response.json()
    }
  })
  .then(data => console.log(data))
```

При помощи `.catch()`

```jsx
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log(error))
```

## Примеры запросов

![Math](https://media.giphy.com/media/xT1Ra5h24Eliux3UVq/giphy.gif)

```javascript
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => console.log(data[0].name + ' and ' + data[2].name))
  .catch(error => console.log(error))
```

То же самое, при помощи синтаксиса `async/await` подробнее с которым мы познакомимся в следующей статье.

```javascript
let response = await fetch('https://jsonplaceholder.typicode.com/users')
let data = await response.json()
console.log(data[0].name + ' and ' + data[2].name)
```

[![EnglishMoji!](/img/logo/NeuroCoder.png)](https://vk.com/neurocoder)

## Проблемы?

![Problem](https://media.giphy.com/media/xTiTnGeUsWOEwsGoG4/giphy.gif)

Пишите в [Discord](https://discord.gg/6GDAfXn) или телеграмм [чат](https://t.me/jscampapp), а также подписывайтесь на наши [новости](https://t.me/javascriptapp)

<!-- ![JavaScript Camp](/img/bandlink.png) -->

## Вопросы

![Question](https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif)

Что возвращает метод `fetch()`?

1. Функцию
2. Объект
3. Промис

Задав в `fetch()` только параметр URL, какой запрос мы получим?

1. `POST`
2. `GET`
3. `PUT`

Каким параметром указываются HTTP-заголовки?

1. `redirect`
2. `headers`
3. `credentials`

Какой метод нужно использовать для преобразование ответа в строку?

1. `blob()`
2. `json()`
3. `text()`

Для того чтобы понять насколько вы усвоили этот урок пройдите тест в [мобильном приложении](http://onelink.to/njhc95) в нашей школы по этой теме.

[![EnglishMoji!](/img/logo/NeuroCoder.png)](https://vk.com/neurocoder)

## Ссылки

1. [Learn JavaScript](https://learn.javascript.ru/fetch)
2. [MDN Web Docs](https://developer.mozilla.org/ru/docs/Web/API/Fetch_API/Using_Fetch)
3. [JS Tutorial](https://www.javascripttutorial.net/javascript-fetch-api/)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<table>
  <tr> 
    <td align="center"><a href="https://github.com/IIo3iTiv"><img src="https://avatars1.githubusercontent.com/u/72025062?v=4?s=200" width="200px;" alt=""/><br /><sub><b>IIo3iTiv</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/commits?author=IIo3iTiv" title="Documentation">  </a></td>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /><a href="#financial-gHashTag" title="Financial">💵</a></td>
    <td align="center"><a href="https://github.com/Resoner2005"><img src="https://avatars1.githubusercontent.com/u/75675814?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Resoner2005</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/issues?q=author%3AResoner2005" title="Bug reports">🐛 🎨 🖋</a></td>
    <td align="center"><a href="https://github.com/Navernoss"><img src="https://avatars0.githubusercontent.com/u/75784137?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Navernoss</b></sub></a><br /><a href="#content-Navernoss" title="Content">🖋 🐛 🎨 </a></td>
  </tr>
  
</table>

