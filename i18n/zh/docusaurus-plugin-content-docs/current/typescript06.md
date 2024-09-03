---
id: typescript06
title: Преобразование типов
sidebar_label: Преобразование типов
---

Типы относящиеся к одной категории так же как и различную валюту можно конвертировать друг в друга.
Преобразование типов (type conversion, typecasting) — это процесс заключающийся в преобразовании (конвертации) значения одного типа в значение другого типа.

Преобразование типов делятся на явные и неявные преобразования.

## Неявные преобразования

Неявные преобразования не требуют никаких языковых конструкций и не приводят к утрате данных.
Примером неявного преобразования может служить преобразование значения типа `int` в тип `double`. Являясь 64-битным вещественным типом, `double` может хранить любое значение 32-битного целочисленного типа `int`.

![inttodouble](/img/typescript/06/int-to-double.png)

Как показано на изображении выше, преобразование int в double не приводит к потере данных, так как 32-битное значение умещается в 64 битах.

## Явные преобразования

Явные преобразования, которые для ясности часто называют приведением типов, происходят при участии разработчика и требуют указания языковых конструкций, называемых операторами приведения. Приведение типов требуется тогда, когда в процессе преобразования данные могут быть утрачены или по каким-то причинам процесс может завершиться ошибкой.
Самым простым примером явного преобразования служит преобразование типа double, используемого для хранения 64-битных значений с плавающей запятой, к целочисленному типу int.

![doubletoint](/img/typescript/06/double-to-int.png)

## Примеры

TypeScript предоставляет встроенные функции для выполнения преобразования типов.

Можно преобразовать число в строку, используя конструктор строки, как показано ниже.

```typescript
let number: number = 42
let numberAsString: string = String(number) //Перевод числа в строку
```

Также можно наоборот, перевести строку в число.

```typescript
let stringAsNumber: string = '42'
let number: number = Number(stringAsNumber)
```

## Ссылки:

1.  [Metanit](https://metanit.com/web/typescript/3.9.php)
2.  [Xsltdev](https://xsltdev.ru/typescript/004/)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/FELiX-RN"><img src="https://avatars0.githubusercontent.com/u/72006627?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Philipp Dvinyaninov</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/commits?author=FELiX-RN" title="Documentation">  </a></td>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /><a href="#financial-gHashTag" title="Financial">💵</a></td>
  </tr>
  
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

[![EnglishMoji!](/img/logo/NeuroCoder.png)](https://vk.com/neurocoder)
