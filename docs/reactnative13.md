---
id: reactnative13
title: React Native init vs Expo
sidebar_label: React Native init vs Expo
---

import YouTube from 'react-youtube'

At the initial stage, you must use one of the starters. The main competing starters are React Native CLI and Expo, taking advantage of one over the other.


In the official React Native documentation, from the [Getting Started](https://reactnative.dev/docs/environment-setup) section , we learn that we have two ways to launch a mobile app: `expo` and `react-native cli`. Windows and Linux users, and most of them, go to the Building Projects with Native Code tab and select Target OS: iOS, they encounter an inscription that sends them to the Expo starter, but before putting Expo, I suggest you read the information in the following table:

| Name       | react-native init           | Expo  |
| ------------- |:-------------:| -----:|
| You can add your own modules written in Java / Objective-C | Yes | No |
| Weight of a standard Hello World application | 5mb | 25mb |
| Requires Android Studio and X-Code to run projects | Yes | No |
| Fonts need to be imported manually in X-Code | Yes | No |
| Provides JS API out of the box like Push-Notification, Asset Manager | No | Yes |
| You can use libraries that use native code in Objective-C / Java | Yes | No |
| Application sharing (via QR code or link) | No | Yes |

If you nevertheless chose Expo, then it is a matter of time that you will encounter its limitations and want to use native modules, then for this you will have to do detach. From my own experience and from many familiar colleagues, I know that detach is done crookedly, which means that you will have to refactor a bunch of mistakes.
For me, Live Reloading in the simulator has become a faithful friend, but in Expo it constantly breaks and it constantly has to be restarted, which makes the development process painful.

Expo is full of dependencies that you personally will not need for the project, but you will have to wait additional time until your JS bundle with excess garbage is collected, and after this garbage Expo will add to your release .apk and .ipa on your mobile devices. clients, due to which the application launch time will increase, and along with it, the application development time increases, since the JS bundle has to be collected very often.

Each native library that you connect yourself in the react-native cli must be checked, since the library is different from the library, and at the same time, on the other hand, third-party libraries are easier to fork, change or even rewrite taking as a basis in your project, in Expo with this explicitly more difficult.

If the Expo components would work with the react-native cli, then there would be no problems, and so I observe a chasm in starter compatibility and the saddest thing is that Expo will start throwing you its additional errors related to its infrastructure.
At Expo, React Native is almost always not the freshest version. At the time of this writing, Expo SDK 30.0.0 contains the React Native version 0.55.4, and the current one at the moment is 0.57. For example, the debounce function does not work, on Android, in debug mode (debug js remotely enabled) for the TextInput component, which means that you will always lag behind new improvements in the React Native libraries.

Of course, not everyone has the opportunity to buy a Mac, but benchmarking two starters and my 2.5 year experience with both shows that developing an application with react-native cli, even only from Windows on Android, is a better investment in a more professional solution. since React-Native uses the same codebase for iOS and Android.

I hope for your feedback, thanks to which the information in this article will be corrected and supplemented.

It's time to put React Native Cli on your computer and move from theory to practice.

## Questions

What is the preferred React Native starter?

1. Expo
2. React Native Cli

To see how well you learned this lesson, take the test in the [mobile application](http://onelink.to/njhc95) of our school on this topic or in the [telegram bot](https://t.me/javascriptcamp_bot).

[![EnglishMoji!](/img/logo/englishmoji.png)](https://link-to.app/xvh7Ush9kl)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<table>
  <tr>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /> <a href="https://github.com/gHashTag/react-native-village/commits?author=gHashTag" title="Documentation">  💲</a></td>
  </tr>
</table>

[![EnglishMoji!](/img/logo/englishmoji.png)](https://link-to.app/xvh7Ush9kl)
