---
id: start04
title: Hello world
sidebar_label: Hello world
---

import YouTube from 'react-youtube'


Open the App.js project and cut out everything you don't need, highlighted commas, semicolons. Write the famous text "Hello World", save and you're done!

<YouTube videoId='has8w-mzVSM' />

This is what it should eventually look like:

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
