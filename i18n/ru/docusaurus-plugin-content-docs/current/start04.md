---
id: start04
title: Hello world
sidebar_label: Hello world
---

import YouTube from 'react-youtube'

Открываем проект App.js и выпиливаем из него всё не нужное, подсвеченные запятые, точки с запятой. Пишем знаменитый текст “Hello World”, сохраняем и готово!

<YouTube videoId='has8w-mzVSM' />

Вот так в конечном итоге должно выглядеть:

```SnackPlayer name=index.js
import * as React from 'react'
import { Text } from 'react-native'

const App = () => (
  <Text>Hello world</Text>
)

export default App
```

[![Become a Patron!](/img/logo/patreon.jpg)](https://www.patreon.com/bePatron?u=31769291)
