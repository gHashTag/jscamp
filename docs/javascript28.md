---
id: javascript28
title: Fetch API
sidebar_label: Fetch API
---

**Fetch API** позволяет JavaScript обмениваться данными с сервером с помощью HTTP-запросов и является более совершенной заменой классу `XMLHttpRequest`. Выполнение запросов осуществляется методом `fetch()`, который возвращает [Promise](https://react-native-village.github.io/docs/javascript24).

## Синтаксис

```jsx
let promise = fetch(url, {options})
```
* `url` - URL для отправки запроса;
* `options` - параметры запроса.

Задав метод `fetch()` без `options` вы получите GET-запрос, скачивающий данные по адресу `URL`.

## Получение ответа

Метод `fetch()` возвращает [Promise](https://react-native-village.github.io/docs/javascript24) объект класса `Response`, который имеет следующие свойства:
1. `status` - код ответа;
2. `statusText` - текстовое сообщение, соответствующее коду ответа;
3. `ok` - логическое значение, указывающее на успешность кода ответа (true: 200-299);
4. `headers` - объект с заголовками ответа, в котором ключ - наименование заголовка, а значение ключа - значение соответствующего ключу заголовка;
5. `url` - URL, на который был отправлен запрос;
6. `body` - данные ответа в формате `ReadableStream`
7. `bodyUsed` - логическое значение, указывающие на чтение данных.

```jsx live
function learnJavaScript() {
  return 'ok'
}
```

## Параметры запроса

1. `method` - метод запроса (GET, POST, PUT, DELETE, HEAD);
2. `headers` - HTTP-заголовки;
3. `body` - тело запроса (используется при method: POST / PUT);
4. `cache` - режим кэширования (default, reload, no-cache);
5. `mode` - режим запроса (cors, no-cors, same-origin);
6. `redirect` - указывает, как обрабатывать перенаправления(follow, error, manual);
7. `referrer` - реферер запроса;
8. `signal` - AbortSignal, прерывание запроса;
9. `credentials` - отправка cookies вместе с запросом - mit, same-origin.

## Обработка ответа

Переданные данные находятся в формате `ReadableStream`. Для изменения формата можно использовать следующие методы:
1. `text()` - преобразует ответ в строку;
2. `json()` - преобразует ответ в формате JSON;
3. `blob()` - преобразует ответ в объект Blob;
4. `formData()` - конвертируется ответ в экземпляр FormData;
5. `arrayBuffer()` - преобразует ответ в объект ArrayBuffer.

Пример преобразование ответа в формат JSON.
```jsx
let res = await fetch('https://example.com/') // Выполняем запрос
let com = await res.json(); // Преобразовываем ответ
```

## Обработка ошибок

Узнать завершился ли `fetch()` с ошибкой мы можем с помощью свойств: "status" и "ok". Пример:
```jsx
let res = await fetch('https://example.com/') // Выполняем запрос

if (res.ok) { // Если HTTP-статус находится диапазоне 200-299
    let answer = await res.text() // Получаем ответ
} else {
    alert('Ошибка: ' + res.status) // Иначе выводим код ответа
}
```

## Примеры запросов

```jsx
fetch('https://example.com/api/data', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => {
      console.log(response.bodyUsed); // false
      let result = await response.json();
      console.log(response.bodyUsed); // true
      return result;
    });
```

Использование метода POST 
```jsx
let response = await fetch('/article/fetch/post/user', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  },
  body: JSON.stringify(user)
});

let result = await response.json();
alert(result.message);
```

Без `await`
```jsx
fetch('https://api.github.com/users/KrunalLathiya')
.then(res => res.json())
.then(json => console.log(json));
```

## Вопросы

1. Что возвращает метод `fetch()`?
- Функцию;
- Объект;
- Промисы.

2. Задав в `fetch()` только параметр URL, какой запрос мы получим?
- POST;
- GET;
- PUT.

3. Каким параметром указываются HTTP-заголовки?
- redirect;
- headers;
- credentials.

4. Какой метод нужно использовать для преобразование ответа в строку?
- blob();
- json();
- text().

5. Что означает свойство `ok` у объекта класса `Response`?
- Код ответа;
- Успешность кода ответа;
- Чтение данных из запроса;

## Ссылки
1. [Learn JavaScript](https://learn.javascript.ru/fetch)
2. [MDN Web Docs](https://developer.mozilla.org/ru/docs/Web/API/Fetch_API/Using_Fetch)
3. [JS Tutorial](https://www.javascripttutorial.net/javascript-fetch-api/)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<table>
  <tr> 
    <td align="center"><a href="https://github.com/IIo3iTiv"><img src="https://avatars1.githubusercontent.com/u/72025062?v=4?s=200" width="200px;" alt=""/><br /><sub><b>IIo3iTiv</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/commits?author=IIo3iTiv" title="Documentation">📖</a></td>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /><a href="#financial-gHashTag" title="Financial">💵</a></td>
  </tr>
</table>

[![Become a Patron!](/img/logo/patreon.png)](https://www.patreon.com/bePatron?u=31769291)
