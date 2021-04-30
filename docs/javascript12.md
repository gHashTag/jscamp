---
id: javascript12
title: Block Scope
sidebar_label: Block Scope
---

![@serverSerrverlesskiy](/img/javascript/headers/12.jpg)

Scope is a part of a program within which a variable is available for use. When creating🏗️ `.js` file, we create🏗️ the scope of the whole file to create🏗️ the internal scope , you must declare it with curly braces `{...}`.

![file](https://media.giphy.com/media/3o6Ztk7NosfLVRqcpy/giphy.gif)

```jsx
// First scope
let fruit = 'Banana'
{
  // Second scope
  let fruit = 'Apple'
  {
    // Third scope
    let fruit = 'Lime'
  }
}
```

In this example, we have created🏗️ three variables in different scopes, which have their own version of the `fruit` variable, so no errors🙅‍♂️ occur, but if you try to create🏗️ two variables with the same name in the same scope, an error will occur🙅 ‍♂️.

```jsx
// First scope
let fruit = 'Banana'
{
  // Second scope
  let fruit = 'Apple'
  let fruit = 'Lime' // An error will occur here
}
```

When creating🏗️ various constructs, you also create a scope for that construct, since you use a block of curly braces `{...}`.

```jsx
if (true) {
  // Scope of the conditional operator
}

for (let i = 0; i > 5; i++) {
  // Scope of the cycle
}

function test() {
  // Function scope
}
```

In these examples, each construct has its own scope.

## Global scope

![Global](https://media.giphy.com/media/l0MYPsBLOYyFqSDte/giphy.gif)

When we say global scope, we mean that all other scopes are children of this one. The global scope contains variables that are declared outside all functions and blocks.

```jsx
// Global scope
let fruit = 'Banana'
```

A variable 🔔 created in the global scope is called a `global variable` 🔔. The global variable 🔔 can be used in all child scopes.

```jsx live
function learnFavaScript() {
  // The variable fruit is global
  let fruit = 'Banana'
  function showFruit() {
    // Therefore, we can use it inside a function
    return fruit
  }
  return showFruit()
}
```

## Local scope

![Local](https://media.giphy.com/media/VFwRCi6WKBUk08fliV/giphy.gif)

The local scope contains variables that are declared🗣️ in a specific part of the code📟. For example, variables created inside a loop will be local.

```jsx
for (let i = 0; i > 5; i++) {
  // Variable i is local
}
```

Local variables 🔔 can only be used within the block in which they were declared.

```jsx
function learnFavaScript() {
  function showFruit() {
    // The variable fruit is local
    let fruit = 'Banana'
  }
  // Therefore, we cannot use it outside the function.
  return fruit
}

// ReferenceError: fruit is not defined
```

## Examples

![Math](https://media.giphy.com/media/xT1Ra5h24Eliux3UVq/giphy.gif)

We use two variables 🔔 with the same name in different scopes. The `otherFruit()` function returns a 🔔 `fruit` variable from the scope in which it is initialized as` Lime`

```jsx live
function learnJavaScript() {
  let fruit = 'Banana'
  function otherFruit() {
    let fruit = 'Lime'
    return fruit
  }
  return otherFruit() + ' and ' + fruit
}
```

If we remove `let` from the`otherFruit()`function, then instead of creating a variable 🔔 we overwrite it 🖊️.

```jsx live
function learnJavaScript() {
  let fruit = 'Banana'
  function otherFruit() {
    fruit = 'Lime'
    return fruit
  }
  return otherFruit() + ' and ' + fruit
}
```

What if we try to call a local variable 🔔 in the parent scope? An error occurs due to the fact that we are trying in the global scope to call a variable 🔔, which we did not create.

```javascript
function learnJavaScript() {
  let num
  for (let i = 0; i != 5; i++) {
    num += i
  }
  return i
}

//ReferenceError: i is not defined
```

![Primer](https://media.giphy.com/media/M33UV4NDvkTHa/giphy.gif)

## Denying var

![eye](https://media.giphy.com/media/PKl9JTqnoiKtO/giphy.gif)

In the article [Change](https://react-native-village.github.io/docs/javascript03) we told you that we will not use `var`, this is related to the scope.

1. If in the same scope you create two variables 🔔 with the same name using the keyword `let` or `const`, the interpreter warns us about this by displaying an error.

```jsx
function learnJavaScript() {
  let fruit = 'Banana'
  let fruit = 'Lime'
  return fruit
  // SyntaxError: Identifier 'fruit' has already been declared
}
```

But, if you create variables with the same name with `var`, it will reassign it.

```jsx live
function learnJavaScript() {
  var fruit = 'Banana'
  var fruit = 'Lime'
  return fruit
}
```

Error🙅‍♂️ does not occur, because `var` has overwritten the variable` fruit`

2. Having created a global variable 🔔 with `var`, we can change it from the local scope by creating another variable 🔔 with the same name with `var`. The scope of `var` is limited to either a function or a script.

```jsx live
function learnJavaScript() {
  var fruit = 'Lime'
  {
    var fruit = 'Banana'
  }
  return fruit
}
```

3. Variables 🔔 created with `var` are considered declared from the very beginning of script execution, regardless of where the declaration is located.

```jsx live
function learnJavaScript() {
  fruit = 'Banana'
  var fruit
  return fruit
}
```

4. JavaScript did not have block scopes before ES6. Those. any variable created with the `var` keyword inside a block will be visible outside of it.

```javascript
if (true) {
  var fruit = 'Apple' // the variable will be visible outside the given block
}
console.log(fruit) // "Apple"
```

![javascript](/img/javascript/28.jpg)

```javascript
if (true) {
  let fruit = 'Apple' // the variable will not be visible outside the given block
}
console.log(fruit) // "Apple"
```

![javascript](/img/javascript/29.jpg)

Due to the listed reasons, the developers decided not to use `var`

## Problems?

![Problem](https://media.giphy.com/media/xTiTnGeUsWOEwsGoG4/giphy.gif)

Write to [Discord](https://discord.gg/6GDAfXn) chat.

## Questions:

![Question](https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif)

When do we create the very first scope?

1. When creating a cycle
2. When creating a file
3. When creating a block

When creating a conditional statement, is a new scope created?

1. Yes
2. No

Where is the local variable created?

1. In a certain part of the code
2. Outside of all blocks

In order to understand how much you learned this lesson, take the test in the [mobile application](http://onelink.to/njhc95) of our school on this topic or in our [telegram bot](https://t.me/javascriptcamp_bot).

![Sumerian school](/img/app.jpg)

## Links

1. [JavaScript Scope](https://css-tricks.com/javascript-scope-closures/)
2. [Learn JavaScript](https://learn.javascript.ru/closure)
3. [MDN Web Docs](https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Control_flow_and_error_handling)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr> 
    <td align="center"><a href="https://github.com/IIo3iTiv"><img src="https://avatars1.githubusercontent.com/u/72025062?v=4?s=200" width="200px;" alt=""/><br /><sub><b>IIo3iTiv</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/commits?author=IIo3iTiv" title="Documentation">📖</a></td>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /><a href="#financial-gHashTag" title="Financial">💵</a></td>
    <td align="center"><a href="https://github.com/Resoner2005"><img src="https://avatars1.githubusercontent.com/u/75675814?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Resoner2005</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/issues?q=author%3AResoner2005" title="Bug reports">🐛 🎨 🖋</a></td>
    <td align="center"><a href="https://github.com/Navernoss"><img src="https://avatars0.githubusercontent.com/u/75784137?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Navernoss</b></sub></a><br /><a href="#content-Navernoss" title="Content">🖋 🐛 🎨 </a></td>
  </tr>
  
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

[![Become a Patron!](/img/logo/patreon.jpg)](https://www.patreon.com/bePatron?u=31769291)
