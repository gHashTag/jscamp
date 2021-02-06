---
id: start06
title: AppRegistry
sidebar_label: AppRegistry
---

import YouTube from 'react-youtube'

AppRegistry — это точка входа JavaScript для запуска всех приложений React Native. Корневые компоненты приложения должны зарегистрироваться с помощью AppRegistry.registerComponent (), затем собственная система может загрузить пакет для приложения и затем запустить приложение, когда оно будет готово, вызвав AppRegistry.runApplication ().

<YouTube videoId='IHThgXE5U1c' />

Код Appregistry:

```SnackPlayer
import { Text, AppRegistry } from 'react-native';

const App = (props) => (
  <View>
    <Text>App1</Text>
  </View>
);

AppRegistry.registerComponent('Appname', () => App);
```

[![Become a Patron!](/img/logo/patreon.jpg)](https://www.patreon.com/bePatron?u=31769291)
