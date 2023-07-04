---
id: reactnative07
title: Form element - TextInput
sidebar_label: Form element - TextInput
---

import YouTube from 'react-youtube'

## TextInput

`TextInput` - it is the main component that allows the user to enter text. It is the basic component for entering text into an application using the keyboard. Props provides customization options for several features such as autocorrect, auto-capitalization, placeholder text, and various keyboard types such as the numeric keypad. It has an `onChangeText` property that accepts a function called whenever the text changes, and a `onSubmitEditing` property that accepts a function called when the text is submitted. For now, ignore the `useState` hook, it is used to change the state of the application, we will get to know it more in the next series.

```SnackPlayer name=index.js
import React, { useState } from 'react'
import { Text, TextInput, View } from 'react-native'

const PizzaTranslator = () => {
  const [text, setText] = useState('')
  return (
    <View style={{padding: 10}}>
      <TextInput
        style={{height: 40}}
        placeholder="Введите здесь, чтобы перевести!"
        onChangeText={text => setText(text)}
        defaultValue={text}
      />
    </View>
  )
}

export default PizzaTranslator
```

In this example, we keep the text in state because it changes over time.

There are many more things you can do with text input. For example, you can check the text inside while the user is typing. For more detailed examples, see the [TextInput](https://reactnative.dev/docs/textinput) reference documentation.

Entering text is one of the ways the user interacts with the application. Then let's look at a different type of input and see how to handle touches.

## Questions

The main component that allows the user to enter text?

1. Text
2. TextInput
3. Input

What is the name of the component's TextInput property, which takes a function that is called every time the text changes?

1. `onSubmitEditing`
2. `onChange`
3. `onChangeText`

What is the name of the component's TextInput property that accepts a function called when text is sent?

1. `onSubmitEditing`
2. `onChange`
3. `onChangeText`

To see how well you learned this lesson, take the test in the [mobile application](http://onelink.to/njhc95) of our school on this topic or in the [telegram bot](https://t.me/javascriptcamp_bot).

![Sumerian school](/img/app.jpg)

## Links:

1. [React Native](https://reactnative.dev/docs/handling-text-input)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<table>
  <tr>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /> <a href="https://github.com/gHashTag/react-native-village/commits?author=gHashTag" title="Documentation">  💲</a></td>
  </tr>
</table>

[![EnglishMoji!](/img/logo/englishmoji.png)](https://apps.apple.com/kz/app/englishmoji/id6450254885)
