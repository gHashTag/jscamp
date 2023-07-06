---
id: reactnativestate00
title: MobX
sidebar_label: MobX
---

> Simple scalable state management.

## Introduction

MobX is a field-proven library that makes state management simple and scalable through the transparent application of functional reactive programming (TFRP).

The MobX philosophy is simple:

### Simple 😙

Write minimalist, boilerplate-free code that reflects your intent. Trying to update a record field? Use good old JavaScript assignment. Updating data in an asynchronous process? No special tools are required, the reactivity system will detect all your changes and propagate them to where they are used.

### Optimal rendering effortlessly 🚅

All changes and usage of your data are tracked at runtime, creating a dependency tree that captures all relationships between state and output. This ensures that your state-specific computations, such as React components, are only done when strictly necessary. There is no need to manually optimize components using error prone and suboptimal techniques like memoization and selectors.

### Architectural freedom 🤹🏻‍

MobX is obscure and allows you to manage the state of your application outside of any UI framework. This makes your code independent, portable, and above all, easily testable.

## Installing dependencies

MobX 6 has released a compatible companion package `mobx-react-lite @ 3`, which supports React Hooks and functional components.

We will also install the `nanoid` library for creating unique `id` and a library with the checkbox component `@ react-native-community / checkbox`

```bash npm2yarn
npm install mobx mobx-react-lite nanoid @react-native-community/checkbox
```

## Enabling decorators
To use decorators, follow these steps.

### TypeScript

Include the ExperimentalDecorators compiler option in `tsconfig.json`, or pass it to the compiler as the `--experimentalDecorators` flag. You must target es5 + (es5, es6, ...) using the target parameter or the --target flag.

## React Native

When using c react native the following preset can be used

```bash npm2yarn
npm install @babel/plugin-proposal-decorators
```


```js title="babel.config.js"
module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [['@babel/plugin-proposal-decorators', { legacy: true }]]
}
```

## Concepts

MobX distinguishes between the following three concepts in your application:

- State
- Actions
- Derivations

Let's take a closer look at these concepts below, or alternatively in the introduction to MobX and React Native, where you can interactively dive deeper into these concepts step by step and create a simple Todo list app.

## Define a state and make it observable

State is the data that drives your application. Typically there is a domain-specific state, such as a task list, and a view state, such as the currently selected item. State is like cells in a spreadsheet containing a value.

Store state in any data structure you like: simple objects, arrays, classes, circular data structures, or references. It doesn't matter for MobX to work. Just make sure that any properties you want to change over time are marked as observables so MobX can track them.

Here's a simple example:

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

The `observer` wrapper around the `App` component will automatically detect that rendering depends on the observable `counter.count`, even if this relationship is not explicitly defined. The reactivity system will take care of re-rendering the component when exactly this field is updated in the future.

Each `onPress` event invokes the action `counter.increment()`, `counter.decrement()`, `counter.reset()`, which updates the observed state of `counter.count`. Changes to the observable state are exactly propagated to all computations and side effects of `App` that depend on the changes being made.

This example is shortened with [makeAutoObservable](https://mobx.js.org/api.html#makeautoobservable), with it automatically make properties, objects, arrays, Maps and Sets observable, but we can also demonstrate different concepts more in detail with [makeObservable](https://mobx.js.org/api.html#makeobservable).

![MobX](https://mobx.js.org/assets/flow2.png)

This conceptual picture can be applied to the above example or to any other application using MobX.

## Example ToDo list

### Create store

Create a folder `store`, where we will have the file `todo.js` in which we add the application logic.

```jsx title="src/store/todo.js"
import { makeAutoObservable } from 'mobx'

class Todo {
  // initialize an array of list ToDo objects
  todos = [
    { id: '01', title: 'Hello', completed: false },
    { id: '02', title: 'Hello2', completed: false }
  ]

  // makeAutoObservable makes all properties observable by default
  constructor() {
    makeAutoObservable(this)
  }

  // store in mobx is mutable, so just push a new task into it
  createTodo(todo) {
    console.log(`create`)
    this.todos.push(todo)
  }

  // delete the task by id, the filtered array by id
  deleteTodo(id) {
    console.log(`delete`)
    this.todos = this.todos.filter(todo => todo.id !== id)
  }

  // set the completed task to true or false otherwise
  completeTodo(id) {
    console.log(`complete`)
    this.todos = this.todos.map(todo => (todo.id === id ? { ...todo, completed: !todo.completed } : todo))
  }

}

export default new Todo()
```

### UI layout ToDo list

```jsx title="src/index.js"
import React, { useState } from 'react'
import { View, Text, Button, ScrollView, TextInput } from 'react-native'
import CheckBox from '@react-native-community/checkbox'
import { observer } from 'mobx-react-lite'
import uuid from 'react-native-uuid'
import TodoStore from './store/todo'

// wrap the component in an observer to track changes in the Mobx store
const App = observer(() => {
  // create a hook state for the input
  const [text, setText] = useState('')

  return (
    <ScrollView>
      {/* Create a field for entering the text of the task */ }
      <TextInput style={{ height: 40 }} placeholder="Create" onChangeText={t => setText(t)} defaultValue={text} />
      {/* We create a button for creating a task and on onPress we hang the function for creating an issue in the Mobx store */ }
      <Button title="Add Todo" onPress={() => TodoStore.createTodo({ id: uuid.v4(), title: text })} />
      {/* We create a list of tasks, where we get them from the Mobx store */ }
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
          {/* We create a CheckBox for task execution and on onPress we hang the task execution function in the Mobx store */ }
          <CheckBox value={completed} onValueChange={() => TodoStore.completeTodo(id)} />
          <Text>{title}</Text>
          {/* We create a button for deleting a task and on onPress we put a function for deleting a task in the Mobx store */ }
          <Button title="Delete" onPress={() => TodoStore.deleteTodo(id)} />
        </View>
      ))}
    </ScrollView>
  )
})

export default App
```

 [![EnglishMoji!](/img/logo/englishmoji.png)](https://link-to.app/xvh7Ush9kl)

## Problems?

![Problem](https://media.giphy.com/media/xTiTnGeUsWOEwsGoG4/giphy.gif)

Write to [Discord](https://discord.gg/6GDAfXn) chat.


## Links

- [Mobx](https://mobx.js.org/)
- [Announcing Mobx 6](https://michel.codes/blogs/mobx6)


To see how well you learned this lesson, take the test in our school's [mobile app](http://onelink.to/njhc95) on this topic or in [Telegram bot](https://t.me/javascriptcamp_bot).

[![EnglishMoji!](/img/logo/englishmoji.png)](https://link-to.app/xvh7Ush9kl)

## Done 

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<table>
  <tr>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /> <a href="https://github.com/gHashTag/react-native-village/commits?author=gHashTag" title="Documentation">  💲</a></td>
  </tr>
</table>

[![EnglishMoji!](/img/logo/englishmoji.png)](https://link-to.app/xvh7Ush9kl)
