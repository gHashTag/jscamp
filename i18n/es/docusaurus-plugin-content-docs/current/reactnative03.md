---
id: reactnative03
title: Props - параметры
sidebar_label: Props - параметры
---

import YouTube from 'react-youtube'

Большинство компонентов можно настроить при их создании с различными параметрами. Эти параметры создания называются - `props`.

Ваши собственные компоненты также могут использовать `props`. Это позволяет вам создать один компонент, который будет использоваться во многих разных местах вашего приложения, с немного разными свойствами в каждом месте. Чтобы получить их значения, обратитесь к `props.YOUR_PROP_NAME` в ваших функциональных компонентах или `this.props.YOUR_PROP_NAME` в ваших компонентах класса. Вот пример:

```SnackPlayer name=index.js
import * as React from 'react'
import { Text } from 'react-native'

const HelloWorld = (props) => (
  <Text>Hello {props.name}!</Text>
)

const App = () => (
  <>
    <HelloWorld name='Luk' />
    <HelloWorld name='John' />
    <HelloWorld name='Ivan' />
  </>
)

export default App
```

Использование `name` в качестве `props` позволяет нам настроить компонент приветствия, чтобы мы могли повторно использовать этот компонент для каждого из наших приветствий. В этом примере также используется компонент `HelloWorld` в JSX. Способность делать это - вот что делает React таким крутым.

### Только для чтения

Компонент, объявленный как функция или класс, никогда не должен модифицировать свои свойства `props`. Рассмотрим эту `sum` функцию:

```jsx
const sum = (a, b) => a + b
```

Такие функции называются "чистыми". Потому что они не изменяют свои аргументы и всегда возвращают одинаковый результат для одних и тех же аргументов.

В противоположность им, следующая функция не является чистой, потому что она изменяет свои аргументы:

```jsx
const count => (account, amount) => account += amount
```

React является очень гибким, но он имеет одно строгое правило:

:::tip
Все React-компоненты должны работать как чистые функции в отношении своих свойств `props`.
:::


[![EnglishMoji!](/img/logo/NeuroCoder.png)](https://vk.com/neurocoder)

## Проблемы?

![Problem](https://media.giphy.com/media/xTiTnGeUsWOEwsGoG4/giphy.gif)

Пишите в [Discord](https://discord.gg/6GDAfXn) или телеграмм [чат](https://t.me/jscampapp), а также подписывайтесь на наши [новости](https://t.me/javascriptapp)

<!-- ![JavaScript Camp](/img/bandlink.png) -->

## Вопросы

Как называются параметры создания компонента?

1. `prop`
2. `props`

Компонент, объявленный как функция или класс, никогда не должен модифицировать свои свойства `props`?

1. `true`
2. `false`

Все React-компоненты должны работать как чистые функции в отношении своих свойств `props`?

1. `true`
2. `false`

## Done 

Чтобы узнать, насколько хорошо вы усвоили этот урок, пройдите тест в [мобильном приложении](http://onelink.to/njhc95) нашей школы по этой теме или в [боте Telegram](https://t.me/javascriptcamp_bot).

[![EnglishMoji!](/img/logo/NeuroCoder.png)](https://vk.com/neurocoder)

## Ссылки:

1. [React Native - official website](https://reactnative.dev/docs/tutorial)
2. [Learn React](https://learn-reactjs.ru/basics/components-and-props)

