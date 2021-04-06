---
id: reactnative04
title: Настройка Header
sidebar_label: Настройка Header
---

Мы уже видели, как настроить `title` в Header, но давайте еще раз рассмотрим это, прежде чем перейти к некоторым другим параметрам - повторение является ключом к обучению!

## Настроить `title` в Header
Компонент `Screen` принимает опцию `options`, которая является либо объектом, либо функцией, возвращающей объект, содержащий различные параметры конфигурации. В качестве заголовка мы используем `title`, как показано в следующем примере.

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

[Попробуйте этот пример на Snack](https://snack.expo.io/?platform=android&name=Configuring%20the%20header%20bar%20%7C%20React%20Navigation&dependencies=%40expo%2Fvector-icons%40*%2C%40react-native-community%2Fmasked-view%40*%2Creact-native-gesture-handler%40*%2Creact-native-pager-view%40*%2Creact-native-paper%40%5E4.7.2%2Creact-native-reanimated%40*%2Creact-native-safe-area-context%40*%2Creact-native-screens%40*%2Creact-native-tab-view%40%5E3.0.0%2C%40react-navigation%2Fbottom-tabs%40%5E6.0.0-next.1%2C%40react-navigation%2Fdrawer%40%5E6.0.0-next.1%2C%40react-navigation%2Fmaterial-bottom-tabs%40%5E6.0.0-next.1%2C%40react-navigation%2Fmaterial-top-tabs%40%5E6.0.0-next.1%2C%40react-navigation%2Fnative%40%5E6.0.0-next.1%2C%40react-navigation%2Fstack%40%5E6.0.0-next.6&hideQueryParams=true&sourceUrl=https%3A%2F%2Freactnavigation.org%2Fexamples%2F6.x%2Fpassing-params-back.js)

## Использование параметров в заголовке
Чтобы использовать параметры в заголовке, нам нужно сделать опцию `options` для экрана функцией, которая возвращает объект конфигурации. Может возникнуть соблазн попробовать использовать `this.props` внутри параметров, но поскольку он определен до рендеринга компонента, это не относится к экземпляру компонента, и поэтому свойства недоступны. Вместо этого, если мы сделаем параметры функцией, тогда React Navigation вызовет ее с объектом, содержащим `{navigation, route}` - в этом случае все, о чем мы заботимся, это маршрут, который является тем же объектом, который передается в свойства вашего экрана в качестве свойства маршрута. Вы можете вспомнить, что мы можем получить параметры через `route.params`, и поэтому мы делаем это ниже, чтобы извлечь параметр и использовать его в качестве заголовка.

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
[Попробуйте этот пример на Snack](https://snack.expo.io/?platform=android&name=params%20in%20title&dependencies=%40expo%2Fvector-icons%40*%2C%40react-native-community%2Fmasked-view%40*%2Creact-native-gesture-handler%40*%2Creact-native-pager-view%40*%2Creact-native-paper%40%5E4.7.2%2Creact-native-reanimated%40*%2Creact-native-safe-area-context%40*%2Creact-native-screens%40*%2Creact-native-tab-view%40%5E3.0.0%2C%40react-navigation%2Fbottom-tabs%40%5E6.0.0-next.1%2C%40react-navigation%2Fdrawer%40%5E6.0.0-next.1%2C%40react-navigation%2Fmaterial-bottom-tabs%40%5E6.0.0-next.1%2C%40react-navigation%2Fmaterial-top-tabs%40%5E6.0.0-next.1%2C%40react-navigation%2Fnative%40%5E6.0.0-next.1%2C%40react-navigation%2Fstack%40%5E6.0.0-next.6&hideQueryParams=true&sourceUrl=https%3A%2F%2Freactnavigation.org%2Fexamples%2F6.x%2Fparams-in-title.js)

Аргумент, который передается в функцию параметров, представляет собой объект со следующими свойствами:

- `navigation` - prop для экрана
- `route` - prop маршрута для экрана

В приведенном выше примере нам нужна была только поддержка маршрута, но в некоторых случаях вы также можете использовать навигацию.

## Обновление параметров с помощью setOptions

Часто бывает необходимо обновить конфигурацию опций для активного экрана из самого подключенного компонента экрана. Мы можем сделать это с помощью `navigation.setOptions`

```jsx
/* Внутри render() или React class */
<Button
  title="Update the title"
  onPress={() => navigation.setOptions({ title: 'Updated!' })}
/>
```

[Попробуйте этот пример на Snack](https://snack.expo.io/?platform=android&name=updating%20navigation%20options&dependencies=%40expo%2Fvector-icons%40*%2C%40react-native-community%2Fmasked-view%40*%2Creact-native-gesture-handler%40*%2Creact-native-pager-view%40*%2Creact-native-paper%40%5E4.7.2%2Creact-native-reanimated%40*%2Creact-native-safe-area-context%40*%2Creact-native-screens%40*%2Creact-native-tab-view%40%5E3.0.0%2C%40react-navigation%2Fbottom-tabs%40%5E6.0.0-next.1%2C%40react-navigation%2Fdrawer%40%5E6.0.0-next.1%2C%40react-navigation%2Fmaterial-bottom-tabs%40%5E6.0.0-next.1%2C%40react-navigation%2Fmaterial-top-tabs%40%5E6.0.0-next.1%2C%40react-navigation%2Fnative%40%5E6.0.0-next.1%2C%40react-navigation%2Fstack%40%5E6.0.0-next.6&hideQueryParams=true&sourceUrl=https%3A%2F%2Freactnavigation.org%2Fexamples%2F6.x%2Fupdating-options-with-setoptions.js)

## Настройка стилей

При настройке стиля хедера следует использовать три ключевых свойства: `headerStyle`, `headerTintColor` и `headerTitleStyle`.

- `headerStyle`: объект стиля, который будет применен к `View`, которое обертывает заголовок. Если вы установите для него `backgroundColor`, это будет цвет вашего заголовка.
- `headerTintColor`: кнопка «Назад» и заголовок используют это свойство в качестве цвета. В приведенном ниже примере мы устанавливаем белый цвет оттенка `#fff`, поэтому кнопка «Назад» и заголовок заголовка будут белыми.
- `headerTitleStyle`: если мы хотим настроить `fontFamily`, `fontWeight` и другие свойства стиля текста для заголовка, мы можем использовать это для этого.

```jsx
const StackScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'My home',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
    </Stack.Navigator>
  )
}
```

[Попробуйте этот пример на Snack](https://snack.expo.io/?platform=android&name=header%20styles&dependencies=%40expo%2Fvector-icons%40*%2C%40react-native-community%2Fmasked-view%40*%2Creact-native-gesture-handler%40*%2Creact-native-pager-view%40*%2Creact-native-paper%40%5E4.7.2%2Creact-native-reanimated%40*%2Creact-native-safe-area-context%40*%2Creact-native-screens%40*%2Creact-native-tab-view%40%5E3.0.0%2C%40react-navigation%2Fbottom-tabs%40%5E6.0.0-next.1%2C%40react-navigation%2Fdrawer%40%5E6.0.0-next.1%2C%40react-navigation%2Fmaterial-bottom-tabs%40%5E6.0.0-next.1%2C%40react-navigation%2Fmaterial-top-tabs%40%5E6.0.0-next.1%2C%40react-navigation%2Fnative%40%5E6.0.0-next.1%2C%40react-navigation%2Fstack%40%5E6.0.0-next.6&hideQueryParams=true&sourceUrl=https%3A%2F%2Freactnavigation.org%2Fexamples%2F6.x%2Fheader-styles.js)

![header](https://reactnavigation.org/assets/images/custom_headers-70512af908cc5083811ae478a1d36425.png)

Здесь следует отметить несколько моментов:

- В iOS текст строки состояния и значки черные, и это не очень хорошо смотрится на темном фоне. Мы не будем обсуждать это здесь, но вы должны обязательно настроить строку состояния в соответствии с цветами экрана, как описано в руководстве по строке состояния.
- Установленная нами конфигурация применяется только к главному экрану; когда мы переходим к экрану подробностей, стили по умолчанию возвращаются. Теперь мы рассмотрим, как разделить параметры `options` между экранами.

## Совместное использование общих параметров на разных экранах

Часто возникает желание настроить заголовок аналогичным образом на многих экранах. Например, цвет бренда вашей компании может быть красным, поэтому вы хотите, чтобы цвет фона заголовка был красным, а цвет оттенка был белым. Для удобства это цвета, которые мы используем в нашем текущем примере, и вы заметите, что при переходе на экран `DetailsScreen` цвета возвращаются к значениям по умолчанию. Разве не было бы ужасно, если бы нам пришлось скопировать свойства стиля заголовка параметров из `HomeScreen` в `DetailsScreen` и для каждого отдельного компонента экрана, который мы используем в нашем приложении? К счастью, нет. Вместо этого мы можем переместить конфигурацию в навигатор стека в разделе prop `screenOptions`.

```jsx
const StackScreen = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'My home' }}
      />
    </Stack.Navigator>
  )
}
```

[Попробуйте этот пример на Snack](https://snack.expo.io/?platform=android&name=sharing%20header%20styles&dependencies=%40expo%2Fvector-icons%40*%2C%40react-native-community%2Fmasked-view%40*%2Creact-native-gesture-handler%40*%2Creact-native-pager-view%40*%2Creact-native-paper%40%5E4.7.2%2Creact-native-reanimated%40*%2Creact-native-safe-area-context%40*%2Creact-native-screens%40*%2Creact-native-tab-view%40%5E3.0.0%2C%40react-navigation%2Fbottom-tabs%40%5E6.0.0-next.1%2C%40react-navigation%2Fdrawer%40%5E6.0.0-next.1%2C%40react-navigation%2Fmaterial-bottom-tabs%40%5E6.0.0-next.1%2C%40react-navigation%2Fmaterial-top-tabs%40%5E6.0.0-next.1%2C%40react-navigation%2Fnative%40%5E6.0.0-next.1%2C%40react-navigation%2Fstack%40%5E6.0.0-next.6&hideQueryParams=true&sourceUrl=https%3A%2F%2Freactnavigation.org%2Fexamples%2F6.x%2Fsharing-header-styles.js)

Теперь любой экран, принадлежащий `StackScreen`, будет иметь наши замечательные фирменные стили. Конечно, должен быть способ переопределить эти параметры, если нам нужно?

## Замена заголовка на кастомный компонент

Иногда вам нужно больше контроля, чем просто изменение текста и стилей заголовка - например, вы можете захотеть отобразить изображение вместо заголовка или превратить заголовок в кнопку. В этих случаях вы можете полностью переопределить компонент, используемый для заголовка, и предоставить свой собственный.

```jsx
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
        options={{ headerTitle: props => <LogoTitle {...props} /> }}
      />
    </Stack.Navigator>
  )
}
```

[Попробуйте этот пример на Snack](https://snack.expo.io/?platform=android&name=custom%20header%20title%20component&dependencies=%40expo%2Fvector-icons%40*%2C%40react-native-community%2Fmasked-view%40*%2Creact-native-gesture-handler%40*%2Creact-native-pager-view%40*%2Creact-native-paper%40%5E4.7.2%2Creact-native-reanimated%40*%2Creact-native-safe-area-context%40*%2Creact-native-screens%40*%2Creact-native-tab-view%40%5E3.0.0%2C%40react-navigation%2Fbottom-tabs%40%5E6.0.0-next.1%2C%40react-navigation%2Fdrawer%40%5E6.0.0-next.1%2C%40react-navigation%2Fmaterial-bottom-tabs%40%5E6.0.0-next.1%2C%40react-navigation%2Fmaterial-top-tabs%40%5E6.0.0-next.1%2C%40react-navigation%2Fnative%40%5E6.0.0-next.1%2C%40react-navigation%2Fstack%40%5E6.0.0-next.6&hideQueryParams=true&sourceUrl=https%3A%2F%2Freactnavigation.org%2Fexamples%2F6.x%2Fcustom-header-title-component.js)

Вам может быть интересно, почему headerTitle, когда мы предоставляем компонент, а не `title`, как раньше? Причина в том, что `title` - это свойство, специфичное для навигатора стека, а `headerTitle` по умолчанию - это компонент Text, который отображает `title`.

## Дополнительная конфигурация

Вы можете прочитать полный список доступных опций для экранов внутри навигатора стека в справочнике [createStackNavigator](https://reactnavigation.org/docs/6.x/stack-navigator/#navigationoptions-used-by-stacknavigator).

## Done ✅

Чтобы узнать, насколько хорошо вы усвоили этот урок, пройдите тест в [мобильном приложении](http://onelink.to/njhc95) нашей школы по этой теме или в [боте Telegram](https://t.me/javascriptcamp_bot).

![Sumerian school](/img/app.jpg)

## Links

[React Navigation](https://reactnavigation.org/docs/6.x/headers)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<table>
  <tr>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /> <a href="https://github.com/gHashTag/react-native-village/commits?author=gHashTag" title="Documentation">📖💲</a></td>
  </tr>
</table>

[![Become a Patron!](/img/logo/patreon.jpg)](https://www.patreon.com/bePatron?u=31769291)
