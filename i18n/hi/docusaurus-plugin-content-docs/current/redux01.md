---
id: redux-01
title: Concept
sidebar_label: Concept
---

## What is Redux?

Redux is a library for managing and updating application state using events called "actions". It serves as a centralized repository of state that needs to be used throughout the application, with rules ensuring that state can only be updated in a predictable manner. 

#### Redux is more useful when:
* You have a large amount of application state that is needed in many places of the application
* Application status is updated frequently over time
* The logic of updating this state can be complicated
* The application has a medium or large codebase, and many people can work on it
## The basic concept of Redux

In order to make it easier for us to understand Redux, we need to remember this chain.

![redux](https://thumbs.gfycat.com/SociableCraftyAlpaca-max-1mb.gif)

#### Let's look at this scheme:
+ State is the source of truth that controls our application
+ View - The user interface that is displayed based on this state
+ Actions - actions that occur in the user interface (can be represented as a JS object)
```js
const addTodoAction = {
  type: 'todos/todoAdded',
  payload: 'Buy milk'
}
```
+ A Reducer is a function that gets the current state and action, then decides how to update the state if necessary, and returns a new state
+ Store - the object where the current state of the application is located, and so on
+ Middleware is an additional function for working with any api

## Why @reduxjs/toolkit?

You may have a question - "Why do we use @reduxjs/toolkit here when there are libraries like redux, redux-thunk?" The answer is simple: RTK(Redux ToolKit) is an officially recommended redux library that allows you to install one dependency and start working with the state. And also significantly reduces the code that you have to write. Compare these 2 fragments that do the same thing:

#### Example code of the redux library:

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

#### RTK code example:
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

#### Setting up a store:
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

## Video
[![redux](/img/redux/01.gif)](https://youtu.be/3iNnqtmEgtg)

 > In this lesson, we got acquainted with the basic concept of Redux.


 [![EnglishMoji!](/img/logo/englishmoji.png)](https://link-to.app/xvh7Ush9kl)