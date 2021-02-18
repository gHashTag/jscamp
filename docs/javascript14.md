---
id: javascript14
title: Regular expressions
sidebar_label: Regular expressions
---

![@serverSerrverlesskiy](/img/javascript/headers/13.jpg)

Regular expressions are a formal language for searching and manipulating strings in a text based on the use of metacharacters.

Regular expressions allow you to:

- Search for text in a string
- Replace substrings in a string
- Extract information from a string

![search](https://media.giphy.com/media/l46Cy1rHbQ92uuLXa/giphy.gif)

JavaScript, along with Perl, is one of the programming languages in which regular expression support is built directly into the language.

## Difficulty to use

![the complexity of using](https://media.giphy.com/media/5XYsIwzY00ONq/giphy.gif)

The disadvantage of regular expressions is that they often look strange and even intimidating. This is especially true for more complex templates.

```jsx
let regExp = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
```

## Defining regular expressions

![search](https://media.giphy.com/media/RMwYOO5e8pr1lhL8K7/giphy.gif)

The definition of a regular expression is the creation of a template on the basis of which work with strings will take place. In JavaScript, regular expressions are an object that can be defined in two ways.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
defaultValue="literal"
values={[
{label: 'Literal', value: 'literal'},
{label: 'Construction', value: 'construction'},
]
}>
<TabItem value="literal">

Defining regular expressions using literals. For regular expressions, slashes `/ ... /` are literals, they play the same role as the parentheses `` ... '' when creating strings.

```jsx
let regExp = /pattern/
```

If you decide to create regular expressions using literals, then it should be borne in mind that this method of creation _does not allow dynamic changes_ in the specified values. This is due to the fact that regular expression literals cause _precompilation_ when the script is parsed.

  </TabItem>
  
  <TabItem value="construction">

Defining regular expressions using a constructor.

```jsx
let regExp = new RegExp('pattern')
```

The compilation of the regular expression created🏗️ using the constructor occurs at the time of the script execution. This way of creating is worth using if your regular expression is being created созда from a dynamically generated string.

  </TabItem>
</Tabs>

## Using

![pressing the button](https://media.giphy.com/media/12hhLP67q6PqCs/giphy.gif)

Let's look at the use of regular expressions using an example:

```jsx
let regExp = /banana/
```

With this code📟 we have created🏗️ a simple regular expression that searches for the string `banana`. To test a regular expression, you can use the `.test(string)` method, the result of the method is a `boolean` value.

```jsx live
function learnJavaScript() {
  let regExp = /banana/,
    str = 'fanana ranana banana'
  return regExp.test(str) ? 'Yes' : 'No'
}
```

In the example, the regular expression looks for the substring `banana` in the string` str`.

## Anchors

![anchor](https://media.giphy.com/media/3ohze1LSWrEGCML02Y/giphy.gif)

Anchors tie a pattern to the beginning or end of a line. To bind to the beginning of a line, use `^`, and to the end, use `$`.

```jsx live
function learnJavaScript() {
  let regExp = /^banana/,
    str = 'lime banana orange'
  return regExp.test(str) ? 'Yes' : 'No'
}
```

Using this pattern `/ banana /` you will search for `banana` in the whole line. If you need to check for a complete match of a string with a template, you need to use the anchors `/ ^ banana $ /`. The `.test ()` method will return `true` ✅ only if the whole line is` banana`.

## Flags

![Flag](https://media.giphy.com/media/ihRmRCxJuIi3pCORTL/giphy.gif)

Flags are used to enhance regular expression searches.

- `g` - when searching, searches for all matches;
- `i` - search does not depend on case`[Z-z]`;
- `m` - multi-line mode;
- `s` - turns on the **dotall** mode, in which the dot` .` can match a line feed character;
- `y` - searches starting from the character that is at the position of the ** lastindex **property** of the current regular expression;
- `u` - enables **Unicode** support.

Using flags in different ways to create a regular expression pattern

<Tabs
defaultValue="literal"
values={[
{label: 'Literal', value: 'literal'},
{label: 'Construction', value: 'construction'},
]
}>
<TabItem value="literal">

```jsx
let regExp = /pattern/anchor // prettier-ignore
```

Please note that the flags are **integral part** of the regular expression. Flags cannot be added or removed later. Also flags can be combined.

```jsx live
function learnJavaScript() {
  let regExp = /banana/i,
    str = 'faNana RanaNA BaNanA'
  return regExp.test(str) ? 'Yes' : 'No'
}
```

Try removing the `i` flag from the example.
</TabItem>
<TabItem value="construction">

```jsx
let regExp = new RegExp('pattern', 'anchor')
```

Please note that the flags are **integral part** of the regular expression. Flags cannot be added or removed later. Also flags can be combined.

```jsx live
function learnJavaScript() {
  let regExp = new RegExp('banana', 'i'),
    str = 'faNana RanaNA BaNanA'
  return regExp.test(str) ? 'Yes' : 'No'
}
```

Try removing the `i` flag from the example. The search is now case sensitive.
</TabItem>
</Tabs>

## Total

The topic is very extensive and rarely used by us in development, so if you're interested, you can get acquainted with it in more detail [here,](https://learn.javascript.ru/regular-expressions) [here](https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Regular_Expressions)[and here.](https://tuhub.ru/frontend/js-regexp)

## Problems?

![Problem](https://media.giphy.com/media/xTiTnGeUsWOEwsGoG4/giphy.gif)

Channel in [Discord](https://discord.gg/6GDAfXn) after paying on [Patreon](https://www.patreon.com/javascriptcamp).

## Questions:

![Question](https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif)

What are regular expressions for?

1. Creation of templates
2. String manipulation
3. Editing strings

What character is used to literally create a regular expression?

1. Slash `/`
2. Backslash `\`
3. Square brackets `[]`

What is the way to create a regular expression that does not allow further dynamic changes to the given values?

1. In literal
2. In the constructor
3. With any method, dynamic change is permissible

In order to understand how much you learned this lesson, take the test on the [mobile application](http://onelink.to/njhc95) of our school on this topic.

![Sumerian school](/img/app.png)

## Links

1. [Learn JavaScript](https://learn.javascript.ru/regular-expressions)
2. [MDN Web Docs](https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Regular_Expressions)
3. [JS RegExp](https://tuhub.ru/frontend/js-regexp)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<table>
  <tr> 
    <td align="center"><a href="https://github.com/IIo3iTiv"><img src="https://avatars1.githubusercontent.com/u/72025062?v=4?s=200" width="200px;" alt=""/><br /><sub><b>IIo3iTiv</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/commits?author=IIo3iTiv" title="Documentation">📖</a></td>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /><a href="#financial-gHashTag" title="Financial">💵</a></td>
    <td align="center"><a href="https://github.com/Resoner2005"><img src="https://avatars1.githubusercontent.com/u/75675814?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Resoner2005</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/issues?q=author%3AResoner2005" title="Bug reports">🐛 🎨 🖋</a></td>
    <td align="center"><a href="https://github.com/Navernoss"><img src="https://avatars0.githubusercontent.com/u/75784137?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Navernoss</b></sub></a><br /><a href="#content-Navernoss" title="Content">🖋 🐛 🎨 </a></td>
  </tr>
  
</table>

[![Become a Patron!](/img/logo/patreon.jpg)](https://www.patreon.com/bePatron?u=31769291)
