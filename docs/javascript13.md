---
id: javascript13
title: Инкапсуляция
sidebar_label: Инкапсуляция
---
Инкапсуляция — свойство языка программирования, позволяющее пользователю не задумываться о сложности реализации используемого программного компонента (что у него внутри?), а взаимодействовать с ним посредством предоставляемого интерфейса (публичных методов и членов), а также объединить и защитить жизненно важные для компонента данные. При этом пользователю предоставляется только спецификация (интерфейс) объекта.

Инкапсуляция является одним из ключевых понятий объектно-ориентированного программирования и представляет сокрытие состояния объекта от прямого доступа извне. 

По умолчанию все свойства объектов являются ``публичными``, ``общедоступными``, и мы к ним можем обратиться из любого места программы.

## Пример

Например как в данном коде: 
```jsx
function User(pName, pAge) {
    this.name = pName;
    this.age = pAge;
    this.displayInfo = function(){
        document.write("Имя: " + this.name + "; возраст: " + this.age);
    };
};
var tom = new User("Том", 26);
tom.name=34;
console.log(tom.name);
```

Но мы можем их скрыть от доступа извне, сделав свойства локальными переменными:
```jsx
function User (name) {
    this.name = name;
    var _age = 1;
    this.displayInfo = function(){
        console.log("Имя: " + this.name + "; возраст: " + _age);
    };
    this.getAge = function() {
        return _age;
    }
    this.setAge = function(age) {
        if(typeof age === "number" && age >0 && age<110){
            _age = age;
        } else {
            console.log("Недопустимое значение");
        }
    }
}
 
var tom = new User("Том");
console.log(tom._age); // undefined - _age - локальная переменная
console.log(tom.getAge()); // 1
tom.setAge(32);
console.log(tom.getAge()); // 32
tom.setAge("54"); // Недопустимое значение
tom.setAge(123); // Недопустимое значение
```
Пояснение:
В конструкторе ``User`` объявляется локальная переменная ``_age`` вместо свойства ``age``. Как правило, названия локальных переменных в конструкторах начинаются со знака подчеркивания.

Для того, чтобы работать с возрастом пользователя извне, определяются два метода. Метод ``getAge(``) предназначен для получения значения переменной ``_age``. Этот метод еще называется геттер (getter). Второй метод - ``setAge``, который еще называется сеттер (setter), предназначен для установки значения переменной ``_age``.

Плюсом такого подхода является то, что мы имеем больший контроль над доступом к значению ``_age``. Например, мы можем проверить какие-то сопутствующие условия, как в данном случае проверяются тип значение (он должен представлять число), само значение (возраст не может быть меньше 0).

## Проблема
Одним из недостатков использования инкапсуляции является проблема производительности. Несмотря на то, что при создании объекта не заметно никакой разницы, вызовы метода для объекта с помощью инкапсуляции будут осуществляться примерно на 80% медленнее.

Если вы осуществляете миллионы вызовов методов в секунду, и производительность действительно имеет для вас значение, то решение о том, какой способ наиболее предпочтителен для этого конкретного случая использования, предоставляется вам самим.

## Вопросы:

Для того чтобы понять, на сколько вы усвоили этот урок, пройдите тест в [мобильном приложении](http://onelink.to/njhc95) нашей школы по этой теме.

![Sumerian school](/img/app.png)

## Ссылки:
 1. [MDN web docs](https://developer.mozilla.org/ru/docs/Web/JavaScript/Closures)
 2. [Metanit справочник](https://metanit.com/web/javascript/4.7.php)
 3. [Medium статья про инкапсуляцию](https://medium.com/nuances-of-programming/%D0%B8%D0%BD%D0%BA%D0%B0%D0%BF%D1%81%D1%83%D0%BB%D1%8F%D1%86%D0%B8%D1%8F-%D1%81%D0%BE%D1%81%D1%82%D0%BE%D1%8F%D0%BD%D0%B8%D1%8F-%D0%B2-javascript-%D0%B1%D0%B5%D0%B7-%D0%B8%D1%81%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F-%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D0%BE%D0%B2-%D0%B2-2019-%D0%B3%D0%BE%D0%B4%D1%83-%D1%81-%D0%BF%D1%80%D0%B8%D0%B2%D0%B0%D1%82%D0%BD%D1%8B%D0%BC%D0%B8-%D0%BF%D0%BE%D0%BB%D1%8F%D0%BC%D0%B8-5431df2a3bf7)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/FELiX-RN"><img src="https://avatars0.githubusercontent.com/u/72006627?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Philipp Dvinyaninov</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/commits?author=FELiX-RN" title="Documentation">📖</a></td>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /><a href="#financial-gHashTag" title="Financial">💵</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->
[![Become a Patron!](/img/logo/patreon.png)](https://www.patreon.com/bePatron?u=31769291)
