---
id: start04
title: Hello world
sidebar_label: Hello world
---

import YouTube from 'react-youtube'

Открываем проект App.js и выпиливаем из него всё не нужное, подсвеченные запятые, точки с запятой. Пишем знаменитый текст “Hello World”, сохраняем и готово!

<YouTube videoId='has8w-mzVSM' />

Вот так в конечном итоге примерно должно выглядеть:

```javascript
import React, {Component} from 'react'
import {StyleSheet, Text, View} from 'react-native'

export default class App extends Component {
    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.welcome}>Hello world!!!</Text>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    }
})
```

[![Become a Patron!](/img/logo/patreon.png)](https://www.patreon.com/bePatron?u=31769291)
