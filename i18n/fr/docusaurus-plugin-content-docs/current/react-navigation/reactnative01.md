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

## Setting up the navigator
All route configuration is indicated as a props for our navigator. We haven't passed any props to our navigator, so it just uses the default configuration.

Let's add a second screen to our stack navigator and set the main screen to render first:

```jsx {12-16,24} title="App.js" 
import * as React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const HomeScreen = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Home Screen</Text>
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
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  </NavigationContainer>
)

export default App
```

[Try this example on Snack](https://snack.expo.io/?platform=android&name=createStackNavigator%20%7C%20React%20Navigation&dependencies=%40expo%2Fvector-icons%40*%2C%40react-native-community%2Fmasked-view%40*%2Creact-native-gesture-handler%40*%2Creact-native-pager-view%40*%2Creact-native-paper%40%5E4.7.2%2Creact-native-reanimated%40*%2Creact-native-safe-area-context%40*%2Creact-native-screens%40*%2Creact-native-tab-view%40%5E3.0.0%2C%40react-navigation%2Fbottom-tabs%40%5E6.0.0-next.1%2C%40react-navigation%2Fdrawer%40%5E6.0.0-next.1%2C%40react-navigation%2Fmaterial-bottom-tabs%40%5E6.0.0-next.1%2C%40react-navigation%2Fmaterial-top-tabs%40%5E6.0.0-next.1%2C%40react-navigation%2Fnative%40%5E6.0.0-next.1%2C%40react-navigation%2Fstack%40%5E6.0.0-next.6&hideQueryParams=true&sourceUrl=https%3A%2F%2Freactnavigation.org%2Fexamples%2F6.x%2Fhello-react-navigation-full.js)

Now we have two routes in our stack: `HomeScreen` and `Details`. The route can be specified using the `Screen` component. The `Screen` component takes a `name` property, which corresponds to the name of the route that we will use for navigation, and a component property, which corresponds to the component that it will display.

Here the `Home` route corresponds to the HomeScreen component, and the Details route corresponds to the DetailsScreen component. The initial route for the stack is the `Home` route. Try changing it to `Details` and reloading the app (Fast Refresh React Native does not update changes from `initialRouteName` as you might expect), notice that you will now see the `Details` screen. Then bring it back to `Home` and reboot again.

::: info
the `component` property takes a component, not a render function. Do not pass inline function (for example, `component = {() => <HomeScreen />}`), otherwise your component will shutdown and remount, losing all state when re-rendering the parent component.
:::

## Defining parameters
On each navigator screen, you can specify some parameters for the navigator, such as the title displayed in the title. These parameters can be passed in the `options` prop for each screen component:

```jsx
<Stack.Screen
  name="Home"
  component={HomeScreen}
  options={{ title: 'Overview' }}
/>
```

[Try this example on Snack](https://snack.expo.io/?platform=android&name=createStackNavigator%20%7C%20React%20Navigation&dependencies=%40expo%2Fvector-icons%40*%2C%40react-native-community%2Fmasked-view%40*%2Creact-native-gesture-handler%40*%2Creact-native-pager-view%40*%2Creact-native-paper%40%5E4.7.2%2Creact-native-reanimated%40*%2Creact-native-safe-area-context%40*%2Creact-native-screens%40*%2Creact-native-tab-view%40%5E3.0.0%2C%40react-navigation%2Fbottom-tabs%40%5E6.0.0-next.1%2C%40react-navigation%2Fdrawer%40%5E6.0.0-next.1%2C%40react-navigation%2Fmaterial-bottom-tabs%40%5E6.0.0-next.1%2C%40react-navigation%2Fmaterial-top-tabs%40%5E6.0.0-next.1%2C%40react-navigation%2Fnative%40%5E6.0.0-next.1%2C%40react-navigation%2Fstack%40%5E6.0.0-next.6&hideQueryParams=true&sourceUrl=https%3A%2F%2Freactnavigation.org%2Fexamples%2F6.x%2Fhello-react-navigation-with-options.js)

Sometimes we need to specify the same parameters for all navigator screens. To do this, we can pass the `screenOptions` property to the navigator.

## Transfer of additional details
Sometimes we may need to pass additional properties to the screen. We can do this in two ways:
- Use [React context](https://reactjs.org/docs/context.html) and wrap the navigator with a context provider to pass data to screens (recommended).
- Use a render callback for the screen instead of specifying a component property:

```jsx
<Stack.Screen name="Home">
  {props => <HomeScreen {...props} extraData={someData} />}
</Stack.Screen>
```

:::info
By default, React Navigation applies optimizations to screen components to prevent unnecessary rendering. Using a render callback removes these optimizations. So if you are using a render callback you need to make sure you are using [React.memo](https://reactjs.org/docs/react-api.html#reactmemo) or [React.PureComponent](https://reactjs.org/docs/react-api.html#reactpurecomponent) for screen components to avoid performance issues.
:::

## What's next?

At this stage, a natural question arises: "How do I go from the` Home` route to the `Details` route?" This is covered in the next section.

## Done ✅

To see how well you learned this lesson, take the test in our school's [mobile app](http://onelink.to/njhc95) on this topic or in [Telegram bot](https://t.me/javascriptcamp_bot).


![Sumerian school](/img/app.jpg)

## Links

[React Navigation](https://reactnavigation.org/docs/6.x/hello-react-navigation)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<table>
  <tr>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /> <a href="https://github.com/gHashTag/react-native-village/commits?author=gHashTag" title="Documentation">📖💲</a></td>
  </tr>
</table>

[![Become a Patron!](/img/logo/patreon.jpg)](https://www.patreon.com/bePatron?u=31769291)
