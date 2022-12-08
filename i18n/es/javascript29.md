---
id: javascript29
title: Import Export
sidebar_label: Import Export
---

import YouTube from 'react-youtube'

![@serverSerrverlesskiy](/img/javascript/headers/31.jpg)

Para hacer que objetos, funciones, clases o variables 🔔 estén disponibles para el mundo exterior, simplemente expórtelos y luego impórtelos, cuando sea necesario, a otros archivos de proyecto.

## Video

<YouTube videoId="eObrJvg0Y5s" />

## «Hello, World!» на Node.js

`Node.js®` es un entorno de JavaScript basado en el motor [Chrome V8](https://v8.dev).

Comencemos con `Node.js` simplemente escribiendo node en la consola:

```javascript
$ node
>
```

Si no lo tiene, [descárguelo](https://nodejs.org) e instálelo en su computadora.

![Node](https://media.giphy.com/media/kdFc8fubgS31b8DsVu/giphy.gif)

Ahora intentemos imprimir algo:

```javascript
$ node
> console.log('hello from Node.js')
// Después de presionar Enter, obtendrá lo siguiente:
hello from Node.js
undefined
```

![Export](https://media.giphy.com/media/3ohzAiaRIBBrge2jQc/giphy.gif)

Siéntase libre de experimentar con `Node.js` usando esta interfaz: es común probar pequeños fragmentos de código aquí si no es práctico ponerlos todos en un archivo.

¡Es hora de crear nuestra aplicación Hello Node.js!

Comencemos por crear el archivo `index.js`. Con el siguiente comando creamos la carpeta `myProject` y entramos en ella.

```bash
mkdir myProject && cd myProject
```

Ahora creamos el propio archivo `index.js`

```bash
touch index.js
```

Abra su editor de código o descárguelo e instálelo. Recomendamos [VS Code](https://code.visualstudio.com).

Abra el editor de código y agregue la carpeta del proyecto que creamos.

![nuevo proyecto](/img/javascript/18.jpg)

Ahora abra el menú lateral haciendo clic en este icono.

![nuevo proyecto](/img/javascript/19.jpg)

Copie el siguiente fragmento de código en él:

```javascript
// index.js
console.log('hello from Node.js')
```

Para ejecutar este archivo, debe abrir su terminal nuevamente y cambiar al directorio donde se encuentra `index.js`.

En `VS Code` esto se puede hacer haciendo clic en estos iconos.

![nuevo proyecto](/img/javascript/20.jpg)

Y selecciona la pestaña `TERMINAL`

![nuevo proyecto](/img/javascript/21.jpg)

Una vez que haya navegado con éxito a la ubicación deseada, ejecute el archivo con el comando

```javascript
node index.js
```

Verá que este comando producirá el mismo resultado que antes, enviando la cadena directamente a la terminal.

![new prroject](/img/javascript/22.jpg)

## Modularidad de la aplicación

![Exportar](https://media.giphy.com/media/3o7btSt2Et1GgIaDAY/source.gif)

¡Es hora de pasar al siguiente nivel! Vamos a crear algo más complejo dividiendo nuestro código fuente en varios archivos JavaScript en aras de la legibilidad y el mantenimiento.

### Estructura del proyecto

Cree la siguiente estructura de directorios (con archivos vacíos), pero no cree `package.json' todavía, lo generaremos automáticamente en el siguiente paso:

```javascript
├── app
|   ├── calc.js
|   └── index.js
├── index.js
└── package.json
```

Para crear un nuevo archivo o carpeta en `VS Code`, haga clic en el icono correspondiente como se muestra en la imagen.

![archivo nuevo](/img/javascript/23.jpg)

### package.json

Cada proyecto `Node.js` comienza con la creación de un archivo `package.json`. Puede considerarlo como una representación JSON de la aplicación y sus dependencias. Contiene el nombre de su aplicación, el autor (usted) y todas las dependencias necesarias para ejecutar la aplicación. Este es el mapa de tu proyecto.

Puede generar interactivamente un archivo `package.json` con el comando

![npm](https://media.giphy.com/media/gHnBLyeYE6hboT3t3o/giphy.gif)

```bash
npm init
```

en la terminal Después de ejecutar el comando, se le pedirá que ingrese cierta información, como el nombre de su aplicación, la versión, la descripción, etc. No se preocupe, simplemente presione 'Enter' hasta que obtenga el JSON generado y la pregunta `¿está bien?`. Presione `Enter` una última vez y listo: su `package.json` se ha generado automáticamente y se ha colocado en la carpeta de su aplicación. Si abre este archivo en su IDE, se verá muy similar al fragmento de código a continuación.

```json
// package.json
{
  "name": "myproject",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}
```

Es una buena práctica agregar un script de inicio a su paquete `package.json`. Así que agregue esta línea al objeto `scripts`:

```json
"scripts": {
  "start": "node index.js", // esta línea
  "test": "echo \"Error: no test specified\" && exit 1"
}
```

Una vez que haya hecho eso, puede iniciar la aplicación con el comando `npm start`.

## Importar

Ahora regresemos al primer archivo que creó llamado `index.js`. Se recomienda mantener este archivo muy compacto: solo incluye la aplicación en sí (el archivo `index.js` del subdirectorio `/app` creado anteriormente). Copie el siguiente código en su archivo `index.js` y guárdelo:

```javascript
// index.js
require('./app/index')
```

o abreviatura para todos los archivos `index.js`

```javascript
// index.js
require('./app')
```

Si no se especifica un archivo específico, el intérprete de código busca el archivo `index.js` y lo ingresa. Así, incluimos nuestro primer archivo en el proyecto.

![Exportar](https://media.giphy.com/media/W6Lidy1RgOl3kYdARr/giphy.gif)

## Exportar

Ahora es el momento de comenzar a construir la aplicación real. Abra el archivo `index.js` de la carpeta `/app` para crear un ejemplo muy simple: agregar una matriz de números. En este caso, el archivo `index.js` contendrá solo los números que queremos agregar, y la lógica que requiere cálculos debe colocarse en un módulo separado en el archivo `calc.js`.
Pegue este código en el archivo `index.js` en el directorio `/app`.

```javascript
// app/index.js
const calc = require('./calc')
const numbersToAdd = [3, 4, 10, 2]
const result = calc.sum(numbersToAdd)

console.log(`The result is: ${result}`)
```

Ahora pegue la lógica comercial real en el archivo `calc.js` que se puede encontrar en la misma carpeta.

```javascript
// app/calc.js
const sum = arr => {
  return arr.reduce((a, b) => a + b, 0)
}

module.exports.sum = sum // export
```

En este archivo, creamos la función `sum` y la exportamos, la hicimos disponible en otros archivos de proyecto.

Para verificar si hizo todo bien, guarde estos archivos, abra una terminal y escriba `npm start` o `node index.js`. Si todo se hizo correctamente, obtendrá la respuesta: `19.` Si algo salió mal, revise cuidadosamente el registro en la consola y encuentre el problema basado en él.

![new file](/img/javascript/24.jpg)

## Total

Así que completamos el curso preparatorio sobre JavaScript antes del curso [desarrollo móvil](https://jscamp.app/docs/start000).

## ¿Problemas?

![Problema](https://media.giphy.com/media/xTiTnGeUsWOEwsGoG4/giphy.gif)

Escribe en [Discord](https://discord.gg/6GDAfXn) o Telegram [chat](https://t.me/jscampapp) y suscríbete a nuestras [noticias](https://t.me/javascriptapp)

![Campamento JavaScript](/img/bandlink.png)

## Preguntas:

![Pregunta](https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif)

Para hacer que los objetos, funciones, clases o variables 🔔 estén disponibles para el mundo exterior, debe:

1. Exportarlos y luego importarlos
2. Importarlos y luego exportarlos

`Node.js®` es:

1. Lenguaje de programación
2. Entorno de JavaScript basado en el motor Chrome V8
3. Navegador

`package.json` es:

1. Entorno de JavaScript basado en el motor Chrome V8
2. Representación JSON de la aplicación y sus dependencias
3. Lenguaje de programación JSON

Para comprender cuánto ha aprendido en esta lección, realice la prueba en [aplicación móvil](http://onelink.to/njhc95) en nuestra escuela sobre este tema.

![JS Camp](/img/app.jpg)

<!-- Экспортировать желаемые элементы одним оператором в конце модуля можно командой:

1. export { myNumbers, myLogger, Alligator }
2. export const myNumbers = [1, 2, 3, 4]
3. import myLogger as Logger from 'app.js'

Импорт всех экспортированных участников производится командой:

1. import \* as Utils from 'app.js'
2. import { myLogger, Alligator } from 'app.js'
3. import myLogger as Logger from 'app.js'

Для указания конкретных функций экспорта используется:

1. export { hello1, hello2 }
2. import { hello1, hello2 } from './say'
3. const hello = require('./say')

Команда `import myDefault, {foo, bar} from '/modules/my-module.js'` выполняет:

1. именованный импорт конкретных значений
2. экспорта по умолчанию (дефолтный экспорт) из модуля
3. импортирует все значения -->

## Enlaces:

1. [Documento web de MDN. Artículo "Módulos en ECMAScript 6: el futuro es ahora"](https://frontender.info/es6-modules/)
2. [Artículo "Módulos ES6 y cómo usar la importación y exportación en JavaScript"](https://www.digitalocean.com/community/tutorials/js-modules-es6)
3. [Artículo "requerir frente a importación/exportación de ES6"](https://coderoad.ru/31354559/%D0%98%D1%81%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-Node-js-require-%D0%BF%D1%80%D0%BE%D1%82%D0%B8%D0%B2-ES6-import-export)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/KoDim-React"><img src="https://avatars1.githubusercontent.com/u/72087863?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy K.</b></sub></a><br /><a href="#mentoring-KoDim-React" title="Mentoring">📖</a></td>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /><a href="#financial-gHashTag" title="Financial">💵</a></td>
     <td align="center"><a href="https://github.com/Resoner2005"><img src="https://avatars1.githubusercontent.com/u/75675814?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Resoner2005</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/issues?q=author%3AResoner2005" title="Bug reports">🐛 🎨 🖋</a></td>
     <td align="center"><a href="https://github.com/Navernoss"><img src="https://avatars0.githubusercontent.com/u/75784137?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Navernoss</b></sub></a><br /><a href="#content-Navernoss" title="Content">🖋 🐛 🎨 </a></td>
  </tr>
 
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

[![Become a Patron!](/img/logo/patreon.jpg)](https://www.patreon.com/bePatron?u=31769291)

<!--

Чтобы создать простой сервер, который будет принимать HTTP-запросы и возвращать ответ, нам нужно подключить модуль http с помощью команды require. Cоздайте файл “example.js”:
```javascript
// example.js
const http = require('http')

module.exports.x = "Hello, World"
module.exports.f1 = function() {
    return 100
}
```

Сам файл “example.js”, который мы пишем — это тоже модуль. Мы можем его подключить в каком-нибудь другом файле. Например для файла `“test.js”,` находящегося в том же каталоге:
```javascript
// test.js
const example = require("./example.js")
console.log(example.x)
console.log(example.f1())
```

После чего мы можем в файле `“test.js”` использовать экспортируемые методы и свойства модуля `“example.js”.`

Экспортировать можно добавляя значения в `module.exports.`
Мы можем использовать наши экспортируемые `x` и `f1()`.

Теперь запустим “test.js” на выполнение командой в `Powershell:`
```javascript
node test.js
```

В консоли выведется:
```javascript
Hello, World
100
```
Теперь в нашем “example.js” создадим простой сервер, который будет отвечать `“Hello, World”` на все запросы:
```javascript
// example.js

const http = require('http');

module.exports.x = "Hello, World";
module.exports.f1 = function() {
    return 200;
};

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');
  response.end('Hello, World\n');
});
```
-->
