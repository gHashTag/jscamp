---
id: redux-01
title: Концепция
sidebar_label: Концепция
---

## Базовая концепция Redux

Для того чтобы нам легче было понять Redux нам нужно запомнить данную цепочку.

![redux](https://thumbs.gfycat.com/SociableCraftyAlpaca-max-1mb.gif)

И так повторяется до бесконечности раз.

## Видео

[![redux](/img/redux/01.gif)](https://youtu.be/3iNnqtmEgtg)

## Как же познакомиться с Redux?

Можно посетить курс Stephen Grider на сайте Udemy, где он ясно всё объяснил, хоть и на английском языке. Лично я данный курс не рекомендую, ведь там устарел роутер, так же, как и кое-какие фичи. Если вам не понравится наше объяснение, то можете купить его курс.

## Пример

```jsx
const reducer = (state = [], action) => {
if (action.type === 'split_string') {
return action.payload.split(' ')
} else if (action.type === 'add_character') {
return ( ...state, action.payload)
} 

return state
} 

const store = Redux.createStore(reducer)

store.getState()

const action = {
type:'split_string', 
payload: 'asdf'//здесь можно указать произвольные значения, ведь payload является полезной нагрузкой. 
} 

store.dispatch(action)

store.getState()

const action2 = {
type: 'add_character', 
payload: 'a' 
}

store.dispatch(action2)

store.getState()
```

 В данном уроке мы познакомились с базовой концепцией Redux.
 [![Become a Patron!](/img/logo/patreon.jpg)](https://www.patreon.com/bePatron?u=31769291)