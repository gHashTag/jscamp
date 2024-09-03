---
id: reactnativestate00
title: MobX
sidebar_label: MobX
---

> Простое масштабируемое управление состоянием.

## Вступление

MobX - это проверенная в боевых условиях библиотека, которая делает управление состоянием простым и масштабируемым за счет прозрачного применения функционального реактивного программирования (TFRP). 

Философия MobX проста:

### Простой 😙

Напишите минималистичный, свободный от шаблонов код, отражающий ваши намерения. Пытаетесь обновить поле записи? Используйте старое доброе присваивание JavaScript. Обновление данных в асинхронном процессе? Никаких специальных инструментов не требуется, система реактивности обнаружит все ваши изменения и распространит их туда, где они используются.

### Оптимальный рендеринг без усилий 🚅

Все изменения и использование ваших данных отслеживаются во время выполнения, создавая дерево зависимостей, которое фиксирует все отношения между состоянием и выводом. Это гарантирует, что вычисления, зависящие от вашего состояния, такие как компоненты React, выполняются только тогда, когда это строго необходимо. Нет необходимости вручную оптимизировать компоненты с помощью подверженных ошибкам и неоптимальных методов, таких как мемоизация и селекторы.

### Архитектурная свобода 🤹🏻‍

MobX малопонятен и позволяет вам управлять состоянием вашего приложения вне любой структуры пользовательского интерфейса. Это делает ваш код независимым, переносимым и, прежде всего, легко тестируемым.

## Устанавливаем зависимости

Вместе с MobX 6 выпущен совместимый сопутствующий пакет `mobx-react-lite@3`, который поддерживает React Hooks и функциональные компоненты.

Также установим библиотеку `nanoid` для создания уникальных `id` и библиотеку c компонентом checkbox `@react-native-community/checkbox`  

```bash npm2yarn
npm install mobx mobx-react-lite nanoid @react-native-community/checkbox
```

## Включение декораторов
Для того чтобы использовать декораторы, выполните следующие действия.

### TypeScript

Включите параметр компилятора ExperimentalDecorators в `tsconfig.json` или передайте его компилятору как флаг `--experimentalDecorators`. Вы должны настроить таргетинг на es5 + (es5, es6, ...) с помощью параметра target или флага --target.

## React Native

При использовании c react native можно использовать следующий пресет 

```bash npm2yarn
npm install @babel/plugin-proposal-decorators
```


```js title="babel.config.js"
module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [['@babel/plugin-proposal-decorators', { legacy: true }]]
}
```

## Концепции

MobX различает следующие три концепции в вашем приложении:

- State(Состояние)
- Actions(Действия)
- Derivations(Производные)

Давайте подробнее рассмотрим эти концепции ниже или, альтернативно, в введении в MobX и React Native, где вы можете в интерактивном режиме глубже погрузиться в эти концепции шаг за шагом и создать простое приложение со списком Todo.

## Определите состояние и сделайте его наблюдаемым

Состояние - это данные, которые управляют вашим приложением. Обычно существует состояние, зависящее от домена, например список задач, и состояние просмотра, такое как текущий выбранный элемент. Состояние похоже на ячейки электронной таблицы, содержащие значение.

Сохраняйте состояние в любой структуре данных, которая вам нравится: простые объекты, массивы, классы, циклические структуры данных или ссылки. Это не имеет значения для работы MobX. Просто убедитесь, что все свойства, которые вы хотите изменить с течением времени, отмечены как наблюдаемые, чтобы MobX мог их отслеживать.

Вот простой пример:

```jsx title="index.js"
import React from 'react'
import { View, Button, Text } from 'react-native'
import { makeAutoObservable } from 'mobx'
import { observer } from 'mobx-react-lite'

class Counter {
  count = 0

  constructor() {
    makeAutoObservable(this)
  }

  increment() {
    this.count += 1
  }

  decrement() {
    this.count -= 1
  }

  reset() {
    this.count = 0
  }
}

const counter = new Counter()

const App = observer(() => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>{counter.count}</Text>
    <Button onPress={() => counter.increment()} title="+" />
    <Button onPress={() => counter.decrement()} title="-" />
    <Button onPress={() => counter.reset()} title="Reset" />
  </View>
))

export default App
```

![couner](/img/state-management/app.png)

Оболочка `observer` вокруг компонента `App` автоматически обнаружит, что рендеринг зависит от наблюдаемого `counter.count`, даже если эта связь не определена явно. Система реактивности позаботится о повторном рендеринге компонента, когда именно это поле будет обновлено в будущем.

Каждое событие `onPress` вызывает действие `counter.increment()`, `counter.decrement()`, `counter.reset()`, которое обновляет наблюдаемое состояние `counter.count`. Изменения наблюдаемого состояния точно распространяются на все вычисления и побочные эффекты `App`, которые зависят от вносимых изменений.

Этот пример сокращен с помощью [makeAutoObservable](https://mobx.js.org/api.html#makeautoobservable), с его помощью автоматически делайте свойства, объекты, массивы, Maps и Sets наблюдаемыми, но мы также можем продемонстрировать различные концепции более подробно с помощью [makeObservable](https://mobx.js.org/api.html#makeobservable).

![MobX](https://mobx.js.org/assets/flow2.png)

Эту концептуальную картину можно применить к приведенному выше примеру или к любому другому приложению, использующему MobX.

## Пример ToDo-лист

### Создаем store

Создаем папку `store`, где у нас будет лежать файл `todo.js` в котором мы складываем логику приложения.

```jsx title="src/store/todo.js"
import { makeAutoObservable } from 'mobx'

class Todo {
  // инициируем массив объектов ToDo листа 
  todos = [
    { id: '01', title: 'Hello', completed: false },
    { id: '02', title: 'Hello2', completed: false }
  ]

  // makeAutoObservable делает все свойства наблюдаемыми по умолчанию
  constructor() {
    makeAutoObservable(this)
  }

  // стор в mobx мутабельный, поэтому просто пушим в него новую задачу
  createTodo(todo) {
    console.log(`create`)
    this.todos.push(todo)
  }

  // удаляем по id задачу, отфильтрованный массив по id 
  deleteTodo(id) {
    console.log(`delete`)
    this.todos = this.todos.filter(todo => todo.id !== id)
  }

  // ставим  true completed выполненной задаче или false в противном случае 
  completeTodo(id) {
    console.log(`complete`)
    this.todos = this.todos.map(todo => (todo.id === id ? { ...todo, completed: !todo.completed } : todo))
  }

}

export default new Todo()
```

### UI слой ToDo листа

```jsx title="src/index.js"
import React, { useState } from 'react'
import { View, Text, Button, ScrollView, TextInput } from 'react-native'
import CheckBox from '@react-native-community/checkbox'
import { observer } from 'mobx-react-lite'
import uuid from 'react-native-uuid'
import TodoStore from './store/todo'

// оборачиваем компонент в observer для отслеживания изменений в сторе Mobx
const App = observer(() => {
  // создаем хух состояния для инпута
  const [text, setText] = useState('')

  return (
    <ScrollView>
      {/* Создаем поле для ввода текста задачи */}
      <TextInput style={{ height: 40 }} placeholder="Create" onChangeText={t => setText(t)} defaultValue={text} />
      {/* Создаем кнопку создания задачи и на onPress вешаем функцию создания задачи в сторе Mobx */}
      <Button title="Add Todo" onPress={() => TodoStore.createTodo({ id: uuid.v4(), title: text })} />
      {/* Создаем список задач, где получаем их из стора Mobx */}
      {TodoStore.todos.map(({ id, title, completed }) => (
        <View
          style={{
            flexDirection: 'row',
            width: 350,
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
          key={id}
        >
          {/* Создаем CheckBox выполнения задачи и на onPress вешаем функцию выполнения задачи в сторе Mobx */}
          <CheckBox value={completed} onValueChange={() => TodoStore.completeTodo(id)} />
          <Text>{title}</Text>
          {/* Создаем кнопку удаления задачи и на onPress вешаем функцию удаления задачи в сторе Mobx */}
          <Button title="Delete" onPress={() => TodoStore.deleteTodo(id)} />
        </View>
      ))}
    </ScrollView>
  )
})

export default App
```

[![EnglishMoji!](/img/logo/NeuroCoder.png)](https://vk.com/neurocoder)

## Проблемы?

![Problem](https://media.giphy.com/media/xTiTnGeUsWOEwsGoG4/giphy.gif)

Пишите в [Discord](https://discord.gg/6GDAfXn) или телеграмм [чат](https://t.me/jscampapp), а также подписывайтесь на наши [новости](https://t.me/javascriptapp)

<!-- ![JavaScript Camp](/img/bandlink.png) -->

## Links

- [Mobx](https://mobx.js.org/)
- [Announcing Mobx 6](https://michel.codes/blogs/mobx6)


Для того чтобы понять, на сколько вы усвоили этот урок, пройдите тест в [мобильном приложении](http://onelink.to/njhc95) нашей школы по этой теме или в нашем [телеграм боте](https://t.me/javascriptcamp_bot).

[![EnglishMoji!](/img/logo/NeuroCoder.png)](https://vk.com/neurocoder)

## Done 

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<table>
  <tr>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /> <a href="https://github.com/gHashTag/react-native-village/commits?author=gHashTag" title="Documentation">  💲</a></td>
  </tr>
</table>

