---
id: reactnative01
title: Hello React Navigation
sidebar_label: Hello React Navigation
---

В веб-браузере вы можете ссылаться на разные страницы с помощью тега привязки `<a>`. Когда пользователь нажимает на ссылку, URL-адрес помещается в стек истории браузера. Когда пользователь нажимает кнопку «Назад», браузер выводит элемент из верхней части стека истории, поэтому теперь активной страницей является ранее посещенная страница. В React Native нет встроенного представления о стеке глобальной истории, как в веб-браузере - здесь в историю вступает React Navigation.

Навигатор стека в React Navigation позволяет вашему приложению переходить между экранами и управлять историей навигации. Если ваше приложение использует только один навигатор стека, то это концептуально похоже на то, как веб-браузер обрабатывает состояние навигации - ваше приложение выталкивает элементы из стека навигации, когда пользователи взаимодействуют с ним, и это приводит к тому, что пользователь видит разные экраны. Ключевое различие между тем, как это работает в веб-браузере и в React Navigation, заключается в том, что навигатор стека React Navigation предоставляет жесты и анимацию, которые вы ожидаете от Android и iOS при навигации между маршрутами в стеке.

Начнем с демонстрации самого распространенного навигатора `createStackNavigator`.

## Установка библиотеки навигатора стека
Библиотеки, которые мы установили до сих пор, представляют собой строительные блоки и общие основы для навигаторов, и каждый навигатор в React Navigation живет в своей собственной библиотеке. Чтобы использовать навигатор по стеку, нам нужно установить [@react-navigation/stack](https://github.com/react-navigation/react-navigation/tree/main/packages/stack):

```bash npm2yarn
npm install @react-navigation/stack@next @react-native-masked-view/masked-view
```

## Создание стека навигатора 
`createStackNavigator` - это функция, которая возвращает объект, содержащий 2 свойства: `Screen` и `Navigator`. Оба они являются компонентами React, используемыми для настройки навигатора. `Navigator` должен содержать элементы `Screen` в качестве своих дочерних элементов для определения конфигурации маршрутов.

`NavigationContainer` - это компонент, который управляет нашим деревом навигации и содержит состояние навигации. Этот компонент должен оборачивать всю структуру навигаторов. Обычно мы рендерим этот компонент в корне нашего приложения, который обычно является компонентом, экспортированным из `App.js`.

```jsx title="src/index.js" 
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

[Попробуйте этот пример на Snack](https://snack.expo.io/?platform=android&name=Getting%20started%20%7C%20React%20Navigation&dependencies=%40expo%2Fvector-icons%40*%2C%40react-native-community%2Fmasked-view%40*%2Creact-native-gesture-handler%40*%2Creact-native-pager-view%40*%2Creact-native-paper%40%5E4.7.2%2Creact-native-reanimated%40*%2Creact-native-safe-area-context%40*%2Creact-native-screens%40*%2Creact-native-tab-view%40%5E3.0.0%2C%40react-navigation%2Fbottom-tabs%40%5E6.0.0-next.1%2C%40react-navigation%2Fdrawer%40%5E6.0.0-next.1%2C%40react-navigation%2Fmaterial-bottom-tabs%40%5E6.0.0-next.1%2C%40react-navigation%2Fmaterial-top-tabs%40%5E6.0.0-next.1%2C%40react-navigation%2Fnative%40%5E6.0.0-next.1%2C%40react-navigation%2Fstack%40%5E6.0.0-next.6&hideQueryParams=true&sourceUrl=https%3A%2F%2Freactnavigation.org%2Fexamples%2F6.x%2Fhello-react-navigation.js)

![Hello React Navigation](https://reactnavigation.org/assets/images/basic_stack_nav-7388d409c412d0c728a0903301338433.png)

Если вы запустите этот код, вы увидите экран с пустой панелью навигации и серую область содержимого, содержащую ваш компонент `HomeScreen` (показанный выше). Стили, которые вы видите для панели навигации и области содержимого, являются конфигурацией по умолчанию для навигатора стека, мы узнаем, как их настроить позже.

:::info
Регистр имени маршрута не имеет значения - вы можете использовать `home` в нижнем регистре или `Home` с заглавной буквы, выбор за вами. Мы предпочитаем использовать названия маршрутов с заглавной буквы.
:::

:::info
Единственная необходимая конфигурация для экрана - это `name` и `component` свойства `props`. Вы можете узнать больше о других параметрах, доступных в [справочнике по навигатору Stack](https://reactnavigation.org/docs/6.x/stack-navigator).
:::

## Настройка навигатора
Вся конфигурация маршрута указывается в качестве реквизита для нашего навигатора. Мы не передали никакие реквизиты нашему навигатору, поэтому он просто использует конфигурацию по умолчанию.

Давайте добавим второй экран к нашему навигатору стека и настроим главный экран на рендеринг первым:

```jsx {12-16,24} title="src/index.js" 
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

[Попробуйте этот пример на Snack](https://snack.expo.io/?platform=android&name=createStackNavigator%20%7C%20React%20Navigation&dependencies=%40expo%2Fvector-icons%40*%2C%40react-native-community%2Fmasked-view%40*%2Creact-native-gesture-handler%40*%2Creact-native-pager-view%40*%2Creact-native-paper%40%5E4.7.2%2Creact-native-reanimated%40*%2Creact-native-safe-area-context%40*%2Creact-native-screens%40*%2Creact-native-tab-view%40%5E3.0.0%2C%40react-navigation%2Fbottom-tabs%40%5E6.0.0-next.1%2C%40react-navigation%2Fdrawer%40%5E6.0.0-next.1%2C%40react-navigation%2Fmaterial-bottom-tabs%40%5E6.0.0-next.1%2C%40react-navigation%2Fmaterial-top-tabs%40%5E6.0.0-next.1%2C%40react-navigation%2Fnative%40%5E6.0.0-next.1%2C%40react-navigation%2Fstack%40%5E6.0.0-next.6&hideQueryParams=true&sourceUrl=https%3A%2F%2Freactnavigation.org%2Fexamples%2F6.x%2Fhello-react-navigation-full.js)

Теперь в нашем стеке есть два маршрута: `HomeScreen` и `Details`. Маршрут можно указать с помощью компонента `Screen`. Компонент `Screen` принимает свойство `name`,  соответствующее имени маршрута, который мы будем использовать для навигации, и свойство компонента, которое соответствует компоненту, который он будет отображать.

Здесь маршрут `Home` соответствует компоненту `HomeScreen`, а маршрут `Details` соответствует компоненту `DetailsScreen`. Первоначальный маршрут для стека - это `Home` маршрут. Попробуйте изменить его на `Details` и перезагрузите приложение (Fast Refresh React Native не обновляет изменения из `initialRouteName`, как вы могли ожидать), обратите внимание, что теперь вы увидите экран `Details`. Затем верните его на `Home` и перезагрузите еще раз.

:::info
свойство `component` принимает компонент, а не функцию рендеринга. Не передавайте встроенную функцию (например, `component = {() => <HomeScreen />}`), иначе ваш компонент отключится и перемонтируется, потеряв все состояние при повторной визуализации родительского компонента. 
:::

## Определение параметров
На каждом экране навигатора можно указать некоторые параметры для навигатора, например заголовок, отображаемый в заголовке. Эти параметры можно передать в опоре `options` для каждого компонента экрана:

```jsx
<Stack.Screen
  name="Home"
  component={HomeScreen}
  options={{ title: 'Overview' }}
/>
```

[Попробуйте этот пример на Snack](https://snack.expo.io/?platform=android&name=createStackNavigator%20%7C%20React%20Navigation&dependencies=%40expo%2Fvector-icons%40*%2C%40react-native-community%2Fmasked-view%40*%2Creact-native-gesture-handler%40*%2Creact-native-pager-view%40*%2Creact-native-paper%40%5E4.7.2%2Creact-native-reanimated%40*%2Creact-native-safe-area-context%40*%2Creact-native-screens%40*%2Creact-native-tab-view%40%5E3.0.0%2C%40react-navigation%2Fbottom-tabs%40%5E6.0.0-next.1%2C%40react-navigation%2Fdrawer%40%5E6.0.0-next.1%2C%40react-navigation%2Fmaterial-bottom-tabs%40%5E6.0.0-next.1%2C%40react-navigation%2Fmaterial-top-tabs%40%5E6.0.0-next.1%2C%40react-navigation%2Fnative%40%5E6.0.0-next.1%2C%40react-navigation%2Fstack%40%5E6.0.0-next.6&hideQueryParams=true&sourceUrl=https%3A%2F%2Freactnavigation.org%2Fexamples%2F6.x%2Fhello-react-navigation-with-options.js)

Иногда нам нужно указать одни и те же параметры для всех экранов навигатора. Для этого мы можем передать навигатору свойство `screenOptions`.

## Передача дополнительных реквизитов
Иногда нам может понадобиться передать экрану дополнительные свойства. Мы можем сделать это двумя способами:
- Используйте [React context](https://reactjs.org/docs/context.html) и оберните навигатор поставщиком контекста для передачи данных на экраны (рекомендуется).
- Используйте обратный вызов рендеринга для экрана вместо указания свойства компонента:

```jsx
<Stack.Screen name="Home">
  {props => <HomeScreen {...props} extraData={someData} />}
</Stack.Screen>
```

:::info
По умолчанию React Navigation применяет оптимизацию к компонентам экрана, чтобы предотвратить ненужную визуализацию. Использование обратного вызова рендеринга удаляет эти оптимизации. Поэтому, если вы используете обратный вызов рендеринга, вам необходимо убедиться, что вы используете [React.memo](https://reactjs.org/docs/react-api.html#reactmemo) или [React.PureComponent](https://reactjs.org/docs/react-api.html#reactpurecomponent) для компонентов экрана, чтобы избежать проблем с производительностью.
:::

## Что дальше?

На этом этапе возникает естественный вопрос: «Как мне перейти от маршрута `Home` к маршруту `Details`?». Это рассматривается в следующем разделе.

## Done 

Чтобы узнать, насколько хорошо вы усвоили этот урок, пройдите тест в [мобильном приложении](http://onelink.to/njhc95) нашей школы по этой теме или в [боте Telegram](https://t.me/javascriptcamp_bot).

[![EnglishMoji!](/img/logo/NeuroCoder.png)](https://vk.com/neurocoder)

## Links

[React Navigation](https://reactnavigation.org/docs/6.x/hello-react-navigation)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<table>
  <tr>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /> <a href="https://github.com/gHashTag/react-native-village/commits?author=gHashTag" title="Documentation">  💲</a></td>
  </tr>
</table>

[![EnglishMoji!](/img/logo/NeuroCoder.png)](https://vk.com/neurocoder)


