---
id: reactnative12
title: Код для конкретной платформы
sidebar_label: Код для конкретной платформы
---

import YouTube from 'react-youtube'

При создании кроссплатформенного приложения вы захотите повторно использовать как можно больше кода. Могут возникнуть сценарии, когда имеет смысл различать код, например, вы можете захотеть реализовать отдельные визуальные компоненты для Android и iOS.

React Native предоставляет два способа организовать ваш код и разделить его по платформам:

- Использование модуля `Platform`.
- Использование расширений файлов для конкретных платформ.

Некоторые компоненты могут иметь свойства, которые работают только на одной платформе. Все эти реквизиты помечены `@platform` и имеют небольшой значок рядом с ними на веб-сайте.

## Модуль Platform

React Native предоставляет модуль, определяющий платформу, на которой работает приложение. Вы можете использовать логику обнаружения для реализации кода, зависящего от платформы. Используйте эту опцию, если только небольшие части компонента зависят от платформы.

```jsx
import { Platform, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  height: Platform.OS === 'ios' ? 200 : 100
})
```

Platform.OS будет ios при работе на iOS и android при работе на Android.

Также доступен метод Platform.select, который задает объект, где ключи могут быть одним из `'ios' | 'android' | 'native' | 'default'`, возвращает наиболее подходящее значение для платформы, на которой вы сейчас работаете. То есть, если вы работаете на телефоне, предпочтение будет отдаваться клавишам `ios` и `android`. Если они не указаны, будет использоваться собственный ключ, а затем ключ `default`.

```jsx
import { Platform, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...Platform.select({
      ios: {
        backgroundColor: 'red'
      },
      android: {
        backgroundColor: 'green'
      },
      default: {
        // other platforms, web for example
        backgroundColor: 'blue'
      }
    })
  }
})
```

Это приведет к тому, что контейнер будет иметь `flex: 1` на всех платформах, красный цвет фона на iOS, зеленый цвет фона на Android и синий цвет фона на других платформах.

## Расширения для конкретных платформ

Если код вашей платформы более сложен, вам следует подумать о разделении кода на отдельные файлы. React Native определит, когда файл имеет расширение `.ios.` или `.android.` расширение и загрузите соответствующий файл платформы при необходимости из других компонентов.

Например, предположим, что в вашем проекте есть следующие файлы:

```jsx
BigButton.ios.js
BigButton.android.js
```

Затем вы можете потребовать компонент следующим образом:

```jsx
import BigButton from './BigButton'
```

React Native автоматически подберет нужный файл в зависимости от запущенной платформы.

Более подробная информация [здесь](https://reactnative.dev/docs/platform-specific-code).

## Проблемы?

![Problem](https://media.giphy.com/media/xTiTnGeUsWOEwsGoG4/giphy.gif)

Пишите в [Discord](https://discord.gg/6GDAfXn) или телеграмм [чат](https://t.me/jscampapp), а также подписывайтесь на наши [новости](https://t.me/javascriptapp)

![JavaScript Camp](/img/bandlink.png)

## Вопросы

Сколько способов предоставляет React Native для организации и разделения вашего кода по платформам?

1. 1
2. 2
3. 3

Как называется модуль в React Native, определяющий платформу, на которой работает приложение?

1. `@platform`
2. `Platform`
3. `platform`

## Done ✅

Чтобы узнать, насколько хорошо вы усвоили этот урок, пройдите тест в [мобильном приложении](http://onelink.to/njhc95) нашей школы по этой теме или в [боте Telegram](https://t.me/javascriptcamp_bot).

![JS Camp](/img/app.jpg)

## Ссылки:

1. [React Native](https://reactnative.dev/docs/platform-specific-code)

[![Become a Patron!](/img/logo/patreon.jpg)](https://www.patreon.com/bePatron?u=31769291)
