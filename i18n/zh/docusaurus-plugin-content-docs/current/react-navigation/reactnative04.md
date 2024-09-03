---
id: reactnative04
title: Настройка Header
sidebar_label: Настройка Header
---

We've already seen how to set the `title` in the Header, but let's take another look at that before moving on to some of the other options - repetition is the key to learning!

## Set up `title` in Header
The `Screen` component accepts an `options` option, which is either an object or a function that returns an object containing various configuration options. We use `title` as the title, as shown in the following example.

```jsx
const StackScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'My home' }}
      />
    </Stack.Navigator>
  )
}
```

[Try this example on Snack](https://snack.expo.io/?platform=android&name=Configuring%20the%20header%20bar%20%7C%20React%20Navigation&dependencies=%40expo%2Fvector-icons%40*%2C%40react-native-community%2Fmasked-view%40*%2Creact-native-gesture-handler%40*%2Creact-native-pager-view%40*%2Creact-native-paper%40%5E4.7.2%2Creact-native-reanimated%40*%2Creact-native-safe-area-context%40*%2Creact-native-screens%40*%2Creact-native-tab-view%40%5E3.0.0%2C%40react-navigation%2Fbottom-tabs%40%5E6.0.0-next.1%2C%40react-navigation%2Fdrawer%40%5E6.0.0-next.1%2C%40react-navigation%2Fmaterial-bottom-tabs%40%5E6.0.0-next.1%2C%40react-navigation%2Fmaterial-top-tabs%40%5E6.0.0-next.1%2C%40react-navigation%2Fnative%40%5E6.0.0-next.1%2C%40react-navigation%2Fstack%40%5E6.0.0-next.6&hideQueryParams=true&sourceUrl=https%3A%2F%2Freactnavigation.org%2Fexamples%2F6.x%2Fpassing-params-back.js)

## Using parameters in the header
To use the options in the header, we need to make the `options` for the screen a function that returns a configuration object. It might be tempting to try using `this.props` inside parameters, but since it is defined before the component is rendered, this does not apply to the component instance, and therefore properties are not available. Instead, if we make the parameters a function, then React Navigation will call it with an object containing `{navigation, route}` - in this case all we care about is the route, which is the same object that is passed to the properties of your screen as a route property. You may recall that we can get parameters via `route.params`, and so we do it below to extract the parameter and use it as a header.

```jsx {26}
import * as React from 'react'
import { View, Text, Button } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const HomeScreen = ({ navigation }) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Home Screen</Text>
    <Button title="Go to Profile" onPress={() => navigation.navigate('Profile', { name: 'Custom profile header' })} />
  </View>
)

const ProfileScreen = ({ navigation }) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Profile screen</Text>
    <Button title="Go back" onPress={() => navigation.goBack()} />
  </View>
)

const Stack = createStackNavigator()

const App = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'My home' }} />
      <Stack.Screen name="Profile" component={ProfileScreen} options={({ route }) => ({ title: route.params.name })} />
    </Stack.Navigator>
  </NavigationContainer>
)

export default App

```
[Try this example on Snack](https://snack.expo.io/?platform=android&name=params%20in%20title&dependencies=%40expo%2Fvector-icons%40*%2C%40react-native-community%2Fmasked-view%40*%2Creact-native-gesture-handler%40*%2Creact-native-pager-view%40*%2Creact-native-paper%40%5E4.7.2%2Creact-native-reanimated%40*%2Creact-native-safe-area-context%40*%2Creact-native-screens%40*%2Creact-native-tab-view%40%5E3.0.0%2C%40react-navigation%2Fbottom-tabs%40%5E6.0.0-next.1%2C%40react-navigation%2Fdrawer%40%5E6.0.0-next.1%2C%40react-navigation%2Fmaterial-bottom-tabs%40%5E6.0.0-next.1%2C%40react-navigation%2Fmaterial-top-tabs%40%5E6.0.0-next.1%2C%40react-navigation%2Fnative%40%5E6.0.0-next.1%2C%40react-navigation%2Fstack%40%5E6.0.0-next.6&hideQueryParams=true&sourceUrl=https%3A%2F%2Freactnavigation.org%2Fexamples%2F6.x%2Fparams-in-title.js)

The argument passed to the parameters function is an object with the following properties:

- `navigation` - prop for the screen
- `route` - prop route for the screen

In the example above, we only needed route support, but in some cases you can also use navigation.

## Updating options with setOptions

It is often necessary to update the option configuration for the active display from the connected display component itself. We can do this with `navigation.setOptions`

```jsx
/* Inside render () or React class */
<Button
  title="Update the title"
  onPress={() => navigation.setOptions({ title: 'Updated!' })}
/>
```

[Try this example on Snack](https://snack.expo.io/?platform=android&name=updating%20navigation%20options&dependencies=%40expo%2Fvector-icons%40*%2C%40react-native-community%2Fmasked-view%40*%2Creact-native-gesture-handler%40*%2Creact-native-pager-view%40*%2Creact-native-paper%40%5E4.7.2%2Creact-native-reanimated%40*%2Creact-native-safe-area-context%40*%2Creact-native-screens%40*%2Creact-native-tab-view%40%5E3.0.0%2C%40react-navigation%2Fbottom-tabs%40%5E6.0.0-next.1%2C%40react-navigation%2Fdrawer%40%5E6.0.0-next.1%2C%40react-navigation%2Fmaterial-bottom-tabs%40%5E6.0.0-next.1%2C%40react-navigation%2Fmaterial-top-tabs%40%5E6.0.0-next.1%2C%40react-navigation%2Fnative%40%5E6.0.0-next.1%2C%40react-navigation%2Fstack%40%5E6.0.0-next.6&hideQueryParams=true&sourceUrl=https%3A%2F%2Freactnavigation.org%2Fexamples%2F6.x%2Fupdating-options-with-setoptions.js)

## Customizing Styles

There are three key properties to use when customizing the header style: `headerStyle`, `headerTintColor` and `headerTitleStyle`.

- `headerStyle`: a style object to be applied to the `View` that wraps the header. If you set it to `backgroundColor`, this will be the color of your title.
- `headerTintColor`: The back button and header use this property as the color. In the example below, we are setting the shade color `#fff` to white, so the back button and title heading will be white.
- `headerTitleStyle`: If we want to customize the `fontFamily`, `fontWeight` and other text style properties for the title, we can use that for that.




[Try this example on Snack](https://snack.expo.io/?platform=android&name=header%20styles&dependencies=%40expo%2Fvector-icons%40*%2C%40react-native-community%2Fmasked-view%40*%2Creact-native-gesture-handler%40*%2Creact-native-pager-view%40*%2Creact-native-paper%40%5E4.7.2%2Creact-native-reanimated%40*%2Creact-native-safe-area-context%40*%2Creact-native-screens%40*%2Creact-native-tab-view%40%5E3.0.0%2C%40react-navigation%2Fbottom-tabs%40%5E6.0.0-next.1%2C%40react-navigation%2Fdrawer%40%5E6.0.0-next.1%2C%40react-navigation%2Fmaterial-bottom-tabs%40%5E6.0.0-next.1%2C%40react-navigation%2Fmaterial-top-tabs%40%5E6.0.0-next.1%2C%40react-navigation%2Fnative%40%5E6.0.0-next.1%2C%40react-navigation%2Fstack%40%5E6.0.0-next.6&hideQueryParams=true&sourceUrl=https%3A%2F%2Freactnavigation.org%2Fexamples%2F6.x%2Fheader-styles.js)

![header](https://reactnavigation.org/assets/images/custom_headers-70512af908cc5083811ae478a1d36425.png)

There are a few things to note here:

- On iOS, the status bar text and icons are black and it doesn't look good on a dark background. We won't discuss this here, but you should make sure to customize the status bar to match the screen colors as described in the status bar guide.
- The configuration we set applies only to the main screen; when we go to the detail screen, the default styles are returned. We will now look at how to split the `options` between screens.

## Sharing shared parameters across screens

There is often a desire to customize the title in the same way on many screens. For example, your company's brand color might be red, so you want the header background color to be red and the tint color to be white. For convenience, these are the colors we are using in our current example, and you will notice that when you go to the DetailsScreen, the colors revert to their defaults. Wouldn't it be awful if we had to copy the options header style properties from HomeScreen to DetailsScreen and for every single screen component we use in our application? Fortunately, no. Instead, we can move the configuration to the stack navigator in the prop `screenOptions` section.



[Try this example on Snack](https://snack.expo.io/?platform=android&name=sharing%20header%20styles&dependencies=%40expo%2Fvector-icons%40*%2C%40react-native-community%2Fmasked-view%40*%2Creact-native-gesture-handler%40*%2Creact-native-pager-view%40*%2Creact-native-paper%40%5E4.7.2%2Creact-native-reanimated%40*%2Creact-native-safe-area-context%40*%2Creact-native-screens%40*%2Creact-native-tab-view%40%5E3.0.0%2C%40react-navigation%2Fbottom-tabs%40%5E6.0.0-next.1%2C%40react-navigation%2Fdrawer%40%5E6.0.0-next.1%2C%40react-navigation%2Fmaterial-bottom-tabs%40%5E6.0.0-next.1%2C%40react-navigation%2Fmaterial-top-tabs%40%5E6.0.0-next.1%2C%40react-navigation%2Fnative%40%5E6.0.0-next.1%2C%40react-navigation%2Fstack%40%5E6.0.0-next.6&hideQueryParams=true&sourceUrl=https%3A%2F%2Freactnavigation.org%2Fexamples%2F6.x%2Fsharing-header-styles.js)

Now any screen owned by `StackScreen` will have our great branding. Surely there must be a way to override these parameters if we need to?

## Replacing the title with a custom component

Sometimes you need more control than just changing the text and heading styles - for example, you might want to display an image instead of a heading, or turn the heading into a button. In these cases, you can completely override the component used for the header and provide your own.

```
const LogoTitle = () => {
  return (
    <Image
      style={{ width: 50, height: 50 }}
      source={require('@expo/snack-static/react-native-logo.png')}
    />
  );
}

const StackScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options=options={{ headerTitle: props => <LogoTitle /> }} /> }}
      />
    </Stack.Navigator>
  )
}
```

[Try this example on Snack](https://snack.expo.io/?platform=android&name=custom%20header%20title%20component&dependencies=%40expo%2Fvector-icons%40*%2C%40react-native-community%2Fmasked-view%40*%2Creact-native-gesture-handler%40*%2Creact-native-pager-view%40*%2Creact-native-paper%40%5E4.7.2%2Creact-native-reanimated%40*%2Creact-native-safe-area-context%40*%2Creact-native-screens%40*%2Creact-native-tab-view%40%5E3.0.0%2C%40react-navigation%2Fbottom-tabs%40%5E6.0.0-next.1%2C%40react-navigation%2Fdrawer%40%5E6.0.0-next.1%2C%40react-navigation%2Fmaterial-bottom-tabs%40%5E6.0.0-next.1%2C%40react-navigation%2Fmaterial-top-tabs%40%5E6.0.0-next.1%2C%40react-navigation%2Fnative%40%5E6.0.0-next.1%2C%40react-navigation%2Fstack%40%5E6.0.0-next.6&hideQueryParams=true&sourceUrl=https%3A%2F%2Freactnavigation.org%2Fexamples%2F6.x%2Fcustom-header-title-component.js)

You might be wondering why headerTitle when we provide a component and not a `title` like before? The reason is that `title` is a stack navigator-specific property, and the default `headerTitle` is the Text component that renders `title`.

## Additional configuration

You can read the full list of available options for screens inside the stack navigator in the reference [createStackNavigator](https://reactnavigation.org/docs/6.x/stack-navigator/#navigationoptions-used-by-stacknavigator).

## Done 

To see how well you learned this lesson, take the test in our school's [mobile app](http://onelink.to/njhc95) on this topic or in [Telegram bot](https://t.me/javascriptcamp_bot).


[![EnglishMoji!](/img/logo/NeuroCoder.png)](https://vk.com/neurocoder)

## Links

[React Navigation](https://reactnavigation.org/docs/6.x/headers)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<table>
  <tr>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /> <a href="https://github.com/gHashTag/react-native-village/commits?author=gHashTag" title="Documentation">  💲</a></td>
  </tr>
</table>

[![EnglishMoji!](/img/logo/NeuroCoder.png)](https://vk.com/neurocoder)
