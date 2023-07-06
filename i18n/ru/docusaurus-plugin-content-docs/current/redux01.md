---
id: redux-01
title: Концепция
sidebar_label: Концепция
---

## Что такое Redux?

Redux — это библиотека для управления и обновления состояния приложения с использованием событий, называемых «действиями». Он служит централизованным хранилищем состояния, которое необходимо использовать во всем приложении, с правилами, гарантирующими, что состояние может обновляться только предсказуемым образом. 

#### Redux более полезен, когда:
* У вас есть большое количество состояния приложения, которое необходимо во многих местах приложения
* Состояние приложения часто обновляется с течением времени
* Логика обновления этого состояния может быть сложной
* Приложение имеет кодовую базу среднего или большого размера, и над ним может работать много людей
## Базовая концепция Redux

Для того чтобы нам легче было понять Redux нам нужно запомнить данную цепочку.

![redux](https://thumbs.gfycat.com/SociableCraftyAlpaca-max-1mb.gif)

#### Давайте рассмотрим эту схему:
+ State - источник правды, который управляет нашим приложением
+ View - Пользовательский интерфейс, который отображается на основе этого состояния
+ Actions - действия, которые происходят в пользовательском интерфейсе(можно представить в виде объекта JS)
```js
const addTodoAction = {
  type: 'todos/todoAdded',
  payload: 'Buy milk'
}
```
+ Reducer - это функция, которая получает текущий state и action, после этого решает как обновить состояние при необходимости, и возвращает новое состояние
+ Store - объект в котором находиться текущее состояние приложения и прочее
+ Middlewares - это дополнительное функции для работы с каким-либо api

## Почему же @reduxjs/toolkit?

У вас может возникнуть вопрос - "Почему мы используем здесь @reduxjs/toolkit, когда есть такие библиотеки как redux, redux-thunk?" Ответ прост: RTK(Redux ToolKit) это официально рекомендованная библиотека redux, которая позволяет установить одну зависимость и начать работать с состоянием. А так же значительно сокращает код, который вам предстоит написать. Сравните эти 2 фрагмента которые выполняют одно и то же:

#### Пример кода библиотеки redux:

```js
const ADD_TODO = 'ADD_TODO'
const TODO_TOGGLED = 'TODO_TOGGLED'

export const addTodo = text => ({
  type: ADD_TODO,
  payload: { text, id: nanoid() }
})

export const todoToggled = id => ({
  type: TODO_TOGGLED,
  payload: id
})

export const todosReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return state.concat({
        id: action.payload.id,
        text: action.payload.text,
        completed: false
      })
    case TODO_TOGGLED:
      return state.map(todo => {
        if (todo.id !== action.payload.id) return todo

        return {
          ...todo,
          completed: !todo.completed
        }
      })
    default:
      return state
  }
}
```

#### Пример кода RTK:
```js
import { createSlice } from '@reduxjs/toolkit'

const todosSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    todoAdded(state, action) {
      state.push({
        id: action.payload.id,
        text: action.payload.text,
        completed: false
      })
    },
    todoToggled(state, action) {
      const todo = state.find(todo => todo.id === action.payload)
      todo.completed = !todo.completed
    }
  }
})

export const { todoAdded, todoToggled } = todosSlice.actions
export default todosSlice.reducer
```

#### Настройка магазина:
```js
import { configureStore } from '@reduxjs/toolkit'
import todosReducer from '../features/todos/todosSlice'
import filtersReducer from '../features/filters/filtersSlice'

export const store = configureStore({
  reducer: {
    todos: todosReducer,
    filters: filtersReducer
  }
})
```

## Видео
[![redux](/img/redux/01.gif)](https://youtu.be/3iNnqtmEgtg)

 > В данном уроке мы познакомились с базовой концепцией Redux.


 [![EnglishMoji!](/img/logo/englishmoji.png)](https://link-to.app/xvh7Ush9kl)