---
id: javascript16
title: Наследование
sidebar_label: Наследование
---

![@serverSerrverlesskiy](/img/javascript/headers/16.png)

![Throne](https://media.giphy.com/media/Az8qq276ke2BO/giphy.gif)

JavaScript поддерживает наследование 🤴, что позволяет нам при создании новых типов объектов при необходимости унаследовать их функционал от уже существующих.

Например, у нас может быть объект `User` 👤 , представляющий отдельного пользователя. И также может быть объект `Employee`, который представляет работника 👷. Но работник также может являться пользователем и поэтому должен иметь все его свойства и методы.

Например:

```jsx live
function learnJavaScript() {
  let info

  // конструктор пользователя
  function User(name, age) {
    this.name = name
    this.age = age
  }
  User.prototype.maxAge = 110

  // конструктор работника
  function Employee(name, age, comp) {
    User.call(this, name, age)
    this.company = comp
  }
  Employee.prototype = Object.create(User.prototype)

  var tom = new User('Том', 26)
  var bill = new Employee('Билл', 32, 'Google')

  info = bill.name + ' ' + bill.age + ' ' + bill.company //Пример того что наследование работает
  return info
}
```

Здесь в начале определяет конструктор `User` и к его прототипу добавляется ➕ свойство `maxAge`. Затем определяется тип `Employee`.

В конструкторе `Employee` происходит обращение 💬 к конструктору `User` с помощью вызова:

```jsx
User.call(this, name, age)
```

Передача первого параметра позволяет вызвать функцию конструктора `User` для объекта, создаваемого конструктором `Employee`. Благодаря этому все свойства и методы, определенные в конструкторе `User`, также переходят на объект `Employee`.

Кроме того, необходимо унаследовать также и прототип `User`. Для этого служит вызов 🤙 :

```jsx
Employee.prototype = Object.create(User.prototype)
```

Метод `Object.create()` позволяет создать объект прототипа `User`, который затем присваивается прототипу `Employee`. При этом при необходимости в прототипе `Employee` мы также можем определить дополнительные свойства и методы.

## Вопросы:

![Question](https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif)

Для того чтобы понять, на сколько вы усвоили этот урок, пройдите тест в [мобильном приложении](http://onelink.to/njhc95) нашей школы по этой теме.

![Sumerian school](/img/app.png)

При помощи какой функции происходит наследование?
1.  .call
2.  .open
3.  .extend

Как создать объект прототипа?
1. Object.create
2. Object.extend

Как происходит вызов конструктора родительского класса?
1. .open
2. .call

## Ссылки:

1.  [MDN web docs](https://developer.mozilla.org/ru/docs/Learn/JavaScript/%D0%9E%D0%B1%D1%8A%D0%B5%D0%BA%D1%82%D1%8B/Inheritance)
2.  [Metanit справочник](https://metanit.com/web/javascript/4.9.php)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/FELiX-RN"><img src="https://avatars0.githubusercontent.com/u/72006627?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Philipp Dvinyaninov</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/commits?author=FELiX-RN" title="Documentation">📖</a></td>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /><a href="#financial-gHashTag" title="Financial">💵</a></td>
    <td align="center"><a href="https://github.com/Resoner2005"><img src="https://avatars1.githubusercontent.com/u/75675814?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Resoner2005</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/issues?q=author%3AResoner2005" title="Bug reports">🐛 🎨 🖋</a></td>
    <td align="center"><a href="https://github.com/Navernoss"><img src="https://avatars0.githubusercontent.com/u/75784137?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Navernoss</b></sub></a><br /><a href="#content-Navernoss" title="Content">🖋 🐛 🎨 </a></td>
  </tr>
  
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

[![Become a Patron!](/img/logo/patreon.png)](https://www.patreon.com/bePatron?u=31769291)
