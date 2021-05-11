---
id: reactnative02
title: Stack навигатор - Перемещение между экранами
sidebar_label: Stack навигатор - Перемещение между экранами
---

В предыдущем разделе [Hello React Navigation](https://www.jscamp.app/docs/react-navigation/reactnative01) мы определили навигатор стека с двумя маршрутами `Home` и `Details`, но мы не узнали, как позволить пользователю переходить от `Home` к `Details`.

Если бы это был веб-браузер, мы могли бы написать что-то вроде этого:

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
Мы сделаем что-то подобное, но вместо использования глобального окна window.location мы будем использовать свойство `navigation`, которая передается нашим компонентам экрана.

## Переход к новому экрану

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

[Попробуйте этот пример на Snack](https://snack.expo.io/?platform=android&name=Hello%20React%20Navigation%20%7C%20React%20Navigation&dependencies=%40expo%2Fvector-icons%40*%2C%40react-native-community%2Fmasked-view%40*%2Creact-native-gesture-handler%40*%2Creact-native-pager-view%40*%2Creact-native-paper%40%5E4.7.2%2Creact-native-reanimated%40*%2Creact-native-safe-area-context%40*%2Creact-native-screens%40*%2Creact-native-tab-view%40%5E3.0.0%2C%40react-navigation%2Fbottom-tabs%40%5E6.0.0-next.1%2C%40react-navigation%2Fdrawer%40%5E6.0.0-next.1%2C%40react-navigation%2Fmaterial-bottom-tabs%40%5E6.0.0-next.1%2C%40react-navigation%2Fmaterial-top-tabs%40%5E6.0.0-next.1%2C%40react-navigation%2Fnative%40%5E6.0.0-next.1%2C%40react-navigation%2Fstack%40%5E6.0.0-next.6&hideQueryParams=true&sourceUrl=https%3A%2F%2Freactnavigation.org%2Fexamples%2F6.x%2Fnew-screen.js)

Давайте разберемся с этим:

- `navigation` - свойство `navigation` передается каждому компоненту экрана в навигаторе стека.
- `navigate('Details')` - мы вызываем функцию `navigate` с именем маршрута, по которому мы хотели бы переместить пользователя.

:::info
Если мы вызовем `navigation.navigate` с именем маршрута, которое мы не определили в навигаторе, он выведет ошибку в сборках разработки, и в сборках производства ничего не произойдет. Другими словами, мы можем переходить только к маршрутам, которые были определены в нашем навигаторе, - мы не можем переходить к произвольному компоненту.
:::

## Кнопка "Назад"
Хедер предоставляемый навигатором стека, будет автоматически включать кнопку возврата, когда можно будет вернуться с активного экрана. Если в стеке навигации есть только один экран, нет ничего, к чему вы могли бы вернуться, то кнопки назад не будет.

Иногда вам нужно иметь возможность программно запускать это поведение, и для этого вы можете использовать `navigation.goBack()`

```jsx
<Button title="Go back" onPress={() => navigation.goBack()} />
```

## Назад к началу
Иногда нам нужно вернуть пользователя сразу на несколько экранов назад. Для этого используется `navigation.popToTop()`

```jsx
<Button title="Go back to first screen in stack" onPress={() => navigation.popToTop()} />
```



## Done ✅

Чтобы узнать, насколько хорошо вы усвоили этот урок, пройдите тест в [мобильном приложении](http://onelink.to/njhc95) нашей школы по этой теме или в [боте Telegram](https://t.me/javascriptcamp_bot).

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

## Оплата

Сейчас ты находишся на урезанной версии сайта, после оформления подписки на [Patreon](https://www.patreon.com/javascriptcamp), ты получишь полный доступ к обучающему курсу, а также доступ к серетным каналам нашего сервера в [Discord](https://discord.gg/6GDAfXn).  

Качай наше [мобильное приложение](http://onelink.to/njhc95) или пройди тестирование в нашем [JavaScript телеграм боте](https://t.me/javascriptcamp_bot), а также подпишись на [наши новости](https://t.me/javascriptapp).


[![Sumerian school](/img/app.jpg)](http://onelink.to/njhc95)

![JavaScript Camp](/img/bandlink.png)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):


<table>
  <tr>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /><a href="#financial-gHashTag" title="Financial">📖 💵</a></td>
  </tr>
</table>
