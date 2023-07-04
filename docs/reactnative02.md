---
id: reactnative02
title: Basic components
sidebar_label:  Basic components
---

import YouTube from 'react-youtube'

## Text

We've already seen this [React component](https://reactnative.dev/docs/text) for displaying text. `Text` supports nesting, styling and touch processing.

## Image

[React Component](https://reactnative.dev/docs/image) for displaying various types of images, including network images, static resources, temporary local images, and images from local disk.

```SnackPlayer name=index.js
import * as React from 'react'
import { Image } from 'react-native'

const App = () => (
  <Image style={{ width: 100, height: 100 }}
    source={{
      uri: 'https://reactnative.dev/img/tiny_logo.png',
    }}
  />
)

export default App
```

The height and width of a component determine its size on the screen. There are three ways to work with sizes: fixed sizes, flexible sizes, percentage sizes. More details about them [here](https://reactnative.dev/docs/height-and-width).

## View

The most fundamental component for building a UI is `View` - a container that supports layout with [flexbox](https://developer.mozilla.org/en/docs/Learn/CSS/CSS_layout/Flexbox) styling, some touch handling and accessibility controls.

`View` is intended to be nested within other views and can have 0 to many children of any type.

This example creates a view that wraps two boxes with color and a text component on a row with padding.

```SnackPlayer name=index.js
import * as React from 'react'
import { View, Text } from 'react-native'

const App = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        height: 100,
        padding: 20
      }}
    >
      <View style={{ backgroundColor: "blue", flex: 0.3 }} />
      <View style={{ backgroundColor: "gold", flex: 0.5 }} />
    </View>
  );
};
export default App
```

`View` are intended to be used with `StyleSheet`, although inline styles are also supported.

## StyleSheet

With React Native, you style your app with JavaScript. All core components accept a property named style.

```jsx
<Text style={{ color: 'gold' }}>Hello world!</Text>
```

The style names and values usually correspond to how `CSS` works on the web, except that the names are written in camel-case, such as `backgroundColor` rather than `background-color`.

The style prop can be a regular JavaScript object. You can also pass in an array of styles - the last style in the array takes precedence, so you can use it to inherit styles.

As the component gets more complex, it is often easier to use `StyleSheet.create` to define multiple styles in one place.

```SnackPlayer name=index.js
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const App = () => {
  const { container, red, bigBlue } = styles
  return (
    <View style={container}>
      <Text style={red}>just red</Text>
      <Text style={bigBlue}>just bigBlue</Text>
      <Text style={[bigBlue, red]}>bigBlue, then red</Text>
      <Text style={[red, bigBlue]}>red, then bigBlue</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50
  },
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30
  },
  red: {
    color: 'red'
  }
})

export default App
```

## ActivityIndicator

Displays a circular loading indicator.

```SnackPlayer name=index.js
import React from "react"
import { ActivityIndicator, StyleSheet, Text, View } from "react-native"

const App = () => (
  <View style={[styles.container, styles.horizontal]}>
    <ActivityIndicator />
    <ActivityIndicator size="large" />
    <ActivityIndicator size="small" color="#0000ff" />
    <ActivityIndicator size="large" color="#00ff00" />
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  }
})

export default App
```

## Component composition

Components can refer to other components in their output (rendered result). Like a nesting doll, the components are nested within each other. For example, we can create an `App` component that renders the `HelloWorld` component many times:

```SnackPlayer name=index.js
import * as React from 'react'
import { Text } from 'react-native'

const HelloWorld = () => (
  <Text>Hello world!</Text>
)

const App = () => (
  <>
    <HelloWorld />
    <HelloWorld />
    <HelloWorld />
  </>
)

export default App
```

Empty tags `<> ... </>` are shorthand for declaration of [fragments](https://reactjs.org/docs/fragments.html). Fragments allow you to return multiple items from a component. It is a kind of wrapper for a group of components. Fragments allow you to form a list of child elements without creating unnecessary nodes in the DOM. Returning a list of children from a component is a common practice.

## Questions

To display the text, we use the component:

1. `text`
2. `Text`
3. `h1`

To display different types of images, we use the component:

1. `Image`
2. `img`
3. `Imag`

How many ways to work with dimensions in React Native:

1. 1
2. 2
3. 3

Fundamental component for creating a user interface:

1.` <> `
2.` Text`
3.` View`

`View` is not meant to be nested within other views?

1. `true`
2. `false`

`View` can have 0 to many children of any type?

1. `true`
2. `false`

Are `View` not meant to be used with `StyleSheet`?

1. `true`
2. `false`

With React Native, you style your app with JavaScript. Do all core components accept a property named `style`?

1. `true`
2. `false`

Style names and values ​​are usually written in \_\_\_?

1. `UpperCase`
2. `LowerCase`
3. `CamelCase`

Style prop can be a regular JavaScript object and can also pass an array of styles?

1. `true`
2. `false`

Components can refer to other components in their output (rendered result)?

1. `true`
2. `false`

Empty tags `<> ... </>` is this shorthand for declaring a `View` component?

1. `true`
2. `false`

To see how well you learned this lesson, take the test in the [mobile application](http://onelink.to/njhc95) of our school on this topic or in the [telegram bot](https://t.me/javascriptcamp_bot).

[![EnglishMoji!](/img/logo/englishmoji.png)](https://apps.apple.com/kz/app/englishmoji/id6450254885)

## Links:

1. [React Native - official website](https://reactnative.dev/docs/tutorial)
2. [Learn React](https://learn-reactjs.ru/basics/components-and-props)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<table>
  <tr>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /> <a href="https://github.com/gHashTag/react-native-village/commits?author=gHashTag" title="Documentation">📖💲</a></td>
  </tr>
</table>

[![EnglishMoji!](/img/logo/englishmoji.png)](https://apps.apple.com/kz/app/englishmoji/id6450254885)
