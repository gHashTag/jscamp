---
id: reactnative06
title: Click Events - Buttons
sidebar_label: Click Events - Buttons
---

import YouTube from 'react-youtube'

A surface on the screen that is clicked as an event that triggers a response from the associated action.

## Button

A basic button component that should render well on any platform. Maintains the minimum level of customization.

If this button is not suitable for your application, you can create your own button using [TouchableOpacity](https://reactnative.dev/docs/touchableopacity) or [TouchableWithoutFeedback](https://reactnative.dev/docs/touchablewithoutfeedback). Check out the source code for this button component for inspiration. Or take a look at the wide range of [community made](https://js.coach/?menu%5Bcollections%5D=React%20Native&page=1&query=button) button components .

```SnackPlayer name=index.js
import React from 'react'
import { Button } from 'react-native'

const App = (props) => (
  <Button title="Press me" onPress={() => {}} />
)

export default App
```

## Props

### onPress

A handler to be called when the user clicks the button.

| Type                               |
| ---------------------------------- |
| function([PressEvent](pressevent)) |

### title

The text to display inside the button. On Android, this title will be converted to uppercase.

| Type   |
| ------ |
| string |

For other optional properties see [here](https://reactnative.dev/docs/button#reference)

## Pressable

Since React Native 0.63, introduced a new [Pressable](https://reactnative.dev/docs/pressable) component.
A main component that detects various steps of press interaction on any of its child components. A component that responds to touch from any of its child components.

```jsx
<Pressable onPress={onPressFunction}>
  <Text>I'm pressable!</Text>
</Pressable>
```

`Touchable` components: [Button](https://reactnative.dev/docs/button), [TouchableWithoutFeedback](https://reactnative.dev/docs/touchablewithoutfeedback), [TouchableHighlight](https://reactnative.dev/docs/touchablehighlight), [TouchableOpacity](https://reactnative.dev/docs/touchableopacity), [TouchableWithoutFeedback](https://reactnative.dev/docs/touchablewithoutfeedback)

The `Pressable` and `Touchable` components are very similar. Their main functions are the same for creating interactive text / image and user interaction. Let's compare them!
### Touchable component:

1. It includes styles and effects that do not match platform interactions.
2. It does not support high-quality cross-platform interaction.

### Pressable component:

1. It detects different types of interactions.
2. Its API provides direct access to the current state of the interaction.
3. Its capabilities can be expanded, including hover, blur, focus and more.

Pressable contains many new props and interesting features such as:

1. `delayLongPress`: duration in milliseconds from `onPressIn` to the time `onLongPress` was called.
2. `Hitlop`: sets an extra distance outside the element at which the press can be detected.
3. `onLongPress`: Called if the time after `onPressIn` is more than 370 milliseconds.
4. `pressRetentionOffset`: Additional distance outside the viewport at which a touch is considered a press, before `onPressOut` is triggered.
5. `android_disableSound` (Android): If true, no android sound will play when clicked.
6. `android_ripple` (Android): enables Android ripple effect and configures its properties.

According to the official React Native docs, `Pressable` is preferred over `Touchable` components. The Pressable component offers a more extensive and promising way of handling touch input.
The Pressable component is intended to replace the `Touchable` components.
It's time to start using the `Pressable` component for future applications.

On a `Pressable`- wrapped element:

- `onPressIn` is called when the press is activated.
- `onPressOut` is called when the press gesture is deactivated.

After clicking onPressIn, one of two things will happen:

The person will take their finger off by running `onPressOut` and then `onPress`.
If the person leaves the finger longer than 500 milliseconds before removing it, `onLongPress` is triggered. `onPressOut` will still fire when they remove their finger.

![Pressable](https://reactnative.dev/docs/assets/d_pressable_pressing.svg)

Fingers are not the most accurate tools, and users often accidentally activate the wrong item or miss an activation area. To help, `Pressable` has an additional `HitRect` that you can use to determine how far a touch can be registered from the wrapped element. Presses can be run anywhere on HitRect.

PressRect allows the press to move outside the element and its HitRect, while still being activated and having the right to "press" —imagine slowly moving your finger away from the button you are pressing.

> The touch area never goes beyond the bounds of the parent view, and the Z-index of sibling views always takes precedence when touching two overlapping views.

![Pressable](https://reactnative.dev/docs/assets/d_pressable_anatomy.svg)

### Example

```SnackPlayer name=index.js
import React, { useState } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'

const App = () => {
  const [timesPressed, setTimesPressed] = useState(0)

  let textLog = ''
  if (timesPressed > 1) {
    textLog = timesPressed + 'x onPress'
  } else if (timesPressed > 0) {
    textLog = 'onPress'
  }

  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => {
          setTimesPressed((current) => current + 1)
        }}
        style={({ pressed }) => [
          {
            backgroundColor: pressed
              ? 'rgb(210, 230, 255)'
              : 'white'
          },
          styles.wrapperCustom
        ]}>
        {({ pressed }) => (
          <Text style={styles.text}>
            {pressed ? 'Pressed!' : 'Press Me'}
          </Text>
        )}
      </Pressable>
      <View style={styles.logBox}>
        <Text testID="pressable_press_console">{textLog}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    fontSize: 16
  },
  wrapperCustom: {
    borderRadius: 8,
    padding: 6
  },
  logBox: {
    padding: 20,
    margin: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#f0f0f0',
    backgroundColor: '#f9f9f9'
  }
})

export default App
```

According to the official React Native docs, `Pressable` is preferred over` Touchable` components. A compressible component offers a more expansive and future-proof way to handle touch input.
The Pressable component is intended to replace the `Touchable` components.
It's time to start using the `Pressable` component for future applications.

## Questions

What is the name of the basic button component that should render well on any platform?

1. `Pressable`
2. `Touchable`
3. `Button`

Which component is preferred according to the official React Native docs?

1. `Pressable`
2. `Touchable`
3. `Button`

What is the name of the handler that will be called when the user clicks the button?

1. `Touchable`
2. `onPress`
3. `press`

To see how well you learned this lesson, take the test in the [mobile application](http://onelink.to/njhc95) of our school on this topic or in the [telegram bot](https://t.me/javascriptcamp_bot).

[![EnglishMoji!](/img/logo/englishmoji.png)](https://link-to.app/xvh7Ush9kl)

## Links

1. [React Native](https://reactnative.dev/docs/button)
2. [Pressable vs. Touchable in React Native](https://medium.com/@mahyarmohammadi/react-native-pressable-vs-touchable-5fec6b332f15)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<table>
  <tr>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /> <a href="https://github.com/gHashTag/react-native-village/commits?author=gHashTag" title="Documentation">  💲</a></td>
  </tr>
</table>

[![EnglishMoji!](/img/logo/englishmoji.png)](https://link-to.app/xvh7Ush9kl)
