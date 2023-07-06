---
id: start01
title: React Native init vs Expo
sidebar_label: React Native init vs Expo
---

import YouTube from 'react-youtube'


At the initial stage, you must use one of the starters. The main competing starters are React Native CLI and Expo, taking advantage of one over the other.

<YouTube videoId='r8BG3JPS8LI' />

In the official React Native documentation, from the section [Getting Started](https://reactnative.dev/docs/environment-setup), we learn that we have two ways to launch a mobile application: expo and react-native cli. Windows and Linux users, and most of them, go to the Building Projects with Native Code tab and select Target OS: iOS, they meet an inscription that sends them to the Expo starter, but before putting Expo, I suggest that you read the information in the following table and keep my head not only from those cuffs that I received:

![expo](https://miro.medium.com/max/1400/1*ioOfqLdPgkvvvXsD_W_K0w.png)

If you nevertheless chose Expo, then it is a matter of time that you will face its limitations and want to use native modules, then for this you will have to do detach. From my own experience and from many familiar colleagues I know that detach is done crookedly, which means that you will have to refactor a bunch of mistakes.
For me, Live Reloading in the simulator has become a faithful friend, but in Expo it constantly breaks and it constantly has to be restarted, which makes the development process painful.

Expo is full of dependencies that you personally will not need for the project, but you will have to wait additional time until your JS bundle with extra garbage is collected, and after this garbage Expo will add to your release .apk and .ipa on your mobile devices clients, due to which the application launch time will increase, and with it the application development time increases, since the JS bundle has to be collected very often.

Each native library that you connect yourself in the react-native cli must be checked, since the library is different from the library, and at the same time, on the other hand, third-party libraries are easier to fork, change or even rewrite taking as a basis in your project, in Expo with this explicitly more difficult.

If the Expo components worked with the react-native cli, then there would be no problems, and so I observe a chasm in starter compatibility and the saddest thing is that Expo will start throwing you its additional errors related to its infrastructure.
At Expo, React Native is almost always not the most recent. At the time of this writing, Expo SDK 30.0.0 contains React Native version 0.55.4, and the current one at the moment is 0.57. For example, the debounce function does not work, under Android, in debug mode (debug js remotely enabled) for the TextInput component, which means that you will always lag behind new improvements in the React Native libraries.

Of course, not everyone has the opportunity to buy a Mac, but benchmarking two starters and my 2.5 year experience on both shows that developing an application with react-native cli, even only from Windows on Android, is a better investment in a more professional solution , since React-Native uses the same codebase for iOS and Android.

I hope for your feedback, thanks to which the information in this article will be corrected and supplemented.

[![EnglishMoji!](/img/logo/englishmoji.png)](https://link-to.app/xvh7Ush9kl)
