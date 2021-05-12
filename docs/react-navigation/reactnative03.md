---
id: reactnative03
title: Passing parameters
sidebar_label: Passing parameters
---

Now that we know how to create a stack navigator with some routes and navigate between those routes, let's see how we can pass data to routes when navigating to them.

To do this, implement two steps:

- Pass parameters to the route by placing them in an object as the second parameter of the function `navigation.navigate ('RouteName', {/ * parameters go here * /})`

- Read the parameters in the screen component: `route.params`

:::info
It is recommended that the parameters you pass in are JSON serializable. This way you can use persistence and your screen components have the correct contract to implement [deep linking](https://reactnavigation.org/docs/6.x/deep-linking/).
:::

```jsx {9-18,24,28-29} title="App.js" 
import * as React from 'react'
import { View, Button, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const HomeScreen = ({ navigation }) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Home Screen</Text>
    <Button
      title="Go to Details"
      onPress={() => {
        /* 1. Navigate to the Details route with params */
        navigation.navigate('Details', {
          itemId: 86,
          otherParam: 'anything you want here'
        })
      }}
    />
  </View>
)

const DetailsScreen = ({ route }) => {
  /* 2. Get the param */
  const { itemId, otherParam } = route.params
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>otherParam: {JSON.stringify(otherParam)}</Text>
    </View>
  )
}

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
[Try this example on Snack](https://snack.expo.io/?platform=android&name=Moving%20between%20screens%20%7C%20React%20Navigation&dependencies=%40expo%2Fvector-icons%40*%2C%40react-native-community%2Fmasked-view%40*%2Creact-native-gesture-handler%40*%2Creact-native-pager-view%40*%2Creact-native-paper%40%5E4.7.2%2Creact-native-reanimated%40*%2Creact-native-safe-area-context%40*%2Creact-native-screens%40*%2Creact-native-tab-view%40%5E3.0.0%2C%40react-navigation%2Fbottom-tabs%40%5E6.0.0-next.1%2C%40react-navigation%2Fdrawer%40%5E6.0.0-next.1%2C%40react-navigation%2Fmaterial-bottom-tabs%40%5E6.0.0-next.1%2C%40react-navigation%2Fmaterial-top-tabs%40%5E6.0.0-next.1%2C%40react-navigation%2Fnative%40%5E6.0.0-next.1%2C%40react-navigation%2Fstack%40%5E6.0.0-next.6&hideQueryParams=true&sourceUrl=https%3A%2F%2Freactnavigation.org%2Fexamples%2F6.x%2Fpassing-params.js)

## Payment

Now you are on a stripped-down version of the site, after subscribing to [Patreon](https://www.patreon.com/javascriptcamp), you will get full access to the training course, as well as access to our server's private channels in [Discord](https://discord.gg/6GDAfXn).

Download our [mobile application](http://onelink.to/njhc95) or get tested in our [JavaScript telegram bot](https://t.me/javascriptcamp_bot), and also subscribe to [our news](https://t.me/javascriptapp).

[![Become a Patron!](/Img/logo/patreon.jpg)](https://www.patreon.com/bePatron?u=31769291)


[![Sumerian school](/img/app.jpg)](http://onelink.to/njhc95)

![JavaScript Camp](/img/bandlink.png)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<table>
  <tr>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /> <a href="https://github.com/gHashTag/react-native-village/commits?author=gHashTag" title="Documentation">📖💲</a></td>
  </tr>
</table>

[![Become a Patron!](/img/logo/patreon.jpg)](https://www.patreon.com/bePatron?u=31769291)
