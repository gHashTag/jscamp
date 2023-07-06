---
id: start04
title: Hello world
sidebar_label: Hello world
---

import YouTube from 'react-youtube'

Открываем проект App.js и выпиливаем из него всё не нужное, подсвеченные запятые, точки с запятой. Пишем знаменитый текст “Hello World”, сохраняем и готово!

<YouTube videoId='has8w-mzVSM' />

Вот так в конечном итоге примерно должно выглядеть:

```SnackPlayer
import { Text, AppRegistry } from 'react-native';

const App = (props) => (
  <View>
    <Text>App1</Text>
  </View>
);

AppRegistry.registerComponent('Appname', () => App);
```

[![EnglishMoji!](/img/logo/englishmoji.png)](https://link-to.app/xvh7Ush9kl)
