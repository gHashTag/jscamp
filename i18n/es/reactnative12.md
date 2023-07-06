---
id: reactnative12
title: Platform specific code
sidebar_label: Platform specific code
---

import YouTube from 'react-youtube'

When building a cross-platform application, you will want to reuse as much code as possible. There may be scenarios where it makes sense to distinguish between code, for example, you might want to implement separate visual components for Android and iOS.

React Native provides two ways to organize your code and split it across platforms:

- Using the module `Platform`.
- Using file extensions for specific platforms.

Some components may have properties that only work on one platform. All of these props are marked with `@ platform` and have a small icon next to them on the website.

## Platform Module

React Native provides a module that defines the framework on which the application runs. You can use discovery logic to implement platform-specific code. Use this option if only small portions of the component are platform dependent.

```jsx
import { Platform, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  height: Platform.OS === 'ios' ? 200 : 100
})
```

Platform.OS will be ios when running on iOS and android when running on Android.

There is also a Platform.select method available that specifies an object where the keys can be one of the `'ios' | 'android' | 'native' | 'default'` returns the most appropriate value for the platform you are currently working on. That is, if you are using a phone, the `ios` and `android` keys will be preferred. If not specified, the custom key will be used, followed by the `default` key.

```jsx
import { Platform, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...Platform.select({
      ios: {
        backgroundColor: 'red'
      },
      android: {
        backgroundColor: 'green'
      },
      default: {
        // other platforms, web for example
        backgroundColor: 'blue'
      }
    })
  }
})
```

This will cause the container to be `flex: 1` on all platforms, a red background on iOS, a green background on Android, and a blue background on other platforms.

## Platform-specific extensions

If your platform's code is more complex, you should consider splitting your code into separate files. React Native will detect when a file has a `.ios.` extension or a `.android.` extension and load the appropriate framework file from other components as needed.

For example, suppose you have the following files in your project:

```jsx
BigButton.ios.js
BigButton.android.js
```

Then you can require the component like this:

```jsx
import BigButton from './BigButton'
```

React Native will automatically pick the right file based on the platform you're running.

More information [here](https://reactnative.dev/docs/platform-specific-code).

## Questions

How many ways does React Native provide for organizing and separating your code across platforms?

1. 1
2. 2
3. 3

What is the name of the module in React Native that defines the platform on which the application runs?

1. `@platform`
2. `Platform`
3. `platform`

To see how well you learned this lesson, take the test in the [mobile application](http://onelink.to/njhc95) of our school on this topic or in the [telegram bot](https://t.me/javascriptcamp_bot).

![Sumerian school](/img/app.jpg)

## Links:

1. [React Native](https://reactnative.dev/docs/platform-specific-code)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<table>
  <tr>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /> <a href="https://github.com/gHashTag/react-native-village/commits?author=gHashTag" title="Documentation">  💲</a></td>
  </tr>
</table>

[![EnglishMoji!](/img/logo/englishmoji.png)](https://link-to.app/xvh7Ush9kl)
