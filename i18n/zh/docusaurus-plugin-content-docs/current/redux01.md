---
id: redux-01
title: 概念
sidebar_label: 概念
---

## 什么是终极版？

Redux是一个使用称为"操作"的事件管理和更新应用程序状态的库。 它作为需要在整个应用程序中使用的状态集中存储库，规则确保状态只能以可预测的方式更新。 

#### Redux在以下情况下更有用:
* 在应用程序的许多地方都需要大量的应用程序状态
* 随着时间的推移，应用程序的状态会经常更新
* 更新此状态的逻辑可能很复杂
* 该应用程序具有中型或大型代码库，许多人可以在其上工作
## 基本概念

为了让我们更容易理解Redux，我们需要记住这个链。

![redux](https://thumbs.gfycat.com/SociableCraftyAlpaca-max-1mb.gif)

#### 让我们来看看这个方案:
+ State - 驱动我们应用程序的真相之源
+ View - 基于此状态显示的用户界面
+ Actions - 用户界面中发生的操作（可以表示为对象JS)

```js
const addTodoAction = {
  type: 'todos/todoAdded',
  payload: 'Buy milk'
}
```
+ Reducer - 这是一个获取当前状态和操作的函数，然后决定如何在必要时更新状态，并返回一个新状态
+ Store - 应用程序的当前状态所在的对象等等
+ Middlewares - 这是使用任何api的附加功能

## 为什么@reduxjs/toolkit

你可能有一个问题-"为什么我们在这里使用@reduxjs/toolkit，当有像redux，redux-thunk这样的库时？"答案很简单：RTK（Redux ToolKit）是官方推荐的redux库，允许您安装一个依赖项并开始使用状态。 并且还显着减少了您必须编写的代码。 比较这2个做同样事情的片段:

#### Redux库的示例代码:

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

#### RTK代码示例:
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

#### 设立商店:
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

## 短片
[![redux](/img/redux/01.gif)](https://youtu.be/3iNnqtmEgtg)

 > 在这节课中，我们熟悉了Redux的基本概念。


 [![Become a Patron!](/img/logo/patreon.jpg)](https://www.patreon.com/bePatron?u=31769291)