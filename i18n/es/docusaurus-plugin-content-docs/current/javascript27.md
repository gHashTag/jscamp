---
id: javascript27
title: Fetch API
sidebar_label: Fetch API
---

import YouTube from 'react-youtube'

![@serverSerrverlesskiy](/img/javascript/headers/28.jpg)

La **Fetch API** permite que JavaScript se comunique con el servidor mediante solicitudes HTTP y es un mejor reemplazo para la clase `XMLHttpRequest`. Las solicitudes se realizan mediante el método `fetch()`, que devuelve  [Promise](https://jscamp.app/docs/javascript24).

![Exchange](https://media.giphy.com/media/OPQiZUC381IJ8Sh7UY/giphy.gif)

## Sintaxis

![Book](https://media.giphy.com/media/l0HlOBZcl7sbV6LnO/giphy.gif)

```jsx
fetch(url, { options })
```

- `url` - URL para enviar la solicitud;
- `options` - parámetros de solicitud.

Al especificar el método `fetch()` sin `options`, recibirá una solicitud GET que descarga los datos en la dirección `URL`.

## Video
<YouTube videoId="ZvUMvV_YZKg" />

## Parámetros de consulta

![Opción](https://media.giphy.com/media/AazZSBdhIdH9K/giphy.gif)

El segundo argumento `{options}` acepta opciones de consulta. Lista de parámetros:

1. `method` - método de solicitud (GET, POST, PUT, DELETE, HEAD);
2. `headers`: encabezados HTTP;
3. `body` - cuerpo de la solicitud (usado para el método: POST / PUT);
4. `cache`: modo de almacenamiento en caché (predeterminado, recargar, sin caché);
5. `mode` - modo de solicitud (cors, no-cors, mismo origen);
6. `redirect`: especifica cómo manejar los redireccionamientos (seguimiento, error, manual);
7. `referrer` - referencia de solicitud;
8. `signal` - AbortSignal, solicitud de cancelación;
9. `credentials` - envío de cookies junto con la solicitud - mit, mismo origen.

```jsx
fetch('https://jsonplaceholder.typicode.com/users', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  },
  mode: 'no-cors'
})
```

## Obtener una respuesta

![Baloncesto](https://media.giphy.com/media/l0MYwdebx8o0XI56E/giphy.gif)

El método `fetch()` devuelve [Promise](https://jscamp.app/docs/javascript24) un objeto de la clase `Response`, que tiene las siguientes propiedades:

1. `status` - código de respuesta;
2. `statusText` - mensaje de texto  correspondiente al código de respuesta;
3. `ok`: un valor booleano que indica el éxito del código de respuesta (verdadero: 200-299);
4. `headers`: un objeto con encabezados de respuesta, en el que la clave es el nombre del encabezado y el valor de la clave es el valor del encabezado correspondiente a la clave;
5. `url`: la URL a la que se envió la solicitud;
6. `body` - datos de respuesta en formato `ReadableStream`
7. `bodyUsed` es un valor booleano que indica que se están leyendo los datos.

```javascript
fetch('https://jsonplaceholder.typicode.com/users').then(response => console.log(response))
```

## Manejo de la respuesta

![Descargar](https://media.giphy.com/media/ECoFRCrMgVoQg/giphy.gif)

Los datos transferidos están en formato `ReadableStream`. Puede utilizar los siguientes métodos para cambiar el formato:

1. `text()` - convierte la respuesta en una cadena;
2. `json()` - convierte la respuesta en formato JSON;
3. `blob()`: convierte la respuesta en un objeto Blob;
4. `formData()` - convierte la respuesta en una instancia de FormData;
5. `arrayBuffer()`: convierte la respuesta en un objeto ArrayBuffer.

Un ejemplo de cómo convertir una respuesta al formato JSON.

```jsx
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => console.log(data))
```

## Procesamiento de errores

![Error](https://media.giphy.com/media/DHBGehJ3FSZEygszX3/giphy.gif)

Podemos averiguar si `fetch()` terminó con un error usando las propiedades: "status" y "ok".

```jsx
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => {
    if (!response.ok) {
      console.log('Algo salió mal... Estado:' + response.status)
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

## Solicitar ejemplos

![Math](https://media.giphy.com/media/xT1Ra5h24Eliux3UVq/giphy.gif)

```javascript
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => console.log(data[0].name + ' and ' + data[2].name))
  .catch(error => console.log(error))
```

Lo mismo, utilizando la sintaxis `async/await`, de la que aprenderemos más en el próximo artículo.

```javascript
let response = await fetch('https://jsonplaceholder.typicode.com/users')
let data = await response.json()
console.log(data[0].name + ' and ' + data[2].name)
```

## ¿Problemas?

![Problema](https://media.giphy.com/media/xTiTnGeUsWOEwsGoG4/giphy.gif)

Escribe en [Discord](https://discord.gg/6GDAfXn) o Telegram [chat](https://t.me/neuro_coder_group) y suscríbete a nuestras [noticias](https://t.me/javascriptapp)

![Campamento JavaScript](/img/bandlink.png)

## Preguntas

![Question](https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif)

¿Qué devuelve el método `fetch()`?

1. Función
2. Objeto
3. Promise

Dado solo un parámetro de URL para `fetch()`, ¿qué solicitud recibimos?

1. `POST`
2. `GET`
3. `PUT`

¿Qué parámetro especifica los encabezados HTTP?

1. `redirect`
2. `headers`
3. `credentials`

¿Qué método se debe usar para convertir la respuesta en una cadena?

1. `blob()`
2. `json()`
3. `text()`

Para comprender cuánto ha aprendido en esta lección, realice la prueba en [aplicación móvil](http://onelink.to/njhc95) en nuestra escuela sobre este tema.

![Campamento JS](/img/app.jpg)

## Enlaces

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

[![EnglishMoji!](/img/logo/NeuroCoder.png)](https://vk.com/neurocoder)
