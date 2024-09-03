---
id: reactnative05
title: Header buttons
sidebar_label: Header buttons
---

Теперь, когда мы знаем, как настроить внешний вид наших хедеров, давайте сделаем их разумными! На самом деле, возможно, это амбициозно, давайте просто дадим им возможность очень четко реагировать на наши прикосновения.

## Добавление кнопки в заголовок

Самый распространенный способ взаимодействия с заголовком - нажать кнопку слева или справа от заголовка. Давайте добавим кнопку в правую часть заголовка (одно из самых сложных мест для касания на всем экране, в зависимости от пальца и размера телефона, но также и нормальное место для размещения кнопок).

```jsx
const screenOptions = {
  headerTitle: props => <LogoTitle />,
  headerRight: () => (
    <Button
      onPress={() => console.log('This is a button!')}
      title="Info"
      color="#fff"
    />
  ),
};

const StackScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={screenOptions}
      />
    </Stack.Navigator>
  );
}
```

[Попробуйте этот пример на Snack](https://snack.expo.io/?platform=android&name=header%20button&dependencies=%40expo%2Fvector-icons%40*%2C%40react-native-community%2Fmasked-view%40*%2Creact-native-gesture-handler%40*%2Creact-native-pager-view%40*%2Creact-native-paper%40%5E4.7.2%2Creact-native-reanimated%40*%2Creact-native-safe-area-context%40*%2Creact-native-screens%40*%2Creact-native-tab-view%40%5E3.0.0%2C%40react-navigation%2Fbottom-tabs%40%5E6.0.0-next.1%2C%40react-navigation%2Fdrawer%40%5E6.0.0-next.1%2C%40react-navigation%2Fmaterial-bottom-tabs%40%5E6.0.0-next.1%2C%40react-navigation%2Fmaterial-top-tabs%40%5E6.0.0-next.1%2C%40react-navigation%2Fnative%40%5E6.0.0-next.1%2C%40react-navigation%2Fstack%40%5E6.0.0-next.6&hideQueryParams=true&sourceUrl=https%3A%2F%2Freactnavigation.org%2Fexamples%2F6.x%2Fsimple-header-button.js)

Когда мы определяем нашу кнопку таким образом, переменная `this` в параметрах `options` не является экземпляром `HomeScreen`, поэтому вы не можете вызывать `setState` или какие-либо методы экземпляра на нем. Это очень важно, потому что очень часто требуется, чтобы кнопки в вашем заголовке взаимодействовали с экраном, которому принадлежит заголовок. Итак, мы посмотрим, как это сделать дальше.

## Взаимодействие заголовка с его экранным компонентом

Чтобы иметь возможность взаимодействовать с компонентом экрана, нам нужно использовать `navigation.setOptions` для определения нашей кнопки вместо свойства `options`. Используя `navigation.setOptions` внутри компонента экрана, мы получаем доступ к свойствам экрана, состоянию, контексту и т.д.


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

## Настройка кнопки возврата

`createStackNavigator` предоставляет настройки по умолчанию для конкретной платформы для кнопки возврата. В iOS это включает лейбл с кнопкой, которая показывает заголовок предыдущего экрана, когда заголовок помещается в доступное пространство, в противном случае он говорит «Назад».

Вы можете изменить поведение метки с помощью `headerBackTitle` и `headerTruncatedBackTitle` [подробнее](https://reactnavigation.org/docs/6.x/stack-navigator#headerbacktitle).

Чтобы настроить изображение кнопки «Назад», вы можете использовать [headerBackImage](https://reactnavigation.org/docs/6.x/stack-navigator#headerbackimage).

## Переопределение кнопки возврата

Кнопка «Назад» будет автоматически отображаться в навигаторе стека всякий раз, когда у пользователя есть возможность вернуться с текущего экрана - другими словами, кнопка «Назад» будет отображаться всякий раз, когда в стеке больше одного экрана.

В общем, это то, что вам нужно. Но возможно, что в некоторых обстоятельствах вы захотите настроить кнопку «Назад» больше, чем вы можете с помощью опций, упомянутых выше, и в этом случае вы можете установить опцию `headerLeft` для элемента React, который будет отображаться, так же, как мы это делали с `headerRight`. В качестве альтернативы, опция `headerLeft` также принимает компонент React, который может использоваться, например, для переопределения поведения `onPress` кнопки возврата. Подробнее об этом читайте в [справке по API](https://reactnavigation.org/docs/6.x/stack-navigator#headerleft).

Если вы хотите сохранить вид кнопки «Назад» и переопределить только метод `onPress`, вы можете импортировать HeaderBackButton из `@react-navigation/stack` 

```jsx
import { HeaderBackButton } from '@react-navigation/stack'
```

и назначьте этот компонент параметру `headerLeft`.

## Done 

Чтобы узнать, насколько хорошо вы усвоили этот урок, пройдите тест в [мобильном приложении](http://onelink.to/njhc95) нашей школы по этой теме или в [боте Telegram](https://t.me/javascriptcamp_bot).

[![EnglishMoji!](/img/logo/NeuroCoder.png)](https://vk.com/neurocoder)

## Links

[React Navigation](https://reactnavigation.org/docs/6.x/header-buttons)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<table>
  <tr>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /> <a href="https://github.com/gHashTag/react-native-village/commits?author=gHashTag" title="Documentation">  💲</a></td>
  </tr>
</table>

[![EnglishMoji!](/img/logo/NeuroCoder.png)](https://vk.com/neurocoder)
