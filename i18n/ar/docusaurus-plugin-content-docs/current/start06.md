---
id: start06
title: AppRegistry
sidebar_label: AppRegistry
---

import YouTube from 'react-youtube'


The AppRegistry is the JavaScript entry point for running all React Native apps. Application root components must register with AppRegistry.registerComponent (), then the native system can load the package for the application and then launch the application when ready by calling AppRegistry.runApplication ().

<YouTube videoId='IHThgXE5U1c' />

Code Appregistry:

```SnackPlayer
import { Text, AppRegistry } from 'react-native';

const App = (props) => (
  <View>
    <Text>App1</Text>
  </View>
);

AppRegistry.registerComponent('Appname', () => App);
```

[![EnglishMoji!](/img/logo/englishmoji.png)](https://apps.apple.com/kz/app/englishmoji/id6450254885)
