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
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';

export default App = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://reactnative.dev/movies.json')
      .then((response) => response.json())
      .then((json) => setData(json.movies))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? <ActivityIndicator/> : (
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <Text>{item.title}, {item.releaseYear}</Text>
          )}
        />
      )}
    </View>
  );
};

```

В пятой строчке app.json - это название приложения. name - Как называется приложение, displayName - название под иконкой приложения:

```javascript
{
    "name": "stargate",
    "displayName": "stargate"
}
```

[![EnglishMoji!](/img/logo/englishmoji.png)](https://link-to.app/xvh7Ush9kl)
