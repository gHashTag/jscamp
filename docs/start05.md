---
id: start05
title: Точка входа
sidebar_label: Точка входа
---

import YouTube from 'react-youtube'

Файл, который первый загружается в нашем приложении называется index.js с ним мы и познакомимся в этом уроке.

<YouTube videoId='Iw8tKp0ALkA' />

index.js позволяет нам стилизовать нашу иконку прложения:

```SnackPlayer
/* @format */

import {AppRegistry} from 'react-native'
import App from './App'
import App from './app.json'

AppRegistry.registerComponent(appName, () => App)

```

В пятой строчке app.json - это название приложения. name - Как называется приложение, displayName - название под иконкой приложения:

```javascript
{
    "name": "stargate",
    "displayName": "stargate"
}
```
[![Become a Patron!](/img/logo/patreon.png)](https://www.patreon.com/bePatron?u=31769291)
