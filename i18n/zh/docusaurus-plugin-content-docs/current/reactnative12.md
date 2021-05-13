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
