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

## Payment

Now you are on a stripped-down version of the site, after subscribing to [Patreon](https://www.patreon.com/javascriptcamp), you will get full access to the training course, as well as access to our server's private channels in [Discord](https://discord.gg/6GDAfXn).

Download our [mobile application](http://onelink.to/njhc95) or get tested in our [JavaScript telegram bot](https://t.me/javascriptcamp_bot), and also subscribe to [our news](https://t.me/javascriptapp).

[![Become a Patron!](/img/logo/patreon.jpg)](https://www.patreon.com/bePatron?u=31769291)


[![Sumerian school](/img/app.jpg)](http://onelink.to/njhc95)

 

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<table>
  <tr>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /> <a href="https://github.com/gHashTag/react-native-village/commits?author=gHashTag" title="Documentation">📖💲</a></td>
  </tr>
</table>

[![Become a Patron!](/img/logo/patreon.jpg)](https://www.patreon.com/bePatron?u=31769291)
