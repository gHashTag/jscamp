---
id: javascript29
title: 進出口
sidebar_label: 進出口
---

![@serverSerrverlesskiy](/img/javascript/headers/31.jpg)

要使對象，函數，類或變量to對外界可用，只需將其導出，然後在需要時將其導入其他項目文件中。

## "Hello, World!" on Node.js

`Node.js®` JavaScript 建立在 [Chrome V8](https://v8.dev) 引擎。

讓我們開始吧 `Node.js` 只需在控制台中輸入node即可：

```javascript
$ node
>
```

如果沒有的話 [download](https://nodejs.org) 並將其安裝在您的計算機上。

現在讓我們嘗試打印一些內容：

```javascript
$ node
> console.log('hello from Node.js')
// After hitting Enter, you get this:
hello from Node.js
undefined
```

![Export](https://media.giphy.com/media/3ohzAiaRIBBrge2jQc/giphy.gif)

隨時嘗試 `Node.js` 使用此接口：如果將小段代碼直接放入文件中不切實際，通常在此處進行測試。

現在該創建我們的 Hello Node.js 應用程序了！

讓我們開始創建 `index.js` 文件。 使用下一條命令，我們創建文件夾 `myProject` 然後輸入

```bash
mkdir myProject && cd myProject
```

Now we create the `index.js` file itself

```bash
touch index.js
```

打開您的代碼編輯器或下載並安裝它。 我們推薦 [VS Code](https://code.visualstudio.com).

打開代碼編輯器，然後向其添加我們創建的項目的文件夾。

![new prroject](/img/javascript/18.jpg)

現在，通過單擊此圖標打開側面菜單。

![new prroject](/img/javascript/19.jpg)

將以下代碼複製到其中：

```javascript
// index.js
console.log('hello from Node.js')
```

要運行此文件，必須重新打開終端並導航到以下目錄： `index.js` 位於。

在 `VS Code` 單擊這些圖標即可完成此操作。

![new prroject](/img/javascript/20.jpg)

然後選擇標籤 `TERMINAL`

![new prroject](/img/javascript/21.jpg)

成功導航到所需位置後，請使用以下命令運行文件

```javascript
node index.js
```

您將看到此命令將產生與以前相同的輸出，將字符串直接打印到終端。

![new prroject](/img/javascript/22.jpg)

## 應用程序模塊化

![Export](https://media.giphy.com/media/3o7btSt2Et1GgIaDAY/source.gif)

現在是時候進入下一個階段了！ 為了便於閱讀和可維護性，讓我們將源代碼分成多個JavaScript文件來創建一些更複雜的東西。

### 項目結構

創建以下目錄結構（包含空文件），但不要創建 `package.json` 但是，我們將在下一步中自動生成它：

```javascript
├── app
|   ├── calc.js
|   └── index.js
├── index.js
└── package.json
```

在以下位置創建新文件或文件夾 `VS Code` 單擊相應的圖標，如圖所示。

![new file](/img/javascript/23.jpg)

### package.json

每一個 `Node.js` 項目首先創建一個 `package.json` 文件。 您可以將其視為應用程序及其依賴項的JSON表示形式。 它包含應用程序的名稱，作者（您）以及運行該應用程序所需的任何依賴項。 這是您的項目圖。

您可以交互式生成 `package.json` 用命令文件

```bash
npm init
```

在終端。 運行命令後，將要求您輸入一些信息，例如應用程序名稱，版本，描述等。 不用擔心，只需按 `Enter` 直到獲得生成的JSON，問題是 `is it ok` ?. 最後一次按Enter鍵，瞧：您的 package.json 已自動生成並放置在應用程序文件夾中。 如果您在IDE中打開此文件，則該文件看起來與下面的代碼片段非常相似。

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

良好的做法是將啟動腳本添加到您的 `package.json` 包裹。 因此，將以下行添加到 `scripts` 目的：

```json
"scripts": {
  "start": "node index.js", // this line
  "test": "echo \"Error: no test specified\" && exit 1"
}
```

完成此操作後，您可以使用 `npm start` 命令。

## 進口

現在，讓我們回到您創建的第一個文件 `index.js`. 建議保持此文件非常緊湊：僅包含應用程序本身 (the `index.js` 來自的文件 `/ app` 先前創建的子目錄）。 將以下代碼複製到您的 `index.js` 歸檔並保存：

```javascript
// index.js
require('./app/index')
```

or shorthand for all `index.js` files

```javascript
// index.js
require('./app')
```

如果未指定特定文件，則代碼解釋器將查找 `index.js` 文件並輸入。 這就是我們簡單地將第一個文件連接到項目的方式。

![Export](https://media.giphy.com/media/W6Lidy1RgOl3kYdARr/giphy.gif)

## 出口

現在是時候開始構建一個真正的應用程序了。 打開 `index.js` 來自的文件 `/app` 文件夾中創建一個非常簡單的示例：添加數字數組。 在這種情況下， `index.js`文件將僅包含我們要添加的數字，並且要求計算的邏輯必須放置在 `calc.js` 文件。
將此代碼粘貼到 `index.js` 文件在 `/app` 目錄。

```javascript
// app/index.js
const calc = require('./calc')
const numbersToAdd = [3, 4, 10, 2]
const result = calc.sum(numbersToAdd)

console.log(`The result is: ${result}`)
```

現在，將實際的業務邏輯粘貼到 `calc.js` 可以在同一文件夾中找到的文件。

```javascript
// app/calc.js
const sum = arr => {
  return arr.reduce((a, b) => a + b, 0)
}

module.exports.sum = sum // export
```

在此文件中，我們創建了一個 `sum` 函數並導出它，使其在項目中的其他文件中可用。

要檢查您是否做對了所有事情，請保存以下文件，打開終端並輸入 `npm start` 或者 `node index.js`. 如果您正確執行了所有操作，則將收到答案： `19.` 如果出現問題，請仔細檢查控制台中的日誌並根據該日誌查找問題。

![new file](/img/javascript/24.jpg)

## 全部的

因此，我們先完成了關於 JavaScript 的預備課程， [mobile development](https://react-native-village.github.io/docs/start000).

## 問題?

![Problem](https://media.giphy.com/media/xTiTnGeUsWOEwsGoG4/giphy.gif)

寫給[Discord](https://discord.gg/6GDAfXn) 聊天。

## 問題:

![Question](https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif)

<!-- ## `Export` (экспорт)

![Export](https://media.giphy.com/media/JlxFcvNuzlPYA/giphy.gif)

Вы можете экспортировать объекты по одному. То, что не экспортируется, не будет доступно непосредственно за пределами модуля с целью безопасности:

```javascript
export const myNumbers = [1, 2, 3, 4]
const animals = ['Panda', 'Bear', 'Eagle'] // Недоступно вне модуля

export function myLogger() {
  return myNumbers, animals
}
```

Или вы можете экспортировать желаемые элементы одним оператором в конце модуля:

```javascript
const myNumbers = [1, 2, 3, 4]

function myLogger() {
  return myNumbers, animals
}

export { myNumbers, myLogger }
```

### Экспорт с псевдонимом

Вы также можете дать псевдонимы экспортированным элементам с помощью ключевого🗝️ слова `as:`

```javascript
export { myNumbers, myLogger as Logger, Alligator }
```

### Экспорт по умолчанию

![default](https://media.giphy.com/media/3oEduLzte7jSNmq4z6/giphy.gif)

Вы можете определить экспорт по умолчанию с помощью `default:`

```javascript
export const myNumbers = [1, 2, 3, 4]
const animals = ['Panda', 'Bear', 'Eagle']

export default function myLogger() {
  console.log(myNumbers, pets)
}

export class Alligator {
  constructor() {
    // ...
  }
}
```

## `Import` (импорт)

![Import](https://media.giphy.com/media/3obeh2rCsGMkZdcTVy/giphy.gif)

Импорт также очень прост, через ключевое🗝️ слово `import,` где импортируемые объекты в фигурных скобках, а затем указываем расположение модуля 'app.js' относительно текущего файла:

```javascript
import { myLogger, Alligator } from 'app.js'
```

### Импорт с псевдонимом

![Rename](https://media.giphy.com/media/wAc290lRAgPAs/giphy.gif)

Можно использовать псевдонимы объектов во время импорта:

```javascript
import myLogger as Logger from 'app.js'
```

### Импорт всех экспортированных участников

![Import](https://media.giphy.com/media/8TkagzJHXLWmI/giphy.gif)

Вы можете импортировать все `*`, что возможно с помощью подключаемого модуля:

```javascript
import * as Utils from 'app.js'
```

Это позволяет вам получить доступ к объектам с точечной нотацией:

```javascript
Utils.myLogger()
```

### Импорт модуля с объектом по умолчанию

![import](https://media.giphy.com/media/fUdaShpuYH4GU647lJ/giphy.gif)

Вы импортируете объект по умолчанию, давая ему имя по вашему выбору. В следующем примере `Logger` это имя, присвоенное импортированному объекту по умолчанию:

```javascript
import Logger from 'app.js'
```

А вот как можно импортировать нестандартные элементы поверх объекта по умолчанию:

```javascript
import Logger, { Alligator, myNumbers } from 'app.js'
```

Инструкция `import` используется для импорта ссылок на значения, экспортированные из внешнего модуля. Импортированные модули находятся в строгом режиме независимо от того, объявляете🗣️ ли вы их как таковые или нет.

## `Require` (затребовать)

![download](https://media.giphy.com/media/nWGRHBnAl5Kmc/giphy.gif)

Использование стандарта `ES6` рекомендуется, так как это должно быть выгодно, когда нативная поддержка браузеров выпущена. Причина в том, что вы можете импортировать частичные файлы из одного файла, в то время как с `CommonJS` вы должны требовать весь файл.

- **ЕС6** → import, export default, export
- **CommonJS** → `require,` module.exports, exports.foo

Самое важное, что нужно знать, - это то, что модули ES6 действительно являются официальным стандартом, а модули CommonJS (Node.js) - нет.

Ниже приведено их общее употребление.

### ES6 экспорт по умолчанию

![import](https://media.giphy.com/media/gibvnAbdWQEiGtPlk3/giphy.gif)

```javascript
// say.js
let hello = () => {
  return 'Hello'
}
export default hello
```

```javascript
// app.js
import hello from './say'
hello() // returns Hello
```

### ЕС6 экспортировать несколько и импортировать несколько:

![Many_people](https://media.giphy.com/media/tsSUOFubsatTG/giphy.gif)

```javascript
// say.js
let hello1 = () => {
  return 'Hello1'
}
let hello2 = () => {
  return 'Hello2'
}
export { hello1, hello2 }
```

```javascript
// app.js
import { hello1, hello2 } from './say'
hello1() // returns Hello1
hello2() // returns Hello2
```

### CommonJS module.exports

![download](https://media.giphy.com/media/3o7TKWzRShjaQxMGCk/giphy.gif)

```javascript
// say.js
let hello = () => {
  return 'Hello'
}
module.exports = hello
```

```javascript
// app.js
const hello = require('./say')
hello() // returns Hello
```

### CommonJS module.exports множественное число

![binary_code](https://media.giphy.com/media/l1J9RFoDzCDrkqtEc/giphy.gif)

```javascript
// say.js
let hello1 = () => {
  return 'Hello1'
}
let hello2 = () => {
  return 'Hello2'
}
module.exports = {
  hello1,
  hello2
}
```

```javascript
// app.js
const hello = require('./say')
hello.hello1() // returns Hello1
hello.hello2() // returns Hello2
```

Фактическая загрузка любого модуля при использовании `require()` происходит в 5 шагов:

- Разрешение
- Загрузка
- Оберточная бумага
- Оценка
- Кеширование.

Первый 1️⃣ шаг `resolution` - это внутренний шаг, на котором `node.js` вычисляет пути к файлам и т. Д. На втором, то есть `loadingnode` извлекает код📟 в текущем процессе. `In wrappingin` завершает код📟 функции⚙️, как показано выше, а затем отправляет его в виртуальную машину, `evaluatingа` затем в конечном итоге `caches.`

Итак, в основном node никогда не знает, какие символы будет экспортировать модуль `CommonJS,` до тех пор, пока модуль не будет фактически оценен. И это самая большая разница с модулями `ECMAScript,` потому что ESM является лексическим и, следовательно, экспортируемые символы известны до того, как код📟 фактически оценивается. -->

<!-- ## Подробный синтаксис

![book](https://media.giphy.com/media/s6OiiampNcye4/giphy.gif)

```javascript
import defaultExport from "module-name"
import * as name from "module-name"
import { export } from "module-name"
import { export as alias } from "module-name"
import { export1 , export2 } from "module-name"
import { export1 , export2 as alias2 , […] } from "module-name"
import defaultExport, { export [ , […] ] } from "module-name"
import defaultExport, * as name from "module-name"
import "module-name"
import("/module-name.js").then(module => {…}) // Динамический импорт
```

**defaultExport**

Имя объекта, который будет ссылаться на значение экспорта по умолчанию (дефолтный экспорт) из модуля.

**module-name**

Имя модуля для импорта. Это зачастую относительный или абсолютный путь к `.js` файлу модуля без указания расширения .js. Некоторые сборщики могут разрешать или даже требовать использования расширения; проверяйте своё рабочее окружение. Допускаются только строки с одиночными или двойными кавычками.

**name**

Имя локального обьекта, который будет использован как своего рода пространство имен, ссылающееся на импортируемые значения.

**export, exportN**

Имена значений, которые будут импортированы.

**alias, aliasN**

![Export](https://media.giphy.com/media/YrZmRyiCfmJCnH13QV/giphy.gif)

Имена, которые будут ссылаться на импортируемые значения.

### Описание

![Book](https://media.giphy.com/media/V8oj5SlnHsZMY/giphy.gif)

Параметр name это имя локального обьекта, который будет использован как своего рода пространство имен, ссылающееся на импортируемые значения. Параметры export определяют отдельные именованные значения, в то время как `import * as name` импортирует все значения.

### Импорт всего содержимого модуля

![insert](https://media.giphy.com/media/3o6ZtafpgSpvIaKhMI/giphy.gif)

Этот код📟 вставляет объект myModule в текущую область видимости, содержащую все экспортированные значения из модуля, находящегося в файле `/modules/my-module.js.`

```javascript
import * as myModule from '/modules/my-module.js'
```

В данном случае, доступ к импортируемым значениям можно осуществить с использованием имени модуля (в данном случае "myModule") в качестве пространства имен. Например, если импортируемый выше модуль включает в себя экспорт метода `doAllTheAmazingThings(),` вы можете вызвать его так:

```javascript
myModule.doAllTheAmazingThings()
```

### Импорт единичного значения из модуля

![Download](https://media.giphy.com/media/LHZyixOnHwDDy/giphy.gif)

Определенное ранее значение, названное myExport, которое было экспортировано из модуля `my-module` либо неявно (если модуль был экспортирован целиком), либо явно (с использованием инструкции export), позволяет вставить myExport в текущую область видимости.

```javascript
import { myExport } from '/modules/my-module.js'
```

### Импорт нескольких единичных значений

![insert](https://media.giphy.com/media/8OPgOmnuVIvoFyXR4w/giphy.gif)

Этот код📟 вставляет оба значения foo и bar в текущую область видимости.

```javascript
import { foo, bar } from '/modules/my-module.js'
```

### Импорт значений с использованием более удобных имен

![Import](https://media.giphy.com/media/jO1YINDl4HRdXDh3zX/giphy.gif)

Вы можете переименовать значения, когда импортируете их. Например, этот код📟 вставляет shortName в текующую область видимости.

```javascript
import { reallyReallyLongModuleExportName as shortName } from '/modules/my-module.js'
```

### Переименование нескольких значений в одном импорте

![Renaming](https://media.giphy.com/media/emc9V9NchQZKU/giphy.gif)

Код📟 , который импортирует несколько значений из модуля, используя более удобные имена.

```javascript
import { reallyReallyLongModuleExportName as shortName, anotherLongModuleName as short } from '/modules/my-module.js'
```

### Импорт модуля для использования его побочного эффекта

![Dowlands](https://media.giphy.com/media/FgiHOQyKUJmwg/giphy.gif)

Импорт всего модуля только для использования побочного эффекта от его вызова, не импортируя что-либо. Это запускает глобальный код📟 модуля, но в действительности не импортирует никаких значений.

```javascript
import '/modules/my-module.js'
```

### Импорт значения по умолчанию

![Download](https://media.giphy.com/media/hyZffrEauy8QU/giphy.gif)

Есть возможность задать дефолтный export (будь то объект, функция⚙️, класс или др.). Инструкция import затем может быть использована для импорта таких значений.

Простейшая версия прямого импорта значения по умолчанию:

```javascript
import myDefault from '/modules/my-module.js'
```

Возможно также использование такого синтаксиса📖 с другими вариантами из перечисленных выше (импорт пространства имен или именованный импорт). В таком случае, импорт значения по умолчанию должен быть определён первым. Для примера:

```javascript
import myDefault, * as myModule from '/modules/my-module.js'
// myModule использовано как пространство имен
или

import myDefault, { foo, bar } from '/modules/my-module.js'
// именованный импорт конкретных значений
```

### Импорт переменных

![Download](https://media.giphy.com/media/Y3Bb5MNAtOC4H73qbU/giphy.gif)

Если вы импортируете переменные 🔔 , то в данной области видимости они ведут себя как константы.

Такой код📟 выведет ошибку🙅‍♂️:

**my-module.js**

```javascript
export let a = 2
export let b = 3

main.js
import { a, b } from '/modules/my-module.js'
a = 5
b = 6
// Uncaught TypeError: Assignment to constant variable.
```

Для импорта можно воспользоваться объектом в котором хранятся эти переменные 🔔 .

Такой код📟 будет рабочим:

**my-module.js**

```javascript
export let obj = { a: 2, b: 4 }
```

**main.js**

```javascript
import { obj } from '/modules/my-module.js'

obj.a = 1
obj.b = 4
```

Учитывая, что import хранит именно ссылки на значения, экспортированные из внешнего модуля, то это можно использовать как замыкания. -->

為了使對象，函數，類或變量🔔可供外界使用，您需要：

1.導出然後導入
2.導入然後導出

`Node.js®` is:

1.編程語言
2.基於Chrome V8引擎構建的JavaScript環境
3.瀏覽器

`package.json` is:

1.基於Chrome V8引擎構建的JavaScript環境
2.應用程序及其依賴項的JSON表示形式
3. JSON編程語言

為了了解您學到了多少本課程，請對 [mobile application](http://onelink.to/njhc95) 我們學校就這個話題。

![Sumerian school](/img/app.png)

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

## 鏈接:

1. [MDN web doc. ECMAScript 6 Modules: The Future Is Now](https://frontender.info/es6-modules/)
2. [ES6 Modules and How to Use Import and Export in JavaScript](https://www.digitalocean.com/community/tutorials/js-modules-es6)
3. ["require vs ES6 import / export"](https://coderoad.ru/31354559/%D0%98%D1%81%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-Node-js-require-%D0%BF%D1%80%D0%BE%D1%82%D0%B8%D0%B2-ES6-import-export)

## 貢獻者 ✨

感謝這些好人 ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

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
