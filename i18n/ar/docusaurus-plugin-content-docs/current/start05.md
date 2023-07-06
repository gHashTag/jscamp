---
id: start05
title: Point of entry
sidebar_label: Point of entry
---

import YouTube from 'react-youtube'


The file that is first loaded in our application is called index.js, we will get acquainted with it in this tutorial.

<YouTube videoId='Iw8tKp0ALkA' />

index.js allows us to style our app icon:

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

In the fifth line, app.json is the name of the application. name - What is the name of the application, displayName is the name under the application icon:

```javascript
{
    "name": "stargate",
    "displayName": "stargate"
}
```

[![EnglishMoji!](/img/logo/englishmoji.png)](https://link-to.app/xvh7Ush9kl)
