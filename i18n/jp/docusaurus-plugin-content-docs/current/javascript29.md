---
id: javascript29
title: Import Export
sidebar_label: Import Export
---

![@serverSerrverlesskiy](/img/javascript/headers/31.jpg)

オブジェクト、関数、クラス、または変数🔔を外部で利用できるようにするには、それらをエクスポートしてから、必要に応じて他のプロジェクトファイルにインポートします。

## «Hello, World!» на Node.js

`Node.js®`はエンジン上に構築されたJavaScript環境です [Chrome V8](https://v8.dev).

コンソールに「node」と入力して、`Node.js`から始めてください。

```javascript
$ node
>
```

お持ちでない場合は、[ダウンロード](https://nodejs.org) して、コンピューターにインストールしてください。

![Node](https://media.giphy.com/media/kdFc8fubgS31b8DsVu/giphy.gif)

それでは、何かを印刷してみましょう。

```javascript
$ node
> console.log('hello from Node.js')
// Enterキーを押すと、次のようになります。
hello from Node.js
undefined
```

![Export](https://media.giphy.com/media/3ohzAiaRIBBrge2jQc/giphy.gif)

このインターフェースを使用して`Node.js`を自由に試してみてください。すべてをファイルに入れることが現実的でない場合は、ここで小さなコードをテストするのが一般的です。

HelloNode.jsアプリケーションを作成する時が来ました！

`index.js`ファイルを作成することから始めましょう。 次のコマンドを使用して、`myProject`フォルダーを作成して入力します。

```bash
mkdir myProject && cd myProject
```

次に、`index.js`ファイル自体を作成します

```bash
touch index.js
```

コードエディタを開くか、ダウンロードしてインストールします。 [VS Code](https://code.visualstudio.com) をお勧めします。

コードエディタを開き、作成したプロジェクトのフォルダを追加します。

![new prroject](/img/javascript/18.jpg)

次に、このアイコンをクリックしてサイドメニューを開きます。

![new prroject](/img/javascript/19.jpg)

次のコードスニペットをコピーします。

```javascript
// index.js
console.log('hello from Node.js')
```

このファイルを実行するには、ターミナルを再度開き、`index.js`が配置されているディレクトリに移動する必要があります。

В `VS Code` это можно сделать нажав на эти значки.

![new prroject](/img/javascript/20.jpg)

そして、「ターミナル」タブを選択します

![new prroject](/img/javascript/21.jpg)

目的の場所に正常に移動したら、コマンドを使用してファイルを実行します

```javascript
node index.js
```

このコマンドは以前と同じ出力を生成し、文字列を端末に直接出力することがわかります。

![new prroject](/img/javascript/22.jpg)

## アプリケーションのモジュール性

![Export](https://media.giphy.com/media/3o7btSt2Et1GgIaDAY/source.gif)

次のレベルに進む時が来ました！ 読みやすさと保守性のために、ソースコードをいくつかのJavaScriptファイルに分割して、より複雑なものを作成しましょう。

### プロジェクトの構造

次のディレクトリ構造（空のファイルを含む）を作成しますが、まだ `package.json'は作成しないでください。次のステップで、自動的に生成します。

```javascript
├── app
|   ├── calc.js
|   └── index.js
├── index.js
└── package.json
```

`VS Code`で新しいファイルまたはフォルダを作成するには、図に示すように対応するアイコンをクリックします。

![new file](/img/javascript/23.jpg)

### package.json

すべての`Node.js`プロジェクトは、`package.json`ファイルの作成から始まります。 これは、アプリケーションとその依存関係のJSON表現と考えることができます。 これには、アプリケーションの名前、作成者（あなた）、およびアプリケーションの実行に必要なすべての依存関係が含まれています。 これはあなたのプロジェクトマップです。

コマンドを使用して、`package.json`ファイルをインタラクティブに生成できます

```bash
npm init
```

ターミナルで。 コマンドを実行すると、アプリケーション名、バージョン、説明などの情報を入力するように求められます。 心配する必要はありません。生成されたJSONが表示され、「大丈夫ですか」という質問が表示されるまで、「Enter」キーを押してください。 最後にもう一度`Enter`を押すと、出来上がりです。 `package.json`が自動的に生成され、アプリケーションフォルダに配置されます。 このファイルをIDEで開くと、以下のコードスニペットと非常によく似ています。

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

パッケージ`package.json`に開始スクリプトを追加することをお勧めします。 したがって、次の行を`scripts`オブジェクトに追加します。

```json
"scripts": {
  "start": "node index.js", // この行
  "test": "echo \"Error: no test specified\" && exit 1"
}
```

これが完了したら、`npmstart`コマンドを使用してアプリケーションを起動できます。

## 輸入

次に、作成した最初のファイル`index.js`に戻りましょう。 このファイルは非常にコンパクトに保つ​​ことをお勧めします。アプリケーション自体の接続のみです（前に作成した `/app`サブディレクトリの`index.js`ファイル）。 次のコードを`index.js`ファイルにコピーして保存します。

```javascript
// index.js
require('./app/index')
```

またはすべての`index.js`ファイルの省略形

```javascript
// index.js
require('./app')
```

特定のファイルが指定されていない場合、コードインタープリターは`index.js`ファイルを探して入力します。 そのように、最初のファイルをプロジェクトに含めました。

![Export](https://media.giphy.com/media/W6Lidy1RgOl3kYdARr/giphy.gif)

## 書き出す

次に、実際のアプリケーションの構築を開始します。 `/app`フォルダーから`index.js`ファイルを開いて、非常に単純な例を作成します。数値の配列を追加します。 この場合、 `index.js`ファイルには追加したい数値のみが含まれ、計算が必要なロジックは`calc.js`ファイルの別のモジュールに配置する必要があります。
このコードを`/app`ディレクトリの`index.js`ファイルに貼り付けます。

```javascript
// app/index.js
const calc = require('./calc')
const numbersToAdd = [3, 4, 10, 2]
const result = calc.sum(numbersToAdd)

console.log(`The result is: ${result}`)
```

次に、実際のビジネスロジックを同じフォルダにある`calc.js`ファイルに貼り付けます。

```javascript
// app/calc.js
const sum = arr => {
  return arr.reduce((a, b) => a + b, 0)
}

module.exports.sum = sum // export
```

このファイルでは、 `sum`関数を作成してエクスポートし、他のプロジェクトファイルで使用できるようにしました。

すべてが正しく行われたかどうかを確認するには、これらのファイルを保存し、ターミナルを開いて「npmstart」または「nodeindex.js」と入力します。 すべてが正しく行われた場合、答えは次のようになります。 `19.`何か問題が発生した場合は、コンソールのログを注意深く確認し、それに基づいて問題を見つけてください。

![new file](/img/javascript/24.jpg)

## 合計

これで、[モバイル開発](https://react-native-village.github.io/docs/start000) のJavaScriptコースの準備コースを完了しました。

## 問題？

![Problem](https://media.giphy.com/media/xTiTnGeUsWOEwsGoG4/giphy.gif)

[Discord](https://discord.gg/6GDAfXn) または電報 [chat](https://t.me/jscampapp) に書き込み、[news](https://t.me/javascriptapp)。

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

## 質問:

![Question](https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif)

オブジェクト、関数、クラス、または変数を外の世界で利用できるようにするには、次のことを行う必要があります。

1. それらをエクスポートしてからインポートします
2. それらをインポートしてからエクスポートします

`Node.js®`は次のとおりです。

1. プログラミング言語
2. ChromeV8エンジン上に構築されたJavaScript環境
3. ブラウザ

`package.json`は次のとおりです。

1. ChromeV8エンジン上に構築されたJavaScript環境
2. アプリケーションとその依存関係のJSON表現
3. JSONプログラミング言語

このレッスンでどれだけ学んだかを理解するために、このトピックについて当校の[モバイルアプリケーション]（http://onelink.to/njhc95）でテストを受けてください。

![Sumerian school](/img/app.jpg)

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

## リンク：

1. [MDNWebドキュメント。 記事「ECMAScript6のモジュール：未来は今」](https://frontender.info/es6-modules/)
2. [記事「ES6モジュールとJavaScriptでのインポートとエクスポートの使用方法」](https://www.digitalocean.com/community/tutorials/js-modules-es6)
3. [「必要なvs.ES6のインポート/エクスポート」の記事](https://coderoad.ru/31354559/%D0%98%D1%81%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-Node-js-require-%D0%BF%D1%80%D0%BE%D1%82%D0%B8%D0%B2-ES6-import-export)

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
