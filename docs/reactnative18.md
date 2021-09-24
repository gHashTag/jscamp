---
id: reactnative18
title: Debugging
sidebar_label: Debugging
---

import YouTube from 'react-youtube'

## Accessing the developer menu in the app

You can access the developer menu by shaking your device or by choosing Shake Gesture from the Hardware menu in the iOS simulator. You can also use the keyboard shortcut `⌘D` when your application is running in the iOS simulator, or `⌘M` when it is running in the Android emulator on Mac OS, and `Ctrl + M` on Windows and Linux. Alternatively for Android, you can run the command `adb shell input keyevent 82` to open the developer menu (82 is the menu key code).

![debug](https://reactnative.dev/assets/images/DeveloperMenu-f22b01f374248b3242dfb3a1017f98a8.png)

> The developer menu is disabled in release (production) builds.

## Enabling Fast Refresh - Fast Refresh

`Fast Refresh` is a React Native feature that allows you to get almost instant feedback on changes to your React components. When debugging, it can be helpful to enable fast refresh. Fast Refresh is enabled by default, and you can toggle `Enable Fast Refresh` in the React Native developer menu. If enabled, most of your edits should be visible within a second or two.

## Enabling keyboard shortcuts

React Native supports several keyboard shortcuts in the iOS simulator. They are described below. To enable them, open the Hardware menu, select `Keyboard` and make sure the `Connect Hardware Keyboard` checkbox is checked.

## React Developer Tools

You can use the standalone version of React Developer Tools to debug your React component hierarchy. To use it, install the `react-devtools` package globally:

```bash npm2yarn
npm install -g react-devtools
```

Now run `react-devtools` from the terminal to start the standalone DevTools application:

```bash
react-devtools
```

It should connect to your simulator within seconds.

![react-devtools](https://reactnative.dev/assets/images/ReactDevTools-46f5369dca7c5f17b9e2390e76968d56.png)

## Integration with React Native Inspector

Open the developer menu in the application and select `Toggle Inspector`. An overlay will appear that will allow you to click on any element of the user interface and view information about it:

![React Native Inspector](https://reactnative.dev/assets/images/Inspector-4bd1342086bcd964bbd7f82e453743a7.gif)

However, when react-devtools is running, the Inspector will go into minimized mode and instead use DevTools as its main user interface. In this mode, clicking on anything in the simulator will bring up the corresponding components in DevTools:

![react-devtools](https://reactnative.dev/assets/images/ReactDevToolsInspector-fb13d6cdad3479437715a25e038cf6f6.gif)

You can choose "Toggle Inspector" from the same menu to exit this mode.

You can always read more about debugging mode [here](https://reactnative.dev/docs/debugging).

## React Native Debugger

Another option is to download [React Native Debugger](https://github.com/jhen0409/react-native-debugger), which I personally like better.

![React Native Debugger](https://user-images.githubusercontent.com/3001525/29451479-6621bf1a-83c8-11e7-8ebb-b4e98b1af91c.png)

## Questions

A React Native feature that allows you to get almost instant feedback on changes to your React components?

1. `Toggle Inspector`
2. `Fast Refresh`
3. `Fast fresh`

What is the name of the standalone version of the React component debugging tool?

1. `Toggle Inspector`
2. `Tools Inspector`
3. `react-devtools`

To see how well you learned this lesson, take the test in the [mobile application](http://onelink.to/njhc95) of our school on this topic or in the [telegram bot](https://t.me/javascriptcamp_bot).

![Sumerian school](/img/app.jpg)

## Links:

1. [React Native](https://reactnative.dev/docs/debugging)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<table>
  <tr>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /> <a href="https://github.com/gHashTag/react-native-village/commits?author=gHashTag" title="Documentation">📖💲</a></td>
  </tr>
</table>

[![Become a Patron!](/img/logo/patreon.jpg)](https://www.patreon.com/bePatron?u=31769291)
