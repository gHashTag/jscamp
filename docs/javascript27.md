---
id: javascript27
title: Fetch API
sidebar_label: Fetch API
---

![@serverSerrverlesskiy](/img/javascript/headers/28.jpg)

The ** Fetch API ** allows JavaScript to communicate with the server using HTTP requests and is a better replacement for the XMLHttpRequest class. Queries are executed by the `fetch()` method, which returns🔄 [Promise](https://jscamp.app/docs/javascript24).

![Exchange](https://media.giphy.com/media/OPQiZUC381IJ8Sh7UY/giphy.gif)

## Syntax

![Book](https://media.giphy.com/media/l0HlOBZcl7sbV6LnO/giphy.gif)

```jsx
fetch(url, { options })
```

- `url` - URL for sending the request;
- `options` - request parameters.

By specifying the `fetch()` method without `options`, you will receive a GET request that fetch data from the `URL`.

## Parameters request

![Option](https://media.giphy.com/media/AazZSBdhIdH9K/giphy.gif)

The second argument to `{options}` accepts request parameters. Parameter list:

1. `method` - request method (GET, POST, PUT, DELETE, HEAD);
2. `headers` - HTTP headers;
3. `body` - request body (used for method: POST / PUT);
4. `cache` - caching mode (default, reload, no-cache);
5. `mode` - request mode (cors, no-cors, same-origin);
6. `redirect` - specifies how to handle redirects (follow, error, manual);
7. `referrer` - request referrer;
8. `signal` - AbortSignal, interrupt request;
9. `credentials` - sending cookies along with the request - mit, same-origin.

```jsx
fetch('https://jsonplaceholder.typicode.com/users', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  },
  mode: 'no-cors'
})
```

## Receiving a response

![Bascketball](https://media.giphy.com/media/l0MYwdebx8o0XI56E/giphy.gif)

The `fetch()` method returns🔄 [Promise](https://jscamp.app/docs/javascript24) an object of the `Response` class, which has the following properties:

1. `status` - response code;
2. `statusText` - text message 📜 corresponding to the response code;
3. `ok` - a boolean value indicating the success of the response code (true: 200-299);
4. `headers` - an object with response headers, in which the key is the name of the header, and the key value is the value of the header corresponding to the key;
5. `url` - the URL to which the request was sent;
6. `body` - response data in `ReadableStream` format
7. `bodyUsed` - Boolean value indicating data reading.

```javascript
fetch('https://jsonplaceholder.typicode.com/users').then(response => console.log(response))
```

## Response handling

![Download](https://media.giphy.com/media/ECoFRCrMgVoQg/giphy.gif)

The transmitted data is in the format `ReadableStream`. The following methods can be used to change the format:

1. `text()` - converts the answer to a string;
2. `json()` - converts the response in JSON format;
3. `blob()` - converts the response to a Blob object;
4. `formData()` - the response is converted into a FormData instance;
5. `arrayBuffer()` - converts the response to an ArrayBuffer object.

An example of converting a response to JSON format.

```jsx
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => console.log(data))
```

## Error processing

![Error](https://media.giphy.com/media/DHBGehJ3FSZEygszX3/giphy.gif)

We can find out whether `fetch()` has completed with an error🙅‍♂️ using the "status" and "ok" properties.

```jsx
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => {
    if (!response.ok) {
      console.log('Something went wrong ... Status:' + response.status)
    } else {
      return response.json()
    }
  })
  .then(data => console.log(data))
```

With help `.catch()`

```jsx
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log(error))
```

## Request examples

![Math](https://media.giphy.com/media/xT1Ra5h24Eliux3UVq/giphy.gif)

```javascript
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => console.log(data[0].name + ' and ' + data[2].name))
  .catch(error => console.log(error))
```

The same, using the `async / await` syntax, which we will get to know in more detail in the next article.

```javascript
let response = await fetch('https://jsonplaceholder.typicode.com/users')
let data = await response.json()
console.log(data[0].name + ' and ' + data[2].name)
```

 [![EnglishMoji!](/img/logo/englishmoji.png)](https://apps.apple.com/kz/app/englishmoji/id6450254885)

## Problems?

![Problem](https://media.giphy.com/media/xTiTnGeUsWOEwsGoG4/giphy.gif)

Write to [Discord](https://discord.gg/6GDAfXn) chat.

## Questions:

![Question](https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif)

What does the `fetch()` method return?

1. Function
2. Object
3. Promise

Given only the URL parameter in fetch (), what request do we get?

1. `POST`
2. `GET`
3. `PUT`

What parameter are HTTP headers specified?

1. `redirect`
2. `headers`
3. `credentials`

What method should you use to convert the response to a string?

1. `blob()`
2. `json()`
3. `text()`

What does the `ok` property mean for an object of class `Response`?

1. Response code
2. Success of the response code
3. Reading data from a request

In order to understand how much you learned this lesson, take the test in the [mobile application](http://onelink.to/njhc95) of our school on this topic or in our [telegram bot](https://t.me/javascriptcamp_bot).

[![EnglishMoji!](/img/logo/englishmoji.png)](https://apps.apple.com/kz/app/englishmoji/id6450254885)

## Links

1. [Learn JavaScript](https://learn.javascript.ru/fetch)
2. [MDN Web Docs](https://developer.mozilla.org/ru/docs/Web/API/Fetch_API/Using_Fetch)
3. [JS Tutorial](https://www.javascripttutorial.net/javascript-fetch-api/)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<table>
  <tr> 
    <td align="center"><a href="https://github.com/IIo3iTiv"><img src="https://avatars1.githubusercontent.com/u/72025062?v=4?s=200" width="200px;" alt=""/><br /><sub><b>IIo3iTiv</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/commits?author=IIo3iTiv" title="Documentation">📖</a></td>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /><a href="#financial-gHashTag" title="Financial">💵</a></td>
    <td align="center"><a href="https://github.com/Resoner2005"><img src="https://avatars1.githubusercontent.com/u/75675814?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Resoner2005</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/issues?q=author%3AResoner2005" title="Bug reports">🐛 🎨 🖋</a></td>
    <td align="center"><a href="https://github.com/Navernoss"><img src="https://avatars0.githubusercontent.com/u/75784137?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Navernoss</b></sub></a><br /><a href="#content-Navernoss" title="Content">🖋 🐛 🎨 </a></td>
  </tr>
  
</table>

