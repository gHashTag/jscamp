---
id: reactnative02
title: Stack Navigator - Move Between Screens
sidebar_label: Stack Navigator - Move Between Screens
---

In the previous section [Hello React Navigation](https://www.jscamp.app/docs/react-navigation/reactnative01) we defined a stack navigator with two routes `Home` and `Details`, but we didn’t know how to let the user go from `Home` to `Details`.

If it was a web browser, we could write something like this:

```jsx
<a href="details.html">Go to Details</a>
```

```jsx
<a
  onClick={() => {
    window.location.href = 'details.html'
  }}
>
  Go to Details
</a>
```
We'll do something like this, but instead of using the global window window.location we will use the `navigation` property that is passed to our screen components.

## Go to new screen

```jsx {6,9} title="App.js" 
import * as React from 'react'
import { View, Button, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const HomeScreen = ({ navigation }) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Home Screen</Text>
    <Button title="Go to Details" onPress={() => navigation.navigate('Details')} />
  </View>
)

const DetailsScreen = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Details Screen</Text>
  </View>
)

const Stack = createStackNavigator()

const App = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  </NavigationContainer>
)

export default App
```

[Try this example on Snack](https://snack.expo.io/?platform=android&name=Hello%20React%20Navigation%20%7C%20React%20Navigation&dependencies=%40expo%2Fvector-icons%40*%2C%40react-native-community%2Fmasked-view%40*%2Creact-native-gesture-handler%40*%2Creact-native-pager-view%40*%2Creact-native-paper%40%5E4.7.2%2Creact-native-reanimated%40*%2Creact-native-safe-area-context%40*%2Creact-native-screens%40*%2Creact-native-tab-view%40%5E3.0.0%2C%40react-navigation%2Fbottom-tabs%40%5E6.0.0-next.1%2C%40react-navigation%2Fdrawer%40%5E6.0.0-next.1%2C%40react-navigation%2Fmaterial-bottom-tabs%40%5E6.0.0-next.1%2C%40react-navigation%2Fmaterial-top-tabs%40%5E6.0.0-next.1%2C%40react-navigation%2Fnative%40%5E6.0.0-next.1%2C%40react-navigation%2Fstack%40%5E6.0.0-next.6&hideQueryParams=true&sourceUrl=https%3A%2F%2Freactnavigation.org%2Fexamples%2F6.x%2Fnew-screen.js)

Let's deal with this:

- `navigation` - the `navigation` property is passed to each screen component in the stack navigator.
- `navigate ('Details')` - we call the `navigate` function with the name of the route we would like to navigate the user.

:::info
If we call `navigation.navigate` with a route name that we did not define in the navigator, it will throw an error in development assemblies and nothing will happen in production assemblies. In other words, we can only jump to routes that have been defined in our navigator - we cannot jump to an arbitrary component.
:::

## Back button
The header provided by the stack navigator will automatically include a return button when you can return from the active screen. If there is only one screen in the navigation stack, there is nothing to go back to, then there will be no back button.

Sometimes you need to be able to programmatically trigger this behavior, and for that you can use `navigation.goBack()`

```jsx
<Button title="Go back" onPress={() => navigation.goBack()} />
```

## Back to top
Sometimes we need to take the user back several screens at once. This is done using `navigation.popToTop()`

```jsx
<Button title="Go back to first screen in stack" onPress={() => navigation.popToTop()} />
```


## Done ✅

To see how well you learned this lesson, take the test in our school's [mobile app](http://onelink.to/njhc95) on this topic or in [Telegram bot](https://t.me/javascriptcamp_bot).


![Sumerian school](/img/app.jpg)

## Links

[React Navigation](https://reactnavigation.org/docs/6.x/navigating)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<table>
  <tr>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /> <a href="https://github.com/gHashTag/react-native-village/commits?author=gHashTag" title="Documentation">📖💲</a></td>
  </tr>
</table>

[![Become a Patron!](/img/logo/patreon.jpg)](https://www.patreon.com/bePatron?u=31769291)
