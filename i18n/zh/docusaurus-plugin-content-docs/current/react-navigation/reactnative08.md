---
id: reactnative08
title: Drawer navigator
sidebar_label: Drawer navigator
---

A common navigation pattern is to use the Drawer on the left (sometimes right) side to navigate between screens.


<div style={{ display: 'flex', margin: '16px 0' }}>
  <video playsInline autoPlay muted loop>
    <source src="https://reactnavigation.org/assets/navigators/drawer/drawer.mov" />
  </video>
</div>

Before proceeding, first install `@react-navigation/drawer`:

```bash npm2yarn
npm install @react-navigation/drawer
```

## A minimal example of Drawer based navigation
To use this Drawer, import it from `@response-navigation/drawer`: (swipe right to open)

```jsx
import * as React from 'react'
import { Button, View } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'

const HomeScreen = ({ navigation }) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Button onPress={() => navigation.navigate('Notifications')} title="Go to notifications" />
  </View>
)

const NotificationsScreen = ({ navigation }) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Button onPress={() => navigation.goBack()} title="Go back home" />
  </View>
)

const Drawer = createDrawerNavigator()

const App = () => (
  <NavigationContainer>
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Notifications" component={NotificationsScreen} />
    </Drawer.Navigator>
  </NavigationContainer>
)

export default App
```

[Try this example on Snack](https://snack.expo.io/?platform=android&name=Tab%20navigation%20%7C%20React%20Navigation&dependencies=%40expo%2Fvector-icons%40*%2C%40react-native-community%2Fmasked-view%40*%2C%40react-navigation%2Fbottom-tabs%40%5E5.8.0%2C%40react-navigation%2Fdrawer%40%5E5.9.0%2C%40react-navigation%2Fmaterial-bottom-tabs%40%5E5.2.16%2C%40react-navigation%2Fmaterial-top-tabs%40%5E5.2.16%2C%40react-navigation%2Fnative%40%5E5.7.3%2C%40react-navigation%2Fstack%40%5E5.9.0%2Creact-native-paper%40%5E4.0.1%2Creact-native-reanimated%40*%2Creact-native-safe-area-context%40*%2Creact-native-gesture-handler%40*%2Creact-native-screens%40*%2Creact-native-tab-view%40%5E2.15.1&hideQueryParams=true&sourceUrl=https%3A%2F%2Freactnavigation.org%2Fexamples%2F5.x%2Fdrawer-based-navigation.js)

## Opening and Closing Drawer
Use the following helpers to open and close Drawer:

```jsx
navigation.openDrawer()
navigation.closeDrawer()
```

[Try this example on Snack](https://snack.expo.io/?platform=android&name=Tab%20navigation%20%7C%20React%20Navigation&dependencies=%40expo%2Fvector-icons%40*%2C%40react-native-community%2Fmasked-view%40*%2C%40react-navigation%2Fbottom-tabs%40%5E5.8.0%2C%40react-navigation%2Fdrawer%40%5E5.9.0%2C%40react-navigation%2Fmaterial-bottom-tabs%40%5E5.2.16%2C%40react-navigation%2Fmaterial-top-tabs%40%5E5.2.16%2C%40react-navigation%2Fnative%40%5E5.7.3%2C%40react-navigation%2Fstack%40%5E5.9.0%2Creact-native-paper%40%5E4.0.1%2Creact-native-reanimated%40*%2Creact-native-safe-area-context%40*%2Creact-native-gesture-handler%40*%2Creact-native-screens%40*%2Creact-native-tab-view%40%5E2.15.1&hideQueryParams=true&sourceUrl=https%3A%2F%2Freactnavigation.org%2Fexamples%2F5.x%2Fdrawer-open-close-toggle.js)

If you want to switch Drawer, you call the following:

```jsx
navigation.toggleDrawer()
```

[Try this example on Snack](https://snack.expo.io/?platform=android&name=Tab%20navigation%20%7C%20React%20Navigation&dependencies=%40expo%2Fvector-icons%40*%2C%40react-native-community%2Fmasked-view%40*%2C%40react-navigation%2Fbottom-tabs%40%5E5.8.0%2C%40react-navigation%2Fdrawer%40%5E5.9.0%2C%40react-navigation%2Fmaterial-bottom-tabs%40%5E5.2.16%2C%40react-navigation%2Fmaterial-top-tabs%40%5E5.2.16%2C%40react-navigation%2Fnative%40%5E5.7.3%2C%40react-navigation%2Fstack%40%5E5.9.0%2Creact-native-paper%40%5E4.0.1%2Creact-native-reanimated%40*%2Creact-native-safe-area-context%40*%2Creact-native-gesture-handler%40*%2Creact-native-screens%40*%2Creact-native-tab-view%40%5E2.15.1&hideQueryParams=true&sourceUrl=https%3A%2F%2Freactnavigation.org%2Fexamples%2F5.x%2Fdrawer-open-close-toggle.js)

Each of these functions behind the scenes simply dispatches actions:

```jsx
navigation.dispatch(DrawerActions.openDrawer())
navigation.dispatch(DrawerActions.closeDrawer())
navigation.dispatch(DrawerActions.toggleDrawer())
```

[Try this example on Snack](https://snack.expo.io/?platform=android&name=Tab%20navigation%20%7C%20React%20Navigation&dependencies=%40expo%2Fvector-icons%40*%2C%40react-native-community%2Fmasked-view%40*%2C%40react-navigation%2Fbottom-tabs%40%5E5.8.0%2C%40react-navigation%2Fdrawer%40%5E5.9.0%2C%40react-navigation%2Fmaterial-bottom-tabs%40%5E5.2.16%2C%40react-navigation%2Fmaterial-top-tabs%40%5E5.2.16%2C%40react-navigation%2Fnative%40%5E5.7.3%2C%40react-navigation%2Fstack%40%5E5.9.0%2Creact-native-paper%40%5E4.0.1%2Creact-native-reanimated%40*%2Creact-native-safe-area-context%40*%2Creact-native-gesture-handler%40*%2Creact-native-screens%40*%2Creact-native-tab-view%40%5E2.15.1&hideQueryParams=true&sourceUrl=https%3A%2F%2Freactnavigation.org%2Fexamples%2F5.x%2Fdrawer-dispatch.js)

If you want to determine if a drawer is open or closed, you can do the following:

```jsx
import { useIsDrawerOpen } from '@react-navigation/drawer'

// ...

const isDrawerOpen = useIsDrawerOpen()
```

## Done ✅

To see how well you learned this lesson, take the test in our school's [mobile app](http://onelink.to/njhc95) on this topic or in [Telegram bot](https://t.me/javascriptcamp_bot).


![Sumerian school](/img/app.jpg)

## Links

[React Navigation](https://reactnavigation.org/docs/tab-based-navigation)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<table>
  <tr>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /> <a href="https://github.com/gHashTag/react-native-village/commits?author=gHashTag" title="Documentation">📖💲</a></td>
  </tr>
</table>

[![Become a Patron!](/img/logo/patreon.jpg)](https://www.patreon.com/bePatron?u=31769291)
