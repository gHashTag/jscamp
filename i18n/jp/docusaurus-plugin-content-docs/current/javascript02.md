---
id: javascript02
title: コメント（1）
sidebar_label: コメント（1）
---

![@serverSerrverlesskiy](/img/javascript/headers/02.jpg)

## コメントとは何ですか？

JavaScriptには、コードでコメントを指定する方法がいくつかあります。 📟

時々書くとき 🖊️ コード、あなたはそれに人々だけを対象とした説明を提供する必要があります 👨 , コンピューター用ではありません。おそらくそれは、過去から（未来の私へ！）あなた自身へのある種のメッセージであり、プログラムコードのこれまたはそのことについてです。あるいは、コードのそのような部分とそのような部分だけを実行する必要があり、残りは省略すべきであることを示しているだけかもしれません。要するに、そのような場合には、コメントの助けを借りる必要があります。
コメント（1） 🗣️ 追加するために使用されます ➕ ヒント、メモ 🔖 , 提案または警告。彼らは読みやすく、理解しやすくすることができます 💡 コード。それらはまた防ぐのに使用することができます 🛑 コードの実行（この手法は、コードをデバッグするときに実行されます）。

コードの実行（この手法は、コードをデバッグするときに実行されます）。 🗣️ コードで。
## ビデオ

<YouTube videoId="zCvKMw5QHRw" />

## 1行コメント

![Slash](https://media.giphy.com/media/bKXMS0NjXoyaY/giphy.gif)

最初 1️⃣ 仕方 `// コメント` 🗣️ この場合、テキスト全体 📜 二重スラッシュの後の行にコメントがあります 🗣️ . 通訳が2つ見たとき 2️⃣ 続けてスラッシュ `//`, 彼は、行の終わりまで続くすべてのものを安全に無視できることをすぐに理解します。まだ構文に注意を払わないでください 📖 コードについては、少し後で詳しく説明します。

```jsx live
function learnJavaScript() {
  // これは一列に並んだコメントです
  var hello = 'Hello world!!!'

  return hello
}
```

## 複数行コメント

![Coments](https://media.giphy.com/media/UevalSWg5twQeqpc8Q/giphy.gif)

2番目 2️⃣ 方法は `/* */`, この方法は、最初の方法よりも柔軟性があります 1️⃣ . 通訳が見たらすぐに `/*`, 彼は考えます：「ええ、それは私が見るまで意味します `*/`, ここでは何も気にしない！」
たとえば、1つで使用できます 1️⃣ ライン 👇 :

```jsx live
function learnJavaScript() {
  /* Это однострочный комментарий */
  var hello = 'Hello world!!!'

  return hello
}
```

Либо вы можете сделать многострочный комментарий 🗣️ , как показано здесь 👇 :

```jsx live
function learnJavaScript() {
  /*Этот комментарий располагается на нескольких линиях. 
     Обратите внимание, что вам не нужно обрывать комментарий, пока вы его не закончите*/
  var hello = 'Hello world!!!'
  /* Напишите здесь свой комментарий */
  return hello
}
```

## Комментарий посреди кода

![Among](https://media.giphy.com/media/fnjIiBNo38IHS/giphy.gif)

Также, если пожелаете, то вы можете использовать такое комментирование 🗣️ посреди строки кода. Хотя это может ухудшить читабельность кода👇 :

```jsx live
function learnJavaScript() {
  var x = ''
  var hello = 'Hello ' + x /* вставьте значение x */ + '!'

  return hello
}
```

С комментированием кода все и прозвучал звонок на перемену🔔 .

![Comments](https://media.giphy.com/media/SvuRLwWT0EoeErwPvB/giphy.gif)

## Проблемы?

![Problem](https://media.giphy.com/media/xTiTnGeUsWOEwsGoG4/giphy.gif)

Пишите в [Discord](https://discord.gg/6GDAfXn) или телеграмм [чат](https://t.me/jscampapp), а также подписывайтесь на наши [новости](https://t.me/javascriptapp)

## Вопросы:

![Question](https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif)

Для кого предназначены комментарии?

1. Человек
2. Консоль
3. Интерпретатор JavaScript

Для чего не используются комментарии?

1. Добавление подсказок, заметок, предложений
2. Как часть программного кода
3. Для предотвращения выполнения кода

Какого из способов указания комментария в коде JavaScript не существует?

1. `(' ')`
2. `//`
3. `/* */`

Как отключить любое количество строк кода?

1. Написать комментарий посреди кода
2. Обернуть код в комментарий
3. Использовать команду `console.log`

Для того чтобы понять, на сколько вы усвоили этот урок, пройдите тест в [мобильном приложении](http://onelink.to/njhc95) нашей школы по этой теме.

![Sumerian school](/img/app.jpg)

## Ссылки:

1. [MDN web docs](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Lexical_grammar)
2. [Код для подростков: прекрасное руководство по программированию для начинающих, том 1: Javascript - Jeremy Moritz ](https://www.amazon.com/Code-Teens-Beginners-Programming-Javascript-ebook/dp/B07FCTLVPC)
3. [JavaScript.ru](https://learn.javascript.ru/types)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<table>
  <tr>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /> <a href="https://github.com/gHashTag/react-native-village/commits?author=gHashTag" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/Resoner2005"><img src="https://avatars1.githubusercontent.com/u/75675814?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Resoner2005</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/issues?q=author%3AResoner2005" title="Bug reports">🐛 🎨 🖋</a></td>
  </tr>
  
</table>

[![Become a Patron!](/img/logo/patreon.jpg)](https://www.patreon.com/bePatron?u=31769291)
