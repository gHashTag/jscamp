---
id: javascript29
title: Import Export
sidebar_label: Import Export
---

![@serverSerrverlesskiy](/img/javascript/headers/31.jpg)

To make objects, functions, classes or variables 🔔 available to the outside world, simply export them and then import them into other project files where necessary.

## "Hello, World!" on Node.js

`Node.js®` is a JavaScript environment built on the [Chrome V8](https://v8.dev) engine.

Let's get started with `Node.js` just by typing node in the console:

```javascript
$ node
>
```

If you don't have it, then [download](https://nodejs.org) and install it on your computer.

Now let's try to print something:

```javascript
$ node
> console.log('hello from Node.js')
// After hitting Enter, you get this:
hello from Node.js
undefined
```

![Export](https://media.giphy.com/media/3ohzAiaRIBBrge2jQc/giphy.gif)

Feel free to experiment with `Node.js` using this interface: it is common to test small pieces of code here if it is not practical to put them directly into a file.

It's time to create our Hello Node.js application!

Let's start by creating the `index.js` file. With the next command we create the folder `myProject` and enter it.

```bash
mkdir myProject && cd myProject
```

Now we create the `index.js` file itself

```bash
touch index.js
```

Open your code editor or download and install it. We recommend [VS Code](https://code.visualstudio.com).

Open the code editor and add the folder of the project we created to it.

![new prroject](/img/javascript/18.jpg)

Now open the side menu by clicking this icon.

![new prroject](/img/javascript/19.jpg)

Copy the following piece of code into it:

```javascript
// index.js
console.log('hello from Node.js')
```

To run this file, you must reopen your terminal and navigate to the directory where `index.js` is located.

In `VS Code` this can be done by clicking on these icons.

![new prroject](/img/javascript/20.jpg)

And choose the tab `TERMINAL`

![new prroject](/img/javascript/21.jpg)

Once you have successfully navigated to the desired location, run the file using the command

```javascript
node index.js
```

You will see that this command will produce the same output as before, printing the string directly to the terminal.

![new prroject](/img/javascript/22.jpg)

## Payment

Now you are on a stripped-down version of the site, after subscribing to [Patreon](https://www.patreon.com/javascriptcamp), you will get full access to the training course, as well as access to our server's private channels in [Discord](https://discord.gg/6GDAfXn).

Download our [mobile application](http://onelink.to/njhc95) or get tested in our [JavaScript telegram bot](https://t.me/javascriptcamp_bot), and also subscribe to [our news](https://t.me/javascriptapp).

[![Become a Patron!](/Img/logo/patreon.jpg)](https://www.patreon.com/bePatron?u=31769291)


[![Sumerian school](/img/app.jpg)](http://onelink.to/njhc95)

![JavaScript Camp](/img/bandlink.png)

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
