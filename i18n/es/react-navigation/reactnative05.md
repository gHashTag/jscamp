---
id: reactnative05
title: Header buttons
sidebar_label: Header buttons
---

Now that we know how to customize the look and feel of our headers, let's make them smart! In fact, it might be ambitious, let's just give them the ability to react very clearly to our touch.

## Adding a button to the title

The most common way to interact with a heading is to click the button to the left or right of the heading. Let's add a button to the right side of the header (one of the hardest places to tap on the entire screen, depending on your finger and phone size, but also a normal place to place buttons).


```
const StackScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitle: props => <LogoTitle />,
          headerRight: () => (
            <Button
              onPress={() => console.log('This is a button!')}
              title="Info"
              color="#fff"
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
}
```

[Try this example on Snack](https://snack.expo.io/?platform=android&name=header%20button&dependencies=%40expo%2Fvector-icons%40*%2C%40react-native-community%2Fmasked-view%40*%2Creact-native-gesture-handler%40*%2Creact-native-pager-view%40*%2Creact-native-paper%40%5E4.7.2%2Creact-native-reanimated%40*%2Creact-native-safe-area-context%40*%2Creact-native-screens%40*%2Creact-native-tab-view%40%5E3.0.0%2C%40react-navigation%2Fbottom-tabs%40%5E6.0.0-next.1%2C%40react-navigation%2Fdrawer%40%5E6.0.0-next.1%2C%40react-navigation%2Fmaterial-bottom-tabs%40%5E6.0.0-next.1%2C%40react-navigation%2Fmaterial-top-tabs%40%5E6.0.0-next.1%2C%40react-navigation%2Fnative%40%5E6.0.0-next.1%2C%40react-navigation%2Fstack%40%5E6.0.0-next.6&hideQueryParams=true&sourceUrl=https%3A%2F%2Freactnavigation.org%2Fexamples%2F6.x%2Fsimple-header-button.js)

When we define our button in this way, the `this` variable in the `options` parameters is not an instance of `HomeScreen`, so you cannot call `setState` or any instance methods on it. This is very important because very often you want the buttons in your header to interact with the screen that the header belongs to. So, we'll see how to do this next.

## How a title interacts with its display component

To be able to interact with the screen component, we need to use `navigation.setOptions` to define our button instead of the `options` property. By using `navigation.setOptions` inside a screen component, we can access screen properties, state, context, etc.


```jsx
const StackScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={({ navigation, route }) => ({
          headerTitle: props => <LogoTitle />
        })}
      />
    </Stack.Navigator>
  )
}

const HomeScreen = ({ navigation }) => {
  const [count, setCount] = React.useState(0)

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button onPress={() => setCount(c => c + 1)} title="Update count" />
      ),
    })
  }, [navigation])

  return <Text>Count: {count}</Text>
}
```

## Back Button Setting

`createStackNavigator` provides platform-specific default settings for the back button. On iOS, this includes a label with a button that shows the title of the previous screen when the title fits into the available space, otherwise it says Back.

You can change the behavior of the label using `headerBackTitle` and `headerTruncatedBackTitle` [more](https://reactnavigation.org/docs/6.x/stack-navigator#headerbacktitle).

To customize the back button image, you can use [headerBackImage](https://reactnavigation.org/docs/6.x/stack-navigator#headerbackimage).

## Overriding the back button

The back button will automatically appear in the stack navigator whenever the user has the option to return from the current screen - in other words, the back button will appear whenever there is more than one screen in the stack.

All in all, this is what you need. But it is possible that in some circumstances you may want to customize the back button more than you can with the options mentioned above, in which case you can set the `headerLeft` option on the React element to be rendered, just like we do this was done with `headerRight`. Alternatively, the `headerLeft` option also accepts a React component that can be used, for example, to override the `onPress` behavior of the back button. Read more about this in [API reference](https://reactnavigation.org/docs/6.x/stack-navigator#headerleft).

If you want to keep the look of the back button and only override the `onPress` method, you can import the HeaderBackButton from `@response-navigation/stack`

```jsx
import { HeaderBackButton } from '@react-navigation/stack'
```

and assign this component to the `headerLeft` parameter.

## Done ✅

To see how well you learned this lesson, take the test in our school's [mobile app](http://onelink.to/njhc95) on this topic or in [Telegram bot](https://t.me/javascriptcamp_bot).


![Sumerian school](/img/app.jpg)

## Links

[React Navigation](https://reactnavigation.org/docs/6.x/header-buttons)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<table>
  <tr>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /> <a href="https://github.com/gHashTag/react-native-village/commits?author=gHashTag" title="Documentation">📖💲</a></td>
  </tr>
</table>

[![EnglishMoji!](/img/logo/englishmoji.png)](https://apps.apple.com/kz/app/englishmoji/id6450254885)
