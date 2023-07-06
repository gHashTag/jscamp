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

## Initial parameters
You can also pass some initial parameters to the screen. If you do not specify any parameters when you go to this screen, the initial parameters will be used. They are also shallowly combined with whatever parameters you pass. Initial parameters can be specified using the `initialParams` property:

```jsx
<Stack.Screen
  name="Details"
  component={DetailsScreen}
  initialParams={{ itemId: 42 }}
/>
```

## Transferring parameters to the previous screen
Options are not only useful for transferring some data to the new screen, but they can also be useful for transferring data to the previous screen. For example, suppose you have a screen with a create post button, and the post create button opens a new screen for creating a post. After creating a message, you want to transfer the data for the message back to the previous screen.

To do this, you can use the navigation method `navigate`, which acts like `goBack` if the screen already exists. You can pass parameters using navigation to pass data back:

```jsx title="App.js" 
import * as React from 'react'
import { View, Button, TextInput, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const HomeScreen = ({ navigation, route }) => {
  React.useEffect(() => {
    if (route.params?.post) {
      // Post updated, do something with `route.params.post`
      // For example, send the post to the server
    }
  }, [route.params?.post])

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Create post" onPress={() => navigation.navigate('Details')} />
      <Text style={{ margin: 10 }}>Post: {route.params?.post}</Text>
    </View>
  )
}

const DetailsScreen = ({ navigation }) => {
  const [postText, setPostText] = React.useState('')

  return (
    <>
      <TextInput
        multiline
        placeholder="What's on your mind?"
        style={{ height: 200, padding: 10, backgroundColor: 'white' }}
        value={postText}
        onChangeText={setPostText}
      />
      <Button
        title="Done"
        onPress={() => {
          // Pass params back to home screen
          navigation.navigate('Home', { post: postText })
        }}
      />
    </>
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
import * as React from 'react'
import { View, Button, TextInput, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const HomeScreen = ({ navigation, route }) => {
  React.useEffect(() => {
    if (route.params?.post) {
      // Post updated, do something with `route.params.post`
      // For example, send the post to the server
    }
  }, [route.params?.post])

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Create post" onPress={() => navigation.navigate('Details')} />
      <Text style={{ margin: 10 }}>Post: {route.params?.post}</Text>
    </View>
  )
}

const DetailsScreen = ({ navigation }) => {
  const [postText, setPostText] = React.useState('')

  return (
    <>
      <TextInput
        multiline
        placeholder="What's on your mind?"
        style={{ height: 200, padding: 10, backgroundColor: 'white' }}
        value={postText}
        onChangeText={setPostText}
      />
      <Button
        title="Done"
        onPress={() => {
          // Pass params back to home screen
          navigation.navigate('Home', { post: postText })
        }}
      />
    </>
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

[Try this example on Snack](https://snack.expo.io/?platform=android&name=Configuring%20the%20header%20bar%20%7C%20React%20Navigation&dependencies=%40expo%2Fvector-icons%40*%2C%40react-native-community%2Fmasked-view%40*%2Creact-native-gesture-handler%40*%2Creact-native-pager-view%40*%2Creact-native-paper%40%5E4.7.2%2Creact-native-reanimated%40*%2Creact-native-safe-area-context%40*%2Creact-native-screens%40*%2Creact-native-tab-view%40%5E3.0.0%2C%40react-navigation%2Fbottom-tabs%40%5E6.0.0-next.1%2C%40react-navigation%2Fdrawer%40%5E6.0.0-next.1%2C%40react-navigation%2Fmaterial-bottom-tabs%40%5E6.0.0-next.1%2C%40react-navigation%2Fmaterial-top-tabs%40%5E6.0.0-next.1%2C%40react-navigation%2Fnative%40%5E6.0.0-next.1%2C%40react-navigation%2Fstack%40%5E6.0.0-next.6&hideQueryParams=true&sourceUrl=https%3A%2F%2Freactnavigation.org%2Fexamples%2F6.x%2Fpassing-params-back.js)

Here, after you click "Done", the main screen's `route.params` will be updated to reflect the message text you passed in the navigation.

## Passing parameters to nested navigators

If you have nested navigators, you need to pass parameters a little differently. For example, suppose you have a navigator inside the `Account` screen, and you want to pass parameters to the` Settings` screen inside that navigator. You can pass parameters like this:

```jsx
navigation.navigate('Account', {
  screen: 'Settings',
  params: { user: 'jane' }
})
```


## Done 

To see how well you learned this lesson, take the test in our school's [mobile app](http://onelink.to/njhc95) on this topic or in [Telegram bot](https://t.me/javascriptcamp_bot).

[![EnglishMoji!](/img/logo/englishmoji.png)](https://link-to.app/xvh7Ush9kl)

## Links

[React Navigation](https://reactnavigation.org/docs/6.x/params)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<table>
  <tr>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /> <a href="https://github.com/gHashTag/react-native-village/commits?author=gHashTag" title="Documentation">  💲</a></td>
  </tr>
</table>

[![EnglishMoji!](/img/logo/englishmoji.png)](https://link-to.app/xvh7Ush9kl)
