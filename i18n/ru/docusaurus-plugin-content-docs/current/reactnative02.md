---
id: reactnative02
title: Базовые компоненты
sidebar_label: Базовые компоненты
---

import YouTube from 'react-youtube'

<YouTube videoId="qM0Du9lZXVI" />

## Text

C этим [компонентом React](https://reactnative.dev/docs/text) для отображения текста мы уже познакомились. `Text` поддерживает вложение, стили и сенсорную обработку.

## Image

[Компонент React](https://reactnative.dev/docs/image) для отображения различных типов изображений, включая сетевые изображения, статические ресурсы, временные локальные изображения и изображения с локального диска.

```SnackPlayer name=index.js
import * as React from 'react'
import { Image } from 'react-native'

const App = () => (
  <Image style={{ width: 100, height: 100 }}
    source={{
      uri: 'https://reactnative.dev/img/tiny_logo.png',
    }}
  />
)

export default App
```

Высота и ширина компонента определяют его размер на экране. Всего существует три способа работы размерами: фиксированные размеры, гибкие размеры, процентные размеры. Подробней о них [здесь](https://reactnative.dev/docs/height-and-width).

## View

Самый фундаментальный компонент для создания пользовательского интерфейса - `View` - контейнер, который поддерживает макет с [flexbox](https://developer.mozilla.org/ru/docs/Learn/CSS/CSS_layout/Flexbox) стилем, некоторой обработкой касаний и элементами управления специальными возможностями.

`View` предназначено для вложения в другие представления и может иметь от 0 до многих дочерних элементов любого типа.

В этом примере создается представление, которое обертывает два поля с цветом и текстовый компонент в строке с заполнением.

```SnackPlayer name=index.js
import * as React from 'react'
import { View, Text } from 'react-native'

const App = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        height: 100,
        padding: 20
      }}
    >
      <View style={{ backgroundColor: "blue", flex: 0.3 }} />
      <View style={{ backgroundColor: "gold", flex: 0.5 }} />
    </View>
  );
};
export default App
```

`View` предназначены для использования с `StyleSheet`, хотя встроенные стили также поддерживаются.

## StyleSheet

С React Native вы стилизуете свое приложение с помощью JavaScript. Все основные компоненты принимают свойство с именем style.

```jsx
<Text style={{ color: 'gold' }}>Hello world!</Text>
```

Имена и значения стилей обычно соответствуют тому, как работает `CSS` в сети, за исключением того, что имена пишутся с использованием верблюжьего регистра, например `backgroundColor`, а не `background-color`.

`style prop` может быть обычным объектом JavaScript. Вы также можете передать массив стилей - последний стиль в массиве имеет приоритет, поэтому вы можете использовать его для наследования стилей.

По мере того как компонент становится более сложным, часто бывает проще использовать `StyleSheet.create` для определения нескольких стилей в одном месте.

```SnackPlayer name=index.js
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const App = () => {
  const { container, red, bigBlue } = styles
  return (
    <View style={container}>
      <Text style={red}>just red</Text>
      <Text style={bigBlue}>just bigBlue</Text>
      <Text style={[bigBlue, red]}>bigBlue, then red</Text>
      <Text style={[red, bigBlue]}>red, then bigBlue</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50
  },
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30
  },
  red: {
    color: 'red'
  }
})

export default App
```

## ActivityIndicator

Отображает круговой индикатор загрузки.

```SnackPlayer name=index.js
import React from "react"
import { ActivityIndicator, StyleSheet, Text, View } from "react-native"

const App = () => (
  <View style={[styles.container, styles.horizontal]}>
    <ActivityIndicator />
    <ActivityIndicator size="large" />
    <ActivityIndicator size="small" color="#0000ff" />
    <ActivityIndicator size="large" color="#00ff00" />
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  }
})

export default App
```

## Композиция компонентов

Компоненты могут ссылаться на другие компоненты в своём выводе (результате отрисовки). Подобно матрешке компоненты вкладываются друг в друга. К примеру, мы можем создать компонент `App`, который отрисовывает компонент `HelloWorld` много раз:

```SnackPlayer name=index.js
import * as React from 'react'
import { Text } from 'react-native'

const HelloWorld = () => (
  <Text>Hello world!</Text>
)

const App = () => (
  <>
    <HelloWorld />
    <HelloWorld />
    <HelloWorld />
  </>
)

export default App
```

Пустые теги `<>...</>` это сокращённая запись объявления [фрагментов](https://ru.reactjs.org/docs/fragments.html). Фрагменты позволяют возвращать несколько элементов из компонента. Являясь своего рода оберткой для группы компонентов. Фрагменты позволяют формировать список дочерних элементов, не создавая лишних узлов в DOM. Возврат списка дочерних элементов из компонента — распространённая практика.


[![EnglishMoji!](/img/logo/englishmoji.png)](https://link-to.app/xvh7Ush9kl)

## Проблемы?

![Problem](https://media.giphy.com/media/xTiTnGeUsWOEwsGoG4/giphy.gif)

Пишите в [Discord](https://discord.gg/6GDAfXn) или телеграмм [чат](https://t.me/jscampapp), а также подписывайтесь на наши [новости](https://t.me/javascriptapp)

![JavaScript Camp](/img/bandlink.png)

## Вопросы

Для отображения текста мы используем компонент:

1. `text`
2. `Text`
3. `h1`

Для отображения различных типов изображений мы используем компонент:

1. `Image`
2. `img`
3. `Imag`

Сколько существует способов работы с размерами в React Native:

1. 1
2. 2
3. 3

Фундаментальный компонент для создания пользовательского интерфейса:

1. `<>`
2. `Text`
3. `View`

`View` не предназначено для вложения в другие представления?

1. `true`
2. `false`

`View` может иметь от 0 до многих дочерних элементов любого типа?

1. `true`
2. `false`

`View` не предназначены для использования с `StyleSheet`?

1. `true`
2. `false`

С React Native вы стилизуете свое приложение с помощью JavaScript. Все основные компоненты принимают свойство с именем `style`?

1. `true`
2. `false`

Имена и значения стилей обычно пишутся в \_\_\_?

1. `UpperCase`
2. `LowerCase`
3. `CamelCase`

Style prop может быть обычным объектом JavaScript, а также можете передать массив стилей?

1. `true`
2. `false`

Компоненты могут ссылаться на другие компоненты в своём выводе (результате отрисовки)?

1. `true`
2. `false`

Пустые теги <>...</> это сокращённая запись объявления компонента `View`?

1. `true`
2. `false`

## Done 

Чтобы узнать, насколько хорошо вы усвоили этот урок, пройдите тест в [мобильном приложении](http://onelink.to/njhc95) нашей школы по этой теме или в [боте Telegram](https://t.me/javascriptcamp_bot).

[![EnglishMoji!](/img/logo/englishmoji.png)](https://link-to.app/xvh7Ush9kl)

## Ссылки:

1. [React Native - official website](https://reactnative.dev/docs/tutorial)
2. [Learn React](https://learn-reactjs.ru/basics/components-and-props)

