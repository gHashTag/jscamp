---
id: reactnative00
title: Introduction
sidebar_label: Introduction
---

React Navigation is a popular library for organizing routing and navigation in a React Native application.

This library helps to solve the problem of navigating between different screens and using shared data among different screens.

## Prerequisites
If you're already familiar with JavaScript, React, and React Native, then you can get started quickly with React Navigation! If not, we strongly recommend that you get the basic knowledge first and then come back here when you're done.

Courses that can help you:

- [JavaScript](https://www.jscamp.app/docs/javascript01)
- [React Native](https://www.jscamp.app/docs/reactnative01)

This guide is an extension of the course on [React Native](https://www.jscamp.app/docs/reactnative01)

## Minimum Requirements
React Navigation 6 requires at least response-native@0.63.0. If you are using Expo, your SDK version must be at least 41.

## Installation
Install the required packages to your React Native project:

```bash npm2yarn
npm install @react-navigation/native@next
```

React Navigation consists of some basic utilities that are then used by navigators to create the navigation structure in your application. Don't worry about it now, everything will be clear soon! To get started with the installation, let's also install and configure the dependencies used by most navigators, after which we can move on by starting to write some code.

The libraries we will install now are[`react-native-gesture-handler`](https://github.com/software-mansion/react-native-gesture-handler), [`react-native-reanimated`](https://github.com/software-mansion/react-native-reanimated), [`react-native-screens`](https://github.com/software-mansion/react-native-screens) and [`react-native-safe-area-context`](https://github.com/th3rdwave/react-native-safe-area-context). If you already have these libraries installed and the latest version, you're done! Otherwise, read on.

### Installing dependencies into an Expo managed project

In your project directory, run:

```sh
expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context
```

This will install versions of those libraries that are compatible.

### Installing dependencies into a React Native project

In your project directory, run:

```bash npm2yarn
npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context
```

:::info
After installation, you may receive warnings related to peer dependencies. They are usually caused by the wrong version range listed in some packages. You can safely ignore most of the warnings while your application is being built.
:::

If you are on Mac and developing for iOS, you need to install modules (via Cocoapods) in order to complete the linking.

```sh
npx pod-install ios
```

## Payment

Now you are on a stripped-down version of the site, after subscribing to [Patreon](https://www.patreon.com/javascriptcamp), you will get full access to the training course, as well as access to our server's private channels in [Discord](https://discord.gg/6GDAfXn).

Download our [mobile application](http://onelink.to/njhc95) or get tested in our [JavaScript telegram bot](https://t.me/javascriptcamp_bot), and also subscribe to [our news](https://t.me/javascriptapp).

[![Become a Patron!](/Img/logo/patreon.jpg)](https://www.patreon.com/bePatron?u=31769291)


[![Sumerian school](/img/app.jpg)](http://onelink.to/njhc95)

![JavaScript Camp](/img/bandlink.png)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<table>
  <tr>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /> <a href="https://github.com/gHashTag/react-native-village/commits?author=gHashTag" title="Documentation">📖💲</a></td>
  </tr>
</table>

[![Become a Patron!](/img/logo/patreon.jpg)](https://www.patreon.com/bePatron?u=31769291)
