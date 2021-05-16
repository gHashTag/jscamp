---
id: reactnative01
title: Hello React Navigation
sidebar_label: Hello React Navigation
---

In a web browser, you can link to different pages using the `<a>` anchor tag. When the user clicks on the link, the URL is pushed onto the browser history stack. When the user clicks the back button, the browser pops the item off the top of the history stack, so the previously visited page is now the active page. React Native doesn't have a built-in view of the global history stack like the web browser - this is where React Navigation comes in.

The stack navigator in React Navigation allows your app to navigate between screens and manage navigation history. If your application uses only one stack navigator, then this is conceptually similar to how a web browser handles navigation state - your application pops items off the navigation stack as users interact with it, and this results in the user seeing different screens. The key difference between how this works in a web browser and in React Navigation is that the React Navigation stack navigator provides the gestures and animations you expect from Android and iOS when navigating between routes in the stack.

Let's start by demonstrating the most common `createStackNavigator` navigator.

## Installing the stack navigator library
The libraries we've installed so far are the building blocks and common frameworks for navigators, and each navigator in React Navigation lives in its own library. To use the stack navigator, we need to set [@response-navigation/stack](https://github.com/react-navigation/react-navigation/tree/main/packages/stack):

```bash npm2yarn
npm install @react-navigation/stack@next @react-native-masked-view/masked-view
```

## Creating a navigator stack
`createStackNavigator` is a function that returns an object containing 2 properties: `Screen` and `Navigator`. Both are React components used to customize the navigator. The `Navigator` must contain the` Screen` elements as its children to define the route configuration.

The `NavigationContainer` is the component that manages our navigation tree and contains the navigation state. This component should wrap the entire navigator structure. We usually render this component at the root of our application, which is usually a component exported from `App.js`.

```jsx title="App.js"
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const HomeScreen = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Home Screen</Text>
  </View>
)

const Stack = createStackNavigator()

const App = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  </NavigationContainer>
)

export default App
```

[Try this example on Snack](https://snack.expo.io/?platform=android&name=Getting%20started%20%7C%20React%20Navigation&dependencies=%40expo%2Fvector-icons%40*%2C%40react-native-community%2Fmasked-view%40*%2Creact-native-gesture-handler%40*%2Creact-native-pager-view%40*%2Creact-native-paper%40%5E4.7.2%2Creact-native-reanimated%40*%2Creact-native-safe-area-context%40*%2Creact-native-screens%40*%2Creact-native-tab-view%40%5E3.0.0%2C%40react-navigation%2Fbottom-tabs%40%5E6.0.0-next.1%2C%40react-navigation%2Fdrawer%40%5E6.0.0-next.1%2C%40react-navigation%2Fmaterial-bottom-tabs%40%5E6.0.0-next.1%2C%40react-navigation%2Fmaterial-top-tabs%40%5E6.0.0-next.1%2C%40react-navigation%2Fnative%40%5E6.0.0-next.1%2C%40react-navigation%2Fstack%40%5E6.0.0-next.6&hideQueryParams=true&sourceUrl=https%3A%2F%2Freactnavigation.org%2Fexamples%2F6.x%2Fhello-react-navigation.js)

![Hello React Navigation](https://reactnavigation.org/assets/images/basic_stack_nav-7388d409c412d0c728a0903301338433.png)

If you run this code, you will see a screen with an empty navigation bar and a gray content area containing your `HomeScreen` component (shown above). The styles you see for the navigation bar and content area are the default configuration for the stack navigator, we will learn how to customize them later.

::: info
The case of the route name is irrelevant - you can use lowercase `home` or capitalized `Home`, the choice is yours. We prefer to capitalize route names.
:::

::: info
The only required configuration for the screen is the `name` and `component` properties of the `props`. You can learn more about the other options available in the [Stack Navigator Reference](https://reactnavigation.org/docs/6.x/stack-navigator).
:::

## Payment

Now you are on a stripped-down version of the site, after subscribing to [Patreon](https://www.patreon.com/javascriptcamp), you will get full access to the training course, as well as access to our server's private channels in [Discord](https://discord.gg/6GDAfXn).

Download our [mobile application](http://onelink.to/njhc95) or get tested in our [JavaScript telegram bot](https://t.me/javascriptcamp_bot), and also subscribe to [our news](https://t.me/javascriptapp).

[![Become a Patron!](/img/logo/patreon.jpg)](https://www.patreon.com/bePatron?u=31769291)


[![Sumerian school](/img/app.jpg)](http://onelink.to/njhc95)

 

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<table>
  <tr>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /> <a href="https://github.com/gHashTag/react-native-village/commits?author=gHashTag" title="Documentation">📖💲</a></td>
  </tr>
</table>

[![Become a Patron!](/img/logo/patreon.jpg)](https://www.patreon.com/bePatron?u=31769291)
